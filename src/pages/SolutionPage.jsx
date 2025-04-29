import React from 'react';
import { useNavigate } from 'react-router-dom';
import Acquisition1Header from '../components/Acquisition1Header';
import Acquisition2Header from '../components/Acquisition2Header';
import RetentionAnalytics1 from '../components/graphs/RetentionAnalytics1';
import MonetizationAnalytics1 from '../components/graphs/MonetizationAnalytics1';
import EngagementAnalytics1 from '../components/graphs/EngagementAnalytics1';
import RetentionAnalytics2 from '../components/graphs/RetentionAnalytics2';
import MonetizationAnalytics2 from '../components/graphs/MonetizationAnalytics2';
import EngagementAnalytics2 from '../components/graphs/EngagementAnalytics2';

const SolutionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans max-w-7xl mx-auto p-5 bg-gray-50">
      {/* Acquisition 1 Section */}
      <div className="mb-12">
        <Acquisition1Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          <div className="space-y-6 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <RetentionAnalytics1 />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <MonetizationAnalytics1 />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <EngagementAnalytics1 />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 lg:col-span-1">
            {/* ROI Analysis for Acquisition 1 */}
            <h3 className="text-xl font-bold text-purple-600 mb-4">ROI Analysis</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Purchase Price:</h4>
                <p>100,000 Robux ($350 USD)</p>
              </div>
              <div>
                <h4 className="font-semibold">Monthly Revenue:</h4>
                <p>6,388,351 Robux ($22,359 USD)</p>
              </div>
              <div>
                <h4 className="font-semibold">Annual Revenue Projection:</h4>
                <p>76,660,212 Robux ($268,311 USD)</p>
              </div>
              <div>
                <h4 className="font-semibold">LiveOps Expenses:</h4>
                <p>20% ($53,662 USD annually)</p>
              </div>
              <div>
                <h4 className="font-semibold">Net Annual Revenue:</h4>
                <p>$214,649 USD</p>
              </div>
              <div>
                <h4 className="font-semibold">Actual ROI:</h4>
                <p>61,228%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Acquisition 2 Section */}
      <div className="mb-12">
        <Acquisition2Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
          <div className="space-y-6 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <RetentionAnalytics2 />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <MonetizationAnalytics2 />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <EngagementAnalytics2 />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 lg:col-span-1">
            {/* ROI Analysis for Acquisition 2 */}
            <h3 className="text-xl font-bold text-purple-600 mb-4">ROI Analysis</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Purchase Price:</h4>
                <p>120,000 Robux ($420 USD)</p>
              </div>
              <div>
                <h4 className="font-semibold">Monthly Revenue:</h4>
                <p>2,890,955 Robux ($10,118 USD)</p>
              </div>
              <div>
                <h4 className="font-semibold">Annual Revenue Projection:</h4>
                <p>34,691,460 Robux ($121,420 USD)</p>
              </div>
              <div>
                <h4 className="font-semibold">LiveOps Expenses:</h4>
                <p>17.5% ($21,249 USD annually)</p>
              </div>
              <div>
                <h4 className="font-semibold">Net Annual Revenue:</h4>
                <p>$100,171 USD</p>
              </div>
              <div>
                <h4 className="font-semibold">Actual ROI:</h4>
                <p>23,750%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Strengths & Weaknesses Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl text-purple-600 border-b-2 border-teal-300 pb-2 mb-6">
          Strengths & Weaknesses Comparison
        </h2>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Acquisition 1</h3>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 p-4 rounded-lg bg-green-50 border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-2">Strengths:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Exceptional revenue generation (over 6.3M Robux monthly)</li>
              <li>Strong day-1 retention (12.53%)</li>
              <li>Double the revenue per user compared to Acquisition 2</li>
              <li>Large and active user base</li>
              <li>Diverse revenue streams including significant Pass revenue</li>
            </ul>
          </div>
          <div className="flex-1 p-4 rounded-lg bg-red-50 border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-2">Weaknesses:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Higher operational costs (20% LiveOps expenses)</li>
              <li>DAU showing some decline over the observed period</li>
              <li>Revenue volatility with significant peaks and valleys</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Acquisition 2</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-4 rounded-lg bg-green-50 border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-2">Strengths:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Lower operational costs (17.5%)</li>
              <li>More stable revenue pattern</li>
              <li>Better traffic source diversification</li>
              <li>Strong growth in user acquisition</li>
              <li>More consistent DAU relative to benchmarks</li>
            </ul>
          </div>
          <div className="flex-1 p-4 rounded-lg bg-red-50 border-l-4 border-red-500">
            <h4 className="font-bold text-red-700 mb-2">Weaknesses:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Weaker day-1 retention (7.05%)</li>
              <li>Lower revenue per user (half of Acquisition 1)</li>
              <li>Lower overall revenue generation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sales Funnel Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl text-purple-600 border-b-2 border-teal-300 pb-2 mb-6">
          Sales Funnel Improvements
        </h2>
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Sales Funnel</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { label: 'Leads', value: 65 },
              { label: 'Responses', value: 36 },
              { label: 'Negotiations', value: 20 },
              { label: 'Acquisitions', value: 8 },
            ].map((step, index, arr) => (
              <React.Fragment key={step.label}>
                <div className="bg-purple-600 text-white rounded-lg p-4 w-full md:w-auto flex-1 text-center relative">
                  <span className="block text-2xl font-bold">{step.value}</span>
                  <span className="block text-sm">{step.label}</span>
                </div>
                {index < arr.length - 1 && (
                  <span className="text-purple-600 text-2xl font-bold hidden md:block">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            <strong>Current Conversion Rate</strong>: 12.3% (from Lead to Acquisition)
          </p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Improvement Hypotheses</h3>
        <div className="space-y-4">
          {[
            { title: '1. Lead Quality Enhancement', text: 'Focus on games with metrics similar to these successful acquisitions (strong retention and monetization). Implement a pre-qualification system that identifies games with >10% day-1 retention and >$0.50 revenue per DAU.' },
            { title: '2. Response Rate Optimization', text: 'Personalize outreach with data-driven insights to improve the 55% response rate. Create templates highlighting successful case studies like Acquisitions 1 & 2 to demonstrate value to potential sellers.' },
            { title: '3. Negotiation Effectiveness', text: 'Develop valuation models based on retention and monetization metrics to close more deals. Create tiered offer structures with performance-based incentives to align interests.' },
            { title: '4. Acquisition Speed', text: 'Streamline due diligence to reduce friction in the final acquisition stage. Offer transitional support packages to address developer concerns and facilitate smoother transitions.' },
            { title: '5. Portfolio Strategy', text: 'Balance between high-retention games (like Acquisition 1) and lower-cost operations (like Acquisition 2). Allocate budget specifically for games in emerging genres with high growth potential.' },
            { title: '6. Post-Acquisition Integration', text: 'Standardize the operational improvements that made these acquisitions successful. Develop a cross-promotion strategy between acquired games to boost retention and monetization.' },
          ].map(hypothesis => (
            <div key={hypothesis.title} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-1">{hypothesis.title}</h4>
              <p className="text-sm">{hypothesis.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          By implementing these changes, Indigo VC could potentially increase its lead-to-acquisition conversion from 12.3% to 20-25%, significantly expanding its portfolio with high-performing games.
        </p>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Back to Main Task
      </button>
    </div>
  );
};

export default SolutionPage;
