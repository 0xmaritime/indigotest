import React from 'react';

// Helper component for hypotheses with desired styling
// Uses Tailwind classes referencing CSS variables from your theme
function HypothesisItem({ number, title, hypothesis, actions, validation, invalidation }) {
  return (
    <li className="py-4"> {/* Removed border-b for cleaner look within container */}
      {/* Hypothesis Title: Primary color */}
      <h5 className="text-base sm:text-lg font-semibold text-[--color-primary-500] mb-2">{number}. {title}</h5>
      
      {/* Hypothesis Statement: Italicized, standard text color */}
      <p className="text-sm sm:text-base text-gray-700 mb-3 italic">{hypothesis}</p>
      
      {/* Key Action Items: Standard list styling */}
      <div className="mb-3">
        <p className="font-medium text-sm text-gray-800 mb-1">Key Action Item(s):</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          {actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
      
      {/* Validation / Invalidation Grid: Uses Success and Danger colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div>
          <p className="font-medium text-sm text-[--color-success-500] mb-1">Validation Criteria:</p>
          <p className="text-sm text-gray-600">{validation}</p>
        </div>
        <div>
          <p className="font-medium text-sm text-[--color-danger-500] mb-1">Invalidation Criteria:</p>
          <p className="text-sm text-gray-600">{invalidation}</p>
        </div>
      </div>
    </li>
  );
}


function SolutionContent() {
    // --- UNCHANGED Calculations ---
    const ROBUX_TO_USD = 0.0035;
    const acq1DailyRevRobux = 228155;
    const acq1DailyRevUSD = acq1DailyRevRobux * ROBUX_TO_USD;
    const acq1AnnualRevenueUSD = acq1DailyRevUSD * 365;
    const acq1LiveOpsCost = acq1AnnualRevenueUSD * 0.2;
    const acq1AnnualProfit = acq1AnnualRevenueUSD - acq1LiveOpsCost;
    const acq1PurchasePrice = 100000;
    const acq1ROI = (acq1AnnualProfit / acq1PurchasePrice) * 100;
    const acq1MaxPurchasePrice = acq1AnnualProfit / 3;
    const acq2DailyRevRobux = 103248;
    const acq2DailyRevUSD = acq2DailyRevRobux * ROBUX_TO_USD;
    const acq2AnnualRevenueUSD = acq2DailyRevUSD * 365;
    const acq2LiveOpsCost = acq2AnnualRevenueUSD * 0.175;
    const acq2AnnualProfit = acq2AnnualRevenueUSD - acq2LiveOpsCost;
    const acq2PurchasePrice = 120000;
    const acq2ROI = (acq2AnnualProfit / acq2PurchasePrice) * 100;
    const acq2MaxPurchasePrice = acq2AnnualProfit / 3;

    // --- UNCHANGED Hypotheses Data ---
    const hypotheses = [
      {
        title: "Lead Quality Hypothesis",
        hypothesis: "Focusing sourcing efforts on leads with stronger baseline metrics (retention, monetization, growth) will result in more efficient use of resources and higher-value acquisitions.",
        actions: [
          "Define and document specific, non-negotiable minimum metric thresholds (e.g., D1 Retention > X%, R$/DAU > Y) for leads to enter the pipeline.",
          "Train the sourcing team on these criteria and redirect research time towards targets meeting them."
        ],
        validation: "See a higher % of sourced leads meet quality criteria; higher average projected ROI for deals entering negotiation.",
        invalidation: "See no improvement in lead quality metrics despite focused effort; pipeline shrinks without quality improvement."
      },
      {
        title: "Initial Engagement Hypothesis",
        hypothesis: "Tailoring the initial outreach message and using multiple touchpoints will increase positive engagement rates from potential targets.",
        actions: [
          "Develop distinct value proposition message templates for different developer segments (e.g., solo dev vs. established studio).",
          "Implement a multi-touch outreach sequence (e.g., email 1 -> LinkedIn connection -> email 2) for high-priority targets.",
          "A/B test different message headlines or calls-to-action."
        ],
        validation: "See higher positive response rate (e.g., meetings agreed) to initial outreach; higher conversion from contact to qualified discussion.",
        invalidation: "See no improvement in response/conversion rates despite tailored messaging and multiple touches."
      },
       {
        title: "Negotiation Framework Hypothesis",
        hypothesis: "Using a transparent valuation model tied to the 300% ROI target and focusing on value creation will lead to faster, more successful negotiations.",
        actions: [
          "Create a standardized valuation spreadsheet/model that clearly shows how key metrics translate to a valuation range based on the 300% ROI requirement.",
          "Train the deal team on how to present this model transparently during negotiations."
        ],
        validation: "See final deal values aligning more closely with the initial ROI-based framework; shorter negotiation timelines.",
        invalidation: "See continued significant deviation between initial framework and final price; no reduction in negotiation time or increase in success rate."
      },
      {
        title: "Deal Structure Hypothesis",
        hypothesis: "Offering flexible deal structures and streamlining the closing process (documentation, approvals) will reduce late-stage deal failures and accelerate closing times.",
        actions: [
          "Develop pre-approved templates for alternative deal structures (e.g., earn-outs based on post-acquisition milestones).",
          "Map the current closing process (legal, finance approvals) and identify specific bottlenecks to eliminate or expedite."
        ],
        validation: "See faster closing times (post-LOI); fewer deals collapsing between LOI and close due to process/structure issues.",
        invalidation: "See no improvement in closing speed or late-stage deal collapse rate; new structures add complexity without benefit."
      },
      {
        title: "Future Value Hypothesis",
        hypothesis: "Clearly articulating a post-acquisition growth plan and addressing integration concerns upfront will increase target confidence and reduce deal friction.",
        actions: [
          "Create standardized presentation slides or talking points outlining the typical post-acquisition support, resources, and growth levers provided.",
          "Proactively include discussion points about creative autonomy and team integration early in the negotiation process."
        ],
        validation: "See fewer objections related to post-acquisition plans during negotiation; positive feedback citing clarity of future vision.",
        invalidation: "See continued objections/skepticism about post-acquisition reality; deals lost due to these specific concerns."
      },
      {
        title: "Competitive Dynamics Hypothesis",
        hypothesis: "Identifying high-potential targets early and being able to execute deals faster when needed will improve the win rate against competitors.",
        actions: [
          "Implement more proactive market scanning (e.g., tracking rising games on leaderboards, developer forums).",
          "Develop a 'fast track' internal review and approval process for highly competitive situations."
        ],
        validation: "See higher win rate in competitive situations; more deals sourced *before* widespread competition emerges.",
        invalidation: "See no improvement in competitive win rate; consistently reacting late to competitive bids."
      }
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6">
        <h2 className="section-header text-lg sm:text-xl mb-4 sm:mb-6">Solution</h2>
        
        {/* --- Analytics Review Section (UNCHANGED from original) --- */}
        <section className="mb-6 sm:mb-8">
          <h3 className="section-header text-base sm:text-lg mb-3 sm:mb-4">1. Analytics Review</h3>
          
          <div className="highlight mb-4 sm:mb-6">
            <p className="note italic text-xs sm:text-sm mb-2">
              Note: The revenue figures in the charts are in Robux. Using an exchange rate of 1 Robux = $0.0035 USD for the calculations below.
              Annual projections are based on the average daily revenue observed in the ~1 month period shown in the charts.
            </p>
          </div>
          
          <h4 className="section-header font-medium text-sm sm:text-base mb-2 sm:mb-3">ROI Analysis</h4>
          <div className="mb-4 sm:mb-6">
            <p className="mb-2 text-sm sm:text-base"><strong>For Acquisition 1:</strong></p>
            <ul className="list-disc pl-5 mb-3 sm:mb-4 space-y-1">
              <li>Expected ROI before acquisition: Not directly stated, but compared to the 300% minimum ROI requirement</li>
              <li className="text-sm sm:text-base">Actual ROI: 
                <ul className="list-none pl-3 sm:pl-5 space-y-1">
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
            
            <p className="mb-2 text-sm sm:text-base"><strong>For Acquisition 2:</strong></p>
            <ul className="list-disc pl-5 mb-3 sm:mb-4 space-y-1">
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
          
          <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">Maximum Purchase Price for 300% ROI</h4>
          <div className="mb-4 sm:mb-6">
            <p className="mb-2 text-sm sm:text-base"><strong>For Acquisition 1:</strong></p>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">If we want exactly 300% ROI (i.e., the annual profit divided by 3):</p>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">Maximum purchase price = <span className="financial-positive">${acq1MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></p>
            
            <p className="mb-2 text-sm sm:text-base"><strong>For Acquisition 2:</strong></p>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">If we want exactly 300% ROI (i.e., the annual profit divided by 3):</p>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">Maximum purchase price = <span className="financial-positive">${acq2MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span></p>
          </div>
          
          <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">Was it a Good Acquisition?</h4>
          <div className="mb-4 sm:mb-6">
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">Based on the projected ROI for each acquisition:</p>
            <ul className="list-disc pl-5 mb-3 sm:mb-4 space-y-1">
              <li>Acquisition 1: <span className={acq1ROI >= 300 ? 'roi-high' : acq1ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq1ROI.toFixed(2)}%</span> ROI (below the 300% target)</li>
              <li>Acquisition 2: <span className={acq2ROI >= 300 ? 'roi-high' : acq2ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq2ROI.toFixed(2)}%</span> ROI (significantly below the 300% target)</li>
            </ul>
            
            <p className="mb-4">Neither acquisition meets the minimum required ROI of 300%. However, Acquisition 1 comes much closer at <span className={acq1ROI >= 300 ? 'roi-high' : acq1ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq1ROI.toFixed(2)}%</span> compared to Acquisition 2's <span className={acq2ROI >= 300 ? 'roi-high' : acq2ROI >= 100 ? 'roi-medium' : 'roi-low'}>{acq2ROI.toFixed(2)}%</span>.</p>
            
            <p>Based strictly on the 300% ROI requirement, neither acquisition was a good investment at their respective purchase prices. Acquisition 1 would have been reasonable if purchased at around <span className="financial-positive">${acq1MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span> (instead of $100,000), while Acquisition 2 would only have made sense at a much lower price of approximately <span className="financial-positive">${acq2MaxPurchasePrice.toLocaleString(undefined, {maximumFractionDigits: 2})}</span> (instead of $120,000).</p>
          </div>
          
          <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">Strengths and Weaknesses</h4>
          <div className="mb-4 sm:mb-6 space-y-4">
            <div className="acq1-highlight">
              <p className="mb-2 text-sm sm:text-base"><strong>Acquisition 1 Strengths:</strong></p>
              <ul className="list-disc pl-5 mb-3 sm:mb-4 space-y-1">
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
        
        {/* --- Sales Department Flow Analysis Section (STYLES RE-APPLIED) --- */}
        <section>
          <h3 className="section-header text-base sm:text-lg mb-3 sm:mb-4">2. Sales Department Flow Analysis</h3>
          
          {/* --- Current Funnel Metrics (UNCHANGED from original) --- */}
          <h4 className="section-header font-medium text-sm sm:text-base mb-2 sm:mb-3">Current Funnel Metrics</h4>
          <div className="mb-4 sm:mb-6">
             {/* Using the original 'sales-metrics' and 'metric-box' structure */}
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
          
          {/* --- Hypotheses Section (Styled Container and List) --- */}
          <h4 className="section-header font-medium text-sm sm:text-base mb-2 sm:mb-3">Hypotheses to Improve Sales Flow</h4>
          {/* Styled container with background, padding, border */}
          <div className="mb-4 sm:mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm"> 
            <p className="text-sm sm:text-base text-gray-700 mb-4">The current sales funnel shows clear conversion bottlenecks. Addressing the fundamental mechanics can improve outcomes:</p>
            {/* Ordered list using the styled HypothesisItem component */}
            {/* Added divide-y for separation lines between items */}
            <ol className="list-none space-y-0 divide-y divide-gray-200"> 
              {hypotheses.map((hypo, index) => (
                <HypothesisItem 
                  key={index}
                  number={index + 1}
                  title={hypo.title}
                  hypothesis={hypo.hypothesis}
                  actions={hypo.actions}
                  validation={hypo.validation}
                  invalidation={hypo.invalidation}
                />
              ))}
            </ol>
          </div> {/* End of styled container */}
            
          {/* --- Systemic View Section (Styled Container) --- */}
          <h5 className="font-medium text-sm sm:text-base mt-4 sm:mt-6 mb-2 sm:mb-3">Systemic View of Improvement:</h5>
           {/* Reusing the 'highlight' class for consistency, adding padding */}
          <div className="highlight p-4 mb-4 sm:mb-6"> 
            <p className="text-sm sm:text-base mb-2">These hypotheses address the sales funnel as an interconnected system. By targeting the underlying mechanics rather than symptoms, improvements in one area will create compounding effects throughout the entire acquisition process. The core logic is to:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700"> 
              <li>Start with higher quality leads</li>
              <li>Engage them more effectively</li>
              <li>Frame negotiations around mutual value creation</li>
              <li>Offer flexible deal structures</li>
              <li>Provide clear post-acquisition vision</li>
              <li>Move faster than competitors</li>
            </ol>
            <p className="mt-3 text-sm sm:text-base italic text-gray-600">This approach focuses on fundamental leverage points rather than tactical implementation details, allowing for adaptation to specific circumstances while maintaining strategic clarity.</p>
          </div> 
        </section>
      </div>
    );
  }
  
  export default SolutionContent;