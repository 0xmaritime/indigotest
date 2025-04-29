import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainTask = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans max-w-4xl mx-auto p-5 bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-teal-300 text-white p-8 rounded-xl shadow-md mb-8">
        <h1 className="text-4xl font-bold mb-2">Indigo VC Analytics Review Task</h1>
        <p>Game Acquisition Performance Analysis & Sales Flow Optimization</p>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <p>Welcome to the Indigo VC Analytics Review Task. This assessment will evaluate your ability to analyze game acquisition performance and optimize sales processes.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-5">
        <h2 className="text-2xl text-purple-600 border-b-2 border-teal-300 pb-2 mt-8 mb-4">1. Analytics Review</h2>
        
        <div className="bg-blue-50 p-4 border-l-4 border-purple-600 my-4">
          <p><strong>Note:</strong> Keep in mind that most of the revenue numbers are in Robux. For Investment, the lowest ROI we expect is around 300% (projection) for 1 year.</p>
        </div>
        
        <h3 className="text-xl text-gray-700 mt-5">Your Task</h3>
        <p>Please review the analytics charts for two game acquisitions and answer the following questions:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>What was the expected ROI before acquisition?</li>
          <li>What was the actual ROI?</li>
          <li>How much would you pay for each game to fulfill our requirements?</li>
          <li>Was it a good acquisition or not in your opinion, based on the result?</li>
          <li>Mention a few strong and weak parts of each of the examples.</li>
        </ul>
        
        <h3 className="text-xl text-gray-700 mt-5">Acquisition Details</h3>
        <div className="bg-blue-50 p-4 border-l-4 border-purple-600 my-4">
          <h4 className="font-bold">Acquisition 1</h4>
          <ul className="list-disc pl-5 mt-1">
            <li>Purchase price: 100,000 Robux</li>
            <li>LiveOps expenses: 20%</li>
          </ul>
          
          <h4 className="font-bold mt-3">Acquisition 2</h4>
          <ul className="list-disc pl-5 mt-1">
            <li>Purchase price: 120,000 Robux</li>
            <li>LiveOps expenses: 17.5%</li>
          </ul>
        </div>
        
        <p className="italic text-gray-500 my-4">Analytics charts will be included showing retention, monetization, and engagement metrics for both acquisitions.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-5">
        <h2 className="text-2xl text-purple-600 border-b-2 border-teal-300 pb-2 mt-8 mb-4">2. Sales Department Flow</h2>
        <p>Take a look at this sales flow. Make your hypotheses (as many as you want) to ensure that overall sales flow will grow greatly:</p>
        
        <div className="flex flex-wrap justify-between gap-4 my-5">
          {['Leads', 'Responses', 'Negotiations', 'Acquired Games'].map((metric, idx) => (
            <div key={metric} className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[200px] shadow-sm">
              <h3 className="text-lg text-purple-600">Number of {metric}</h3>
              <div className="text-3xl font-bold my-2">{[65, 36, 20, 8][idx]}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-4 border-l-4 border-purple-600 my-4">
          <h3 className="text-xl text-gray-700">Your Task</h3>
          <p>Analyze the current sales funnel and provide hypotheses to significantly improve the overall sales flow.</p>
        </div>
      </div>

      <button 
        onClick={() => navigate('/solution')}
        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        View Solution Analysis
      </button>

      <footer className="text-center mt-10 text-gray-500 text-sm py-5">
        <p>© 2025 Indigo VC Company - Test Task for Analytics Position</p>
      </footer>
    </div>
  );
};

export default MainTask;
