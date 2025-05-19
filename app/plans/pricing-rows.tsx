// Separate components for table rows and div rows
// This is safer for Next.js hydration since it doesn't rely on client-side detection

interface PricingRowProps {
  title: string;
  description: string;
  price: string;
  required?: boolean;
}

// Table row version - use this inside <table>, <tbody>, <thead>
export function TablePricingRow({ title, description, price, required }: PricingRowProps) {
  const rowBgClass = required === true 
    ? "border-b border-gray-100 hover:bg-gray-50 bg-gray-50" 
    : "border-b border-gray-100 hover:bg-gray-50";
  
  return (
    <tr className={rowBgClass}>
      <td className="py-3 px-3 sm:px-4 align-top">
        <div className="flex flex-wrap items-center">
          <span className="font-medium text-gray-800">{title}</span>
          {required === true && (
            <span className="ml-1 sm:ml-2 text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">必須</span>
          )}
          {required === false && (
            <span className="ml-1 sm:ml-2 text-xs bg-blue-50 text-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">任意</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      </td>
      <td className="py-3 px-3 sm:px-4 text-right align-middle font-medium text-gray-700 border-l border-gray-200 min-w-[100px]">{price}</td>
    </tr>
  );
}

// Div row version - use this outside tables
export function DivPricingRow({ title, description, price, required }: PricingRowProps) {
  const rowBgClass = required === true 
    ? "border-b border-gray-100 hover:bg-gray-50 bg-gray-50" 
    : "border-b border-gray-100 hover:bg-gray-50";
  
  return (
    <div className={`${rowBgClass} flex flex-row mb-2`}>
      <div className="py-3 px-3 sm:px-4 flex-grow">
        <div className="flex flex-wrap items-center">
          <span className="font-medium text-gray-800">{title}</span>
          {required === true && (
            <span className="ml-1 sm:ml-2 text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">必須</span>
          )}
          {required === false && (
            <span className="ml-1 sm:ml-2 text-xs bg-blue-50 text-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">任意</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      </div>
      <div className="py-3 px-3 sm:px-4 text-right align-middle font-medium text-gray-700 border-l border-gray-200 min-w-[100px]">{price}</div>
    </div>
  );
}