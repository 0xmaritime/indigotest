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
      <div className="bg-white shadow rounded-lg p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Acquisition Metrics Comparison</h2>
        
        <div className="bg-gray-50 p-4 mb-6 rounded-lg">
          <p className="text-gray-700 italic mb-0">Revenue figures converted from Robux to USD using the exchange rate: 1 Robux = $0.0035 USD. Annual projections based on daily average revenue.</p>
        </div>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Metric
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acquisition 1
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acquisition 2
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Difference
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Purchase Price
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acquisitionData[0].purchasePrice.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${acquisitionData[1].purchasePrice.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${(acquisitionData[0].purchasePrice - acquisitionData[1].purchasePrice).toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                LiveOps Expenses
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[0].liveOpsExpenses}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {acquisitionData[1].liveOpsExpenses}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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