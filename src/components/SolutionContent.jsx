function SolutionContent() {
    // Exchange rate: 1 Robux = 0.0035 USD
    const ROBUX_TO_USD = 0.0035;
  
    // Acquisition 1
    const acq1DailyRevRobux = 228155;
    const acq1DailyRevUSD = acq1DailyRevRobux * ROBUX_TO_USD;
    const acq1AnnualRevenueUSD = acq1DailyRevUSD * 365;
    const acq1LiveOpsCost = acq1AnnualRevenueUSD * 0.2;
    const acq1AnnualProfit = acq1AnnualRevenueUSD - acq1LiveOpsCost;
    const acq1PurchasePrice = 100000;
    const acq1ROI = (acq1AnnualProfit / acq1PurchasePrice) * 100;
    const acq1MaxPurchasePrice = acq1AnnualProfit / 3;
  
    // Acquisition 2
    const acq2DailyRevRobux = 103248;
    const acq2DailyRevUSD = acq2DailyRevRobux * ROBUX_TO_USD;
    const acq2AnnualRevenueUSD = acq2DailyRevUSD * 365;
    const acq2LiveOpsCost = acq2AnnualRevenueUSD * 0.175;
    const acq2AnnualProfit = acq2AnnualRevenueUSD - acq2LiveOpsCost;
    const acq2PurchasePrice = 120000;
    const acq2ROI = (acq2AnnualProfit / acq2PurchasePrice) * 100;
    const acq2MaxPurchasePrice = acq2AnnualProfit / 3;
  
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="section-header text-xl mb-6">Solution</h2>
        
        <section className="mb-8">
          <h3 className="section-header text-lg mb-4">1. Analytics Review</h3>
          
          <div className="highlight mb-6">
            <p className="note italic mb-2">
              Note: The revenue figures in the charts are in Robux. Using an exchange rate of 1 Robux = $0.0035 USD for the calculations below.
              Annual projections are based on the average daily revenue observed in the ~1 month period shown in the charts.
            </p>
          </div>
          
          <h4 className="section-header font-medium mb-3">ROI Analysis</h4>
          <div className="mb-6">
            <p className="mb-2"><strong>For Acquisition 1:</strong></p>
            <ul className="list-disc pl-5 mb-4">
              <li>Expected ROI before acquisition: Not directly stated, but compared to the 300% minimum ROI requirement</li>
              <li>Actual ROI: 
                <ul className="list-none pl-5">
              <li>Average Daily Revenue (Robux): <span className="financial-neutral">228,155 R$</span></li>
              <li>Average Daily Revenue (USD): <span className="financial-positive">${acq1DailyRevUSD.toFixed(2)}</span></li>
              <li>Projected Annual Revenue (USD): <span className="financial-positive">${acq1AnnualRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></li>
              <li>LiveOps Costs (20%): <span className="financial-negative">${acq1LiveOpsCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></li>
              <li>Annual Profit: <span className="financial-positive">${acq1AnnualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></li>
                  <li>Purchase Price: $100,000</li>
                  <li>ROI = (Annual Profit / Purchase Price) × 100% = (${acq1AnnualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})} / $100,000) × 100% = <span className={acq1ROI >= 300 ? 'roi-high' : acq1ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq1ROI.toFixed(2)}%</span></li>
                </ul>
              </li>
            </ul>
            
            <p className="mb-2"><strong>For Acquisition 2:</strong></p>
            <ul className="list-disc pl-5 mb-4">
              <li>Expected ROI before acquisition: Not directly stated, but compared to the 300% minimum ROI requirement</li>
              <li>Actual ROI:
                <ul className="list-none pl-5">
              <li>Average Daily Revenue (Robux): <span className="financial-neutral">103,248 R$</span></li>
              <li>Average Daily Revenue (USD): <span className="financial-positive">${acq2DailyRevUSD.toFixed(2)}</span></li>
              <li>Projected Annual Revenue (USD): <span className="financial-positive">${acq2AnnualRevenueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></li>
              <li>LiveOps Costs (17.5%): <span className="financial-negative">${acq2LiveOpsCost.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></li>
              <li>Annual Profit: <span className="financial-positive">${acq2AnnualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></li>
                  <li>Purchase Price: $120,000</li>
                  <li>ROI = (Annual Profit / Purchase Price) × 100% = (${acq2AnnualProfit.toLocaleString(undefined, {maximumFractionDigits: 2})} / $120,000) × 100% = <span className={acq2ROI >= 300 ? 'roi-high' : acq2ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq2ROI.toFixed(2)}%</span></li>
                </ul>
              </li>
            </ul>
          </div>
          
          <h4 className="font-medium mb-3">Maximum Purchase Price for 300% ROI</h4>
          <div className="mb-6">
            <p className="mb-2"><strong>For Acquisition 1:</strong></p>
            <p className="mb-4">If we want exactly 300% ROI (i.e., the annual profit divided by 3):</p>
            <p className="mb-4">Maximum purchase price = <span className="financial-positive">${acq1MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></p>
            
            <p className="mb-2"><strong>For Acquisition 2:</strong></p>
            <p className="mb-4">If we want exactly 300% ROI (i.e., the annual profit divided by 3):</p>
            <p className="mb-4">Maximum purchase price = <span className="financial-positive">${acq2MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></p>
          </div>
          
          <h4 className="font-medium mb-3">Was it a Good Acquisition?</h4>
          <div className="mb-6">
            <p className="mb-4">Based on the projected ROI for each acquisition:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Acquisition 1: <span className={acq1ROI >= 300 ? 'roi-high' : acq1ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq1ROI.toFixed(2)}%</span> ROI (below the 300% target)</li>
              <li>Acquisition 2: <span className={acq2ROI >= 300 ? 'roi-high' : acq2ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq2ROI.toFixed(2)}%</span> ROI (significantly below the 300% target)</li>
            </ul>
            
            <p className="mb-4">Neither acquisition meets the minimum required ROI of 300%. However, Acquisition 1 comes much closer at <span className={acq1ROI >= 300 ? 'roi-high' : acq1ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq1ROI.toFixed(2)}%</span> compared to Acquisition 2's <span className={acq2ROI >= 300 ? 'roi-high' : acq2ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq2ROI.toFixed(2)}%</span>.</p>
            
            <p>Based strictly on the 300% ROI requirement, neither acquisition was a good investment at their respective purchase prices. Acquisition 1 would have been reasonable if purchased at around <span className="financial-positive">${acq1MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span> (instead of $100,000), while Acquisition 2 would only have made sense at a much lower price of approximately <span className="financial-positive">${acq2MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span> (instead of $120,000).</p>
          </div>
          
          <h4 className="font-medium mb-3">Strengths and Weaknesses</h4>
          <div className="mb-6">
            <div className="acq1-highlight">
              <p className="mb-2"><strong>Acquisition 1 Strengths:</strong></p>
              <ul className="list-disc pl-5 mb-4">
                <li>Significantly higher daily revenue ($798.54 vs $361.37 USD)</li>
                <li>Better Day 1 retention (12.53% vs 7.05%)</li>
                <li>Higher daily active users (243,732 vs 221,041)</li>
                <li>Stronger revenue per DAU</li>
                <li>Higher peak performance potential</li>
              </ul>
            </div>
            <div className="acq1-highlight">
              <p className="mb-2"><strong>Acquisition 1 Weaknesses:</strong></p>
              <ul className="list-disc pl-5 mb-4">
                <li>Higher LiveOps expense percentage (20% vs 17.5%)</li>
                <li>Significant volatility with sharp decline after initial peak</li>
                <li>Lower first session retention improvement (4.7% vs 37.1%)</li>
                <li>Performance trending below benchmark toward end of period</li>
              </ul>
            </div>
            <div className="acq2-highlight">
              <p className="mb-2"><strong>Acquisition 2 Strengths:</strong></p>
              <ul className="list-disc pl-5 mb-4">
                <li>Lower LiveOps expenses percentage (17.5% vs 20%)</li>
                <li>More stable performance (less volatility)</li>
                <li>Strong improvement in first session retention (37.1% vs 4.7%)</li>
                <li>More diversified traffic sources</li>
              </ul>
            </div>
            <div className="acq2-highlight">
              <p className="mb-2"><strong>Acquisition 2 Weaknesses:</strong></p>
              <ul className="list-disc pl-5 mb-4">
                <li>Much lower daily revenue ($361.37 vs $798.54 USD)</li>
                <li>Significantly lower Day 1 retention (7.05% vs 12.53%)</li>
                <li>Consistently below benchmark performance</li>
                <li>Lower revenue per daily active user</li>
                <li>Significantly worse ROI (90.68% vs 233.17%)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="section-header text-lg mb-4">2. Sales Department Flow Analysis</h3>
          
          <h4 className="section-header font-medium mb-3">Current Funnel Metrics</h4>
          <div className="mb-6">
            <div className="sales-metrics">
              <div className="metric-box">
                <h3>Number of Leads</h3>
                <div className="metric-value">65</div>
              </div>
              <div className="metric-box">
                <h3>Number of Responses</h3>
                <div className="metric-value">36</div>
                <p>(55.4% conversion)</p>
              </div>
              <div className="metric-box">
                <h3>Number of Negotiations</h3>
                <div className="metric-value">20</div>
                <p>(55.6% conversion from responses)</p>
              </div>
              <div className="metric-box">
                <h3>Number of Acquired Games</h3>
                <div className="metric-value">8</div>
                <p>(40% conversion from negotiations)</p>
              </div>
              <div className="metric-box">
                <h3>Overall Conversion</h3>
                <div className="metric-value">12.3%</div>
                <p>(from lead to acquisition)</p>
              </div>
            </div>
          </div>
          
          <h4 className="section-header font-medium mb-3">Hypotheses to Improve Sales Flow</h4>
          <div className="mb-6">
            <p>The current sales funnel shows clear conversion bottlenecks that can be addressed by focusing on the fundamental mechanics of the acquisition process:</p>

            <ol className="list-decimal pl-5">
              <li className="mb-6">
                <p className="font-medium">Lead Quality Hypothesis</p>
                <p className="mb-2"><strong>Key Leverage Points:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Establish clear qualification criteria based on proven ROI indicators (retention, monetization, growth trajectory)</li>
                  <li>Shift focus from quantity to quality, with emphasis on pre-qualification</li>
                  <li>Reallocate resources from broad outreach to deeper research on fewer, higher-potential targets</li>
                </ul>
              </li>
              
              <li className="mb-6">
                <p className="font-medium">Initial Engagement Hypothesis</p>
                <p className="mb-2"><strong>Key Leverage Points:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Refine value articulation based on developer segments and motivations (financial vs. creative vs. growth)</li>
                  <li>Establish multiple touchpoints across different channels to increase response probability</li>
                  <li>Test different message frameworks to identify what resonates with different developer segments</li>
                </ul>
              </li>
              
              <li className="mb-6">
                <p className="font-medium">Negotiation Framework Hypothesis</p>
                <p className="mb-2"><strong>Key Leverage Points:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Create transparent valuation methodology that aligns with the 300% ROI requirement</li>
                  <li>Shift negotiation emphasis from purchase price to overall value creation potential</li>
                  <li>Improve preparation and information gathering prior to negotiation to increase confidence</li>
                </ul>
              </li>
              
              <li className="mb-6">
                <p className="font-medium">Deal Structure Hypothesis</p>
                <p className="mb-2"><strong>Key Leverage Points:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Introduce flexibility in deal structures to accommodate different risk profiles and motivations</li>
                  <li>Remove unnecessary friction from the closing process (documentation, approvals, etc.)</li>
                  <li>Involve key decision-makers earlier to prevent late-stage deal collapse</li>
                </ul>
              </li>
              
              <li className="mb-6">
                <p className="font-medium">Future Value Hypothesis</p>
                <p className="mb-2"><strong>Key Leverage Points:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Demonstrate clear path from acquisition to implementation of growth strategies</li>
                  <li>Address common developer concerns about creative control and team integration proactively</li>
                  <li>Leverage existing success cases as proof points for future value creation</li>
                </ul>
              </li>
              
              <li className="mb-6">
                <p className="font-medium">Competitive Dynamics Hypothesis</p>
                <p className="mb-2"><strong>Key Leverage Points:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Establish early awareness of high-potential targets before they reach competitive bidding</li>
                  <li>Develop response capabilities that can compress decision timelines when necessary</li>
                  <li>Create differentiated positioning against competitor acquisition strategies</li>
                </ul>
              </li>
            </ol>

            <h5 className="font-medium mt-6 mb-3">Systemic View of Improvement:</h5>
            <p>These hypotheses address the sales funnel as an interconnected system. By targeting the underlying mechanics rather than symptoms, improvements in one area will create compounding effects throughout the entire acquisition process. The core logic is to:</p>
            <ol className="list-decimal pl-5">
              <li>Start with higher quality leads</li>
              <li>Engage them more effectively</li>
              <li>Frame negotiations around mutual value creation</li>
              <li>Offer flexible deal structures</li>
              <li>Provide clear post-acquisition vision</li>
              <li>Move faster than competitors</li>
            </ol>
            <p className="mt-4">This approach focuses on fundamental leverage points rather than tactical implementation details, allowing for adaptation to specific circumstances while maintaining strategic clarity.</p>
          </div>
        </section>
      </div>
    );
  }
  
  export default SolutionContent;
