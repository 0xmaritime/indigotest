function AcquisitionMetricsTable({ acquisitionData }) {
    // Exchange rate: 1 Robux = 0.0035 USD
    const ROBUX_TO_USD = 0.0035;
  
    // Convert Robux to USD and calculate annual projections
    const acq1DailyRevenueUSD = acquisitionData[0].avgDailyRevenue * ROBUX_TO_USD;
    const acq2DailyRevenueUSD = acquisitionData[1].avgDailyRevenue * ROBUX_TO_USD;
    
    const acq1AnnualRevenueUSD = acq1DailyRevenueUSD * 365;
    const acq2AnnualRevenueUSD = acq2DailyRevenueUSD * 365;
    
    const acq1LiveOpsCost = acq1AnnualRevenueUSD * (acquisitionData[0].liveOpsExpenses / 100);
    const acq2LiveOpsCost = acq2AnnualRevenueUSD * (acquisitionData[1].liveOpsExpenses / 100);
    
    const acq1AnnualProfit = acq1AnnualRevenueUSD - acq1LiveOpsCost;
    const acq2AnnualProfit = acq2AnnualRevenueUSD - acq2LiveOpsCost;
    
    const acq1ROI = (acq1AnnualProfit / acquisitionData[0].purchasePrice) * 100;
    const acq2ROI = (acq2AnnualProfit / acquisitionData[1].purchasePrice) * 100;
    
    const acq1MaxPrice = acq1AnnualProfit / 3; // For 300% ROI
    const acq2MaxPrice = acq2AnnualProfit / 3; // For 300% ROI
  
    // Calculate revenue per DAU
    const acq1RevenuePerDauRobux = acquisitionData[0].avgDailyRevenue / acquisitionData[0].dailyActiveUsers;
    const acq2RevenuePerDauRobux = acquisitionData[1].avgDailyRevenue / acquisitionData[1].dailyActiveUsers;
    
    const acq1RevenuePerDauUSD = acq1RevenuePerDauRobux * ROBUX_TO_USD;
    const acq2RevenuePerDauUSD = acq2RevenuePerDauRobux * ROBUX_TO_USD;
  
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6 overflow-x-auto">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Acquisition Metrics Comparison</h2>
        
        <div className="bg-gray-50 p-3 sm:p-4 mb-4 sm:mb-6 rounded-lg">
          <p className="text-xs sm:text-sm text-gray-700 italic mb-0">Revenue figures converted from Robux to USD using the exchange rate: 1 Robux = $0.0035 USD. Annual projections based on daily average revenue.</p>
        </div>
        
        <div className="block sm:hidden">
          {acquisitionData.map((acq, index) => (
            <div key={`acq-${index}`} className="mb-6 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-3">Acquisition {index + 1}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Purchase Price:</span>
                  <span className="text-xs">${acq.purchasePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">LiveOps Expenses:</span>
                  <span className="text-xs">{acq.liveOpsExpenses}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Day 1 Retention:</span>
                  <span className="text-xs">{acq.day1Retention}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">First Session Retention:</span>
                  <span className="text-xs">{acq.firstSessionRetention}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Daily Active Users:</span>
                  <span className="text-xs">{acq.dailyActiveUsers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Avg Daily Revenue (R$):</span>
                  <span className="text-xs">{acq.avgDailyRevenue.toLocaleString()} R$</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Avg Daily Revenue (USD):</span>
                  <span className="text-xs">${(acq.avgDailyRevenue * ROBUX_TO_USD).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Projected Annual Profit:</span>
                  <span className="text-xs">${((acq.avgDailyRevenue * ROBUX_TO_USD * 365) - (acq.avgDailyRevenue * ROBUX_TO_USD * 365 * (acq.liveOpsExpenses / 100))).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Projected ROI:</span>
                  <span className="text-xs">{(((acq.avgDailyRevenue * ROBUX_TO_USD * 365) - (acq.avgDailyRevenue * ROBUX_TO_USD * 365 * (acq.liveOpsExpenses / 100))) / acq.purchasePrice * 100).toFixed(2)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
          <thead>
            <tr>
              <th className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Metric
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acquisition 1
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acquisition 2
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Difference
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                Purchase Price
              </td>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                ${acquisitionData[0].purchasePrice.toLocaleString()}
              </td>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                ${acquisitionData[1].purchasePrice.toLocaleString()}
              </td>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                ${(acquisitionData[0].purchasePrice - acquisitionData[1].purchasePrice).toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                LiveOps Expenses
              </td>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                {acquisitionData[0].liveOpsExpenses}%
              </td>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                {acquisitionData[1].liveOpsExpenses}%
              </td>
              <td className="px-4 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                {(acquisitionData[0].liveOpsExpenses - acquisitionData[1].liveOpsExpenses).toFixed(1)}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Day 1 Retention
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[0].day1Retention}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[1].day1Retention}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {(acquisitionData[0].day1Retention - acquisitionData[1].day1Retention).toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                First Session Retention
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[0].firstSessionRetention}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[1].firstSessionRetention}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {(acquisitionData[0].firstSessionRetention - acquisitionData[1].firstSessionRetention).toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Daily Active Users
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[0].dailyActiveUsers.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[1].dailyActiveUsers.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {(acquisitionData[0].dailyActiveUsers - acquisitionData[1].dailyActiveUsers).toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Average Daily Revenue (Robux)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[0].avgDailyRevenue.toLocaleString()} R$
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[1].avgDailyRevenue.toLocaleString()} R$
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {(acquisitionData[0].avgDailyRevenue - acquisitionData[1].avgDailyRevenue).toLocaleString()} R$
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Average Daily Revenue (USD)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq1DailyRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq2DailyRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acq1DailyRevenueUSD - acq2DailyRevenueUSD).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Revenue per DAU (USD)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq1RevenuePerDauUSD.toFixed(4)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq2RevenuePerDauUSD.toFixed(4)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acq1RevenuePerDauUSD - acq2RevenuePerDauUSD).toFixed(4)}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Projected Annual Revenue (USD)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq1AnnualRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq2AnnualRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acq1AnnualRevenueUSD - acq2AnnualRevenueUSD).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Projected LiveOps Costs (USD)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq1LiveOpsCost.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq2LiveOpsCost.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acq1LiveOpsCost - acq2LiveOpsCost).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Projected Annual Profit (USD)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq1AnnualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq2AnnualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acq1AnnualProfit - acq2AnnualProfit).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Projected ROI
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acq1ROI.toFixed(2)}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acq2ROI.toFixed(2)}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {(acq1ROI - acq2ROI).toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Maximum Price for 300% ROI
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq1MaxPrice.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acq2MaxPrice.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acq1MaxPrice - acq2MaxPrice).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Price Overpayment
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-danger-500">
                ${(acquisitionData[0].purchasePrice - acq1MaxPrice).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-danger-500">
                ${(acquisitionData[1].purchasePrice - acq2MaxPrice).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${((acquisitionData[0].purchasePrice - acq1MaxPrice) - (acquisitionData[1].purchasePrice - acq2MaxPrice)).toLocaleString(undefined, {maximumFractionDigits: 2})}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AcquisitionMetricsTable;
