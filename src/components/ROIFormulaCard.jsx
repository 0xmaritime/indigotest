import React from 'react';

function ROIFormulaCard() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">ROI Formula for Game Acquisition Analysis</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Core Formula</h3>
          <div className="bg-gray-50 p-4 rounded-md mb-2 font-mono text-center">
            ROI = (Annual Profit / Purchase Price) × 100%
          </div>
          <p className="text-sm text-gray-600">
            Where:
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-600">
            <li><strong>ROI</strong>: Return on Investment, expressed as a percentage</li>
            <li><strong>Annual Profit</strong>: The projected annual profit in USD</li>
            <li><strong>Purchase Price</strong>: The initial acquisition cost in USD</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Expanded Formula</h3>
            <div className="bg-gray-50 p-4 rounded-md mb-2 font-mono text-center">
            ROI = ((Annual Revenue - LiveOps Costs) / Purchase Price) × 100%
          </div>
          <p className="text-sm text-gray-600">
            Where:
          </p>
          <ul className="list-disc pl-6 text-sm text-gray-600">
            <li><strong>Annual Revenue</strong>: Sum of monthly revenues (with optional dropoff)</li>
            <li><strong>Monthly Revenue</strong>: 
              {`(Daily Revenue × Days) × (1 - Dropoff%)`} for each month</li>
            <li><strong>Daily Revenue</strong>: Average Daily Revenue in Robux × 0.0035 USD/Robux</li>
            <li><strong>LiveOps Costs</strong>: Annual Revenue × LiveOps Expense Percentage</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Full Calculation Process</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Convert Daily Robux Revenue to USD</strong>:
              <div className="bg-gray-50 p-2 rounded-md mt-1 font-mono text-sm">
                Daily Revenue (USD) = Daily Revenue (Robux) × 0.0035
              </div>
            </li>
            <li>
              <strong>Project to Annual Revenue</strong>:
              <div className="bg-gray-50 p-2 rounded-md mt-1 font-mono text-sm">
                Annual Revenue (USD) = Daily Revenue (USD) × 365
              </div>
            </li>
            <li>
              <strong>Calculate Annual LiveOps Costs</strong>:
              <div className="bg-gray-50 p-2 rounded-md mt-1 font-mono text-sm">
                LiveOps Costs (USD) = Annual Revenue (USD) × (LiveOps Percentage ÷ 100)
              </div>
            </li>
            <li>
              <strong>Calculate Annual Profit</strong>:
              <div className="bg-gray-50 p-2 rounded-md mt-1 font-mono text-sm">
                Annual Profit (USD) = Annual Revenue (USD) - LiveOps Costs (USD)
              </div>
            </li>
            <li>
              <strong>Calculate ROI</strong>:
              <div className="bg-gray-50 p-2 rounded-md mt-1 font-mono text-sm">
                ROI (%) = (Annual Profit (USD) ÷ Purchase Price (USD)) × 100%
              </div>
            </li>
          </ol>
        </div>
        
        <div className="text-sm text-gray-500 italic">
          <p>
            By default, calculations assume consistent revenue throughout the year.
            When Monthly Revenue Dropoff is set, revenue decreases by the specified
            percentage each month (linear approximation).
          </p>
        </div>
      </div>
    </div>
  );
}

export default ROIFormulaCard;
