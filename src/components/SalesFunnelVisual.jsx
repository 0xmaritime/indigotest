function SalesFunnelVisual() {
  const funnelData = {
    leads: 65,
    responses: 36,
    negotiations: 20,
    acquisitions: 8
  };

  const calculatePercentage = (current, previous) => {
    return previous ? Math.round((current / previous) * 100) : 0;
  };

  const conversionRates = {
    leadsToResponses: calculatePercentage(funnelData.responses, funnelData.leads),
    responsesToNegotiations: calculatePercentage(funnelData.negotiations, funnelData.responses),
    negotiationsToAcquisitions: calculatePercentage(funnelData.acquisitions, funnelData.negotiations),
    overallConversion: calculatePercentage(funnelData.acquisitions, funnelData.leads)
  };

  const getBarWidth = (value) => {
    const maxValue = funnelData.leads;
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Sales Funnel Visualization</h2>
      
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="flex justify-between mb-1 sm:mb-2">
            <span className="text-sm sm:text-base font-medium">Leads</span>
            <span className="text-sm sm:text-base">{funnelData.leads}</span>
          </div>
          <div className="h-6 sm:h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-500 rounded-full"
              style={{ width: getBarWidth(funnelData.leads) }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1 sm:mb-2">
            <span className="text-sm sm:text-base font-medium">Responses</span>
            <span className="text-sm sm:text-base">
              {funnelData.responses} <span className="hidden sm:inline">({conversionRates.leadsToResponses}% of leads)</span>
              <span className="sm:hidden">({conversionRates.leadsToResponses}%)</span>
            </span>
          </div>
          <div className="h-6 sm:h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary-500 rounded-full"
              style={{ width: getBarWidth(funnelData.responses) }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1 sm:mb-2">
            <span className="text-sm sm:text-base font-medium">Negotiations</span>
            <span className="text-sm sm:text-base">
              {funnelData.negotiations} <span className="hidden sm:inline">({conversionRates.responsesToNegotiations}% of responses)</span>
              <span className="sm:hidden">({conversionRates.responsesToNegotiations}%)</span>
            </span>
          </div>
          <div className="h-6 sm:h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-500 rounded-full"
              style={{ width: getBarWidth(funnelData.negotiations) }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1 sm:mb-2">
            <span className="text-sm sm:text-base font-medium">Acquisitions</span>
            <span className="text-sm sm:text-base">
              {funnelData.acquisitions} <span className="hidden sm:inline">({conversionRates.negotiationsToAcquisitions}% of negotiations)</span>
              <span className="sm:hidden">({conversionRates.negotiationsToAcquisitions}%)</span>
            </span>
          </div>
          <div className="h-6 sm:h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-success-500 rounded-full"
              style={{ width: getBarWidth(funnelData.acquisitions) }}
            ></div>
          </div>
        </div>
        
        <div className="pt-3 sm:pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base font-medium">Overall Conversion:</span>
            <span className="text-base sm:text-lg font-semibold">{conversionRates.overallConversion}%</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
            From leads to acquisitions
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalesFunnelVisual;
