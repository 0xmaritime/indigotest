import { useState, useEffect } from 'react';

function ROICalculator() {
  // Exchange rate: 1 Robux = 0.0035 USD
  const ROBUX_TO_USD = 0.0035;
  
  const [revenueType, setRevenueType] = useState('daily');
  const [dailyRevenueRobux, setDailyRevenueRobux] = useState(228155);
  const [monthlyRevenueRobux, setMonthlyRevenueRobux] = useState(6388351);
  const [purchasePrice, setPurchasePrice] = useState(100000);
  const [liveOpsPercent, setLiveOpsPercent] = useState(20);
  const [targetROI, setTargetROI] = useState(300);
  
  const [calculatedROI, setCalculatedROI] = useState(0);
  const [maxPurchasePrice, setMaxPurchasePrice] = useState(0);
  const [annualRevenueUSD, setAnnualRevenueUSD] = useState(0);
  const [annualLiveOpsCosts, setAnnualLiveOpsCosts] = useState(0);
  const [annualProfit, setAnnualProfit] = useState(0);
  
  useEffect(() => {
    // Convert to annual revenue in USD based on selected revenue type
    let annualRevUSD = 0;
    
    if (revenueType === 'daily') {
      // Project annual revenue from daily average
      const dailyRevenueUSD = dailyRevenueRobux * ROBUX_TO_USD;
      annualRevUSD = dailyRevenueUSD * 365;
    } else {
      // Project annual revenue from monthly total (multiply by 12)
      const monthlyRevenueUSD = monthlyRevenueRobux * ROBUX_TO_USD;
      annualRevUSD = monthlyRevenueUSD * 12;
    }
    
    // Calculate LiveOps costs based on annual revenue
    const liveOpsCost = (liveOpsPercent / 100) * annualRevUSD;
    
    // Calculate annual profit
    const profit = annualRevUSD - liveOpsCost;
    
    // Calculate ROI based on annual profit and purchase price
    const roi = (profit / purchasePrice) * 100;
    
    // Calculate maximum purchase price for target ROI
    const maxPrice = profit / (targetROI / 100);
    
    // Update state with calculated values
    setAnnualRevenueUSD(annualRevUSD);
    setAnnualLiveOpsCosts(liveOpsCost);
    setAnnualProfit(profit);
    setCalculatedROI(roi);
    setMaxPurchasePrice(maxPrice);
    
  }, [revenueType, dailyRevenueRobux, monthlyRevenueRobux, purchasePrice, liveOpsPercent, targetROI]);

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">ROI Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Revenue Input Type
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="revenueType"
                  value="daily"
                  checked={revenueType === 'daily'}
                  onChange={() => setRevenueType('daily')}
                />
                <span className="ml-2">Daily Average Revenue</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="revenueType"
                  value="monthly"
                  checked={revenueType === 'monthly'}
                  onChange={() => setRevenueType('monthly')}
                />
                <span className="ml-2">Monthly Total Revenue</span>
              </label>
            </div>
          </div>
          
          {revenueType === 'daily' ? (
            <div>
              <label htmlFor="dailyRevenueRobux" className="block text-sm font-medium text-gray-700 mb-1">
                Average Daily Revenue (Robux)
              </label>
              <input
                type="number"
                id="dailyRevenueRobux"
                value={dailyRevenueRobux}
                onChange={(e) => setDailyRevenueRobux(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                = ${(dailyRevenueRobux * ROBUX_TO_USD).toFixed(2)} USD per day
              </p>
            </div>
          ) : (
            <div>
              <label htmlFor="monthlyRevenueRobux" className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Total Revenue (Robux)
              </label>
              <input
                type="number"
                id="monthlyRevenueRobux"
                value={monthlyRevenueRobux}
                onChange={(e) => setMonthlyRevenueRobux(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                = ${(monthlyRevenueRobux * ROBUX_TO_USD).toFixed(2)} USD per month
              </p>
            </div>
          )}
          
          <div>
            <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700 mb-1">
              Purchase Price (USD)
            </label>
            <input
              type="number"
              id="purchasePrice"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="liveOpsPercent" className="block text-sm font-medium text-gray-700 mb-1">
              LiveOps Expenses (%)
            </label>
            <input
              type="number"
              id="liveOpsPercent"
              value={liveOpsPercent}
              onChange={(e) => setLiveOpsPercent(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="targetROI" className="block text-sm font-medium text-gray-700 mb-1">
              Target ROI (%)
            </label>
            <input
              type="number"
              id="targetROI"
              value={targetROI}
              onChange={(e) => setTargetROI(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center bg-gray-50 p-6 rounded-lg">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Projected Annual Revenue</h3>
            <div className="text-xl font-semibold">
              ${annualRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              LiveOps Costs: ${annualLiveOpsCosts.toLocaleString(undefined, {maximumFractionDigits: 2})} ({liveOpsPercent}%)
            </p>
            <p className="text-sm text-gray-600">
              Annual Profit: ${annualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Projected ROI</h3>
            <div className={`text-3xl font-bold ${calculatedROI >= targetROI ? 'text-success-500' : 'text-danger-500'}`}>
              {calculatedROI.toFixed(2)}%
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {calculatedROI >= targetROI ? 
                '✅ Meets or exceeds target ROI' : 
                '❌ Below target ROI'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Maximum Purchase Price</h3>
            <div className="text-2xl font-bold text-secondary-500">
              ${maxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              For {targetROI}% ROI target
            </p>
            {purchasePrice > maxPurchasePrice && (
              <p className="text-sm text-danger-500 mt-2">
                Current purchase price is ${(purchasePrice - maxPurchasePrice).toLocaleString(undefined, {maximumFractionDigits: 2})} over the maximum price for target ROI
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ROICalculator;