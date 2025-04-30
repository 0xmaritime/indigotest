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
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Sales Funnel Visualization</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Leads</span>
            <span>{funnelData.leads}</span>
          </div>
          <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-500 rounded-full"
              style={{ width: getBarWidth(funnelData.leads) }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Responses</span>
            <span>{funnelData.responses} ({conversionRates.leadsToResponses}% of leads)</span>
          </div>
          <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary-500 rounded-full"
              style={{ width: getBarWidth(funnelData.responses) }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Negotiations</span>
            <span>{funnelData.negotiations} ({conversionRates.responsesToNegotiations}% of responses)</span>
          </div>
          <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-500 rounded-full"
              style={{ width: getBarWidth(funnelData.negotiations) }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Acquisitions</span>
            <span>{funnelData.acquisitions} ({conversionRates.negotiationsToAcquisitions}% of negotiations)</span>
          </div>
          <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-success-500 rounded-full"
              style={{ width: getBarWidth(funnelData.acquisitions) }}
            ></div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-medium">Overall Conversion Rate:</span>
            <span className="text-lg font-semibold">{conversionRates.overallConversion}%</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            From initial leads to final acquisitions
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalesFunnelVisual;
