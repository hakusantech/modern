import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import PricingSimulator from './price-simulator'

// Mock the TooltipProvider component to avoid any issues with tooltips in testing
jest.mock('@/components/ui/tooltip', () => ({
  TooltipProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Tooltip: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TooltipTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TooltipContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('PricingSimulator', () => {
  beforeEach(() => {
    // Clear all mocks between tests
    jest.clearAllMocks()
  })

  test('renders the component with default values', () => {
    render(<PricingSimulator />)
    
    // Check that main elements are rendered
    expect(screen.getByText('料金シミュレーター')).toBeInTheDocument()
    expect(screen.getByText('FEプラン（ファミリー・エクスペリエンス）')).toBeInTheDocument()
    expect(screen.getByText('WSプラン（ワーカーズ・スマート）')).toBeInTheDocument()
    
    // Check input fields with default values
    expect(screen.getByLabelText('部屋数')).toHaveValue('1')
    expect(screen.getByLabelText('月間想定売上（円）')).toHaveValue('100000')
    
    // Check default selected plan
    const feTab = screen.getByRole('tab', { name: /FEプラン/ })
    expect(feTab).toHaveAttribute('data-state', 'active')
  })

  test('changes plan type when clicking on tabs', async () => {
    render(<PricingSimulator />)
    
    // Initial state is FE plan
    const feTab = screen.getByRole('tab', { name: /FEプラン/ })
    const wsTab = screen.getByRole('tab', { name: /WSプラン/ })
    
    expect(feTab).toHaveAttribute('data-state', 'active')
    expect(wsTab).not.toHaveAttribute('data-state', 'active')
    
    // Switch to WS plan
    await userEvent.click(wsTab)
    
    // WS plan should now be active
    expect(wsTab).toHaveAttribute('data-state', 'active')
    expect(feTab).not.toHaveAttribute('data-state', 'active')
  })

  test('updates room count when changing input value', async () => {
    render(<PricingSimulator />)
    
    const roomCountInput = screen.getByLabelText('部屋数')
    
    // Change room count
    await userEvent.clear(roomCountInput)
    await userEvent.type(roomCountInput, '5')
    
    expect(roomCountInput).toHaveValue('5')
    
    // Results should be recalculated with the new room count
    await waitFor(() => {
      // Check if the smartlock fees are calculated based on the new room count (5)
      // For example, 300 * 5 = 1,500 for smartlock monthly
      expect(screen.getByText(/1,500円/)).toBeInTheDocument()
    })
  })

  test('updates estimated revenue when changing input value', async () => {
    render(<PricingSimulator />)
    
    const revenueInput = screen.getByLabelText('月間想定売上（円）')
    
    // Change revenue amount
    await userEvent.clear(revenueInput)
    await userEvent.type(revenueInput, '200000')
    
    expect(revenueInput).toHaveValue('200000')
    
    // Results should be recalculated with the new revenue
    await waitFor(() => {
      // Management fee should be 20% of revenue: 200000 * 0.2 = 40000
      expect(screen.getByText(/40,000円\/月/)).toBeInTheDocument()
    })
  })

  test('updates calculations when toggling options', async () => {
    render(<PricingSimulator />)
    
    const surveyServiceCheckbox = screen.getByLabelText('調査代行料（申請要件調査・消防法確認など）')
    const tabletCheckbox = screen.getByLabelText('チェックイン用タブレット')
    
    // Toggle options
    await userEvent.click(surveyServiceCheckbox)
    await userEvent.click(tabletCheckbox)
    
    expect(surveyServiceCheckbox).toBeChecked()
    expect(tabletCheckbox).toBeChecked()
    
    // Initial costs should increase after enabling these options
    await waitFor(() => {
      const initialCostElement = screen.getAllByText(/初期費用合計/)[0].nextElementSibling
      expect(initialCostElement?.textContent).toContain('1,405,000円')
    })
  })

  test('shows appropriate differences between minpaku and ryokan options', async () => {
    render(<PricingSimulator />)
    
    // Check if the comparison table shows the differences
    const comparisonDiffElements = screen.getAllByText('差額')
    expect(comparisonDiffElements.length).toBeGreaterThan(0)
    
    // Find the initial cost difference element
    const initialCostRows = screen.getAllByText('初期費用')
    const initialCostDiff = initialCostRows[0].parentElement?.lastElementChild
    
    // Should show the difference between minpaku and ryokan costs
    expect(initialCostDiff?.textContent).toContain('+')
  })

  test('handles edge cases for input values', async () => {
    render(<PricingSimulator />)
    
    const roomCountInput = screen.getByLabelText('部屋数')
    const revenueInput = screen.getByLabelText('月間想定売上（円）')
    
    // Test with invalid room count
    await userEvent.clear(roomCountInput)
    await userEvent.type(roomCountInput, '-1')
    
    // Should default to minimum of 1
    expect(roomCountInput).toHaveValue('1')
    
    // Test with empty revenue
    await userEvent.clear(revenueInput)
    
    // Should handle empty string and set to 0
    await waitFor(() => {
      expect(screen.getAllByText(/0円\/月/).length).toBeGreaterThan(0)
    })
  })

  test('dependency between booking engine and payment integration', async () => {
    render(<PricingSimulator />)
    
    const bookingEngineCheckbox = screen.getByLabelText('自社予約エンジン')
    
    // Initially, payment integration should be disabled if not already checked
    expect(screen.queryByLabelText('決済連携機能')).not.toBeInTheDocument()
    
    // Enable booking engine
    await userEvent.click(bookingEngineCheckbox)
    
    // Payment integration option should now be visible
    const paymentIntegrationCheckbox = screen.getByLabelText('決済連携機能')
    expect(paymentIntegrationCheckbox).toBeInTheDocument()
    expect(paymentIntegrationCheckbox).not.toBeChecked()
    
    // Enable payment integration
    await userEvent.click(paymentIntegrationCheckbox)
    expect(paymentIntegrationCheckbox).toBeChecked()
    
    // Disable booking engine
    await userEvent.click(bookingEngineCheckbox)
    
    // Payment integration should be automatically disabled and hidden
    expect(screen.queryByLabelText('決済連携機能')).not.toBeInTheDocument()
  })

  test('allows modifying custom amounts for furniture and consumables', async () => {
    render(<PricingSimulator />)
    
    // Find furniture input for minpaku
    const furnitureInput = screen.getByLabelText('家具家電・什器備品 設置')
    
    // Change furniture amount
    await userEvent.clear(furnitureInput)
    await userEvent.type(furnitureInput, '2000000')
    
    expect(furnitureInput).toHaveValue('2000000')
    
    // Results should be recalculated with the new furniture amount
    await waitFor(() => {
      // Initial cost should increase
      const initialCostElement = screen.getAllByText(/初期費用合計/)[0].nextElementSibling
      expect(initialCostElement?.textContent).toContain('2,160,000円')
    })
  })
}) 