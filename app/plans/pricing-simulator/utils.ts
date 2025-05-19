import { PlanType, BusinessType } from "./types";
import { feeConfig } from "./data";

/**
 * Formats a number to a localized currency string (Japanese Yen)
 */
export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString("ja-JP");
};

/**
 * Parses a string input to a number, removing non-numeric characters
 */
export const parseNumericInput = (input: string): number => {
  const numericString = input.replace(/[^\d]/g, "");
  return numericString === "" ? 0 : parseInt(numericString, 10);
};

/**
 * Calculates fee based on inputs
 */
export const calculateFee = (
  planType: PlanType,
  businessType: BusinessType,
  roomCount: number,
  expectedSales: number,
  selectedOptions: string[]
): number => {
  // Get base fee from config
  let baseFee = feeConfig.baseFees[planType];
  
  // Adjust by room count - ensure roomCount is at least 1
  const validRoomCount = Math.max(1, roomCount);
  const roomMultiplier = validRoomCount > 1 ? 1 + ((validRoomCount - 1) * 0.5) : 1;
  baseFee = baseFee * roomMultiplier;
  
  // Adjust by business type
  baseFee = baseFee * feeConfig.businessTypeMultiplier[businessType];
  
  // Add option fees
  let optionFee = 0;
  selectedOptions.forEach(option => {
    if (option in feeConfig.optionFees) {
      optionFee += feeConfig.optionFees[option as keyof typeof feeConfig.optionFees];
    }
  });
  
  // Apply revenue-based discount if applicable
  let revenueDiscount = 0;
  const { high, medium } = feeConfig.revenueDiscounts;
  
  // Ensure expectedSales is a non-negative number
  const validExpectedSales = Math.max(0, expectedSales);
  
  if (validExpectedSales > high.threshold) {
    revenueDiscount = high.rate;
  } else if (validExpectedSales > medium.threshold) {
    revenueDiscount = medium.rate;
  }
  
  return Math.round((baseFee + optionFee) * (1 - revenueDiscount));
};