function TaskDescription() {
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Test Task</h2>
        <div className="prose max-w-none">
          <p className="mb-3 sm:mb-4 text-sm sm:text-base"><strong>Indigo VC Company</strong> thanks you for your time spent on the first stage of the interview. We hope that you will also find the test task interesting and competitive. We will be grateful if after completing it you will have an opportunity to evaluate its complexity and the amount of time spent.</p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base"><strong>We wish you good luck!</strong></p>
          
          <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">1. ANALYTICS REVIEW</h3>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Note: Keep in mind that most of the revenue numbers there are in Robux. For Investment lowest ROI we expect is around 300% (projection) for 1 year. Please take a look at these charts and give answers to following questions:</p>
          <ul className="list-disc pl-5 mb-4 sm:mb-6 space-y-1">
            <li>What was the expected ROI before acquisition?</li>
            <li>What was the actual ROI?</li>
            <li>How much would you pay for each game to fulfill our requirements?</li>
            <li>Was it a good acquisition or not in your opinion, based on the result?</li>
            <li>Mention few strong and weak parts of each of examples</li>
          </ul>
          
          <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">2. SALES DEPARTMENT FLOW</h3>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Take a look at this sales flow. Make your hypos (as many as you want) to ensure that overall sales flow will grow greatly:</p>
          <ul className="list-none mb-4 sm:mb-6 space-y-1">
            <li>Number of Leads: 65</li>
            <li>Number of Responses: 36</li>
            <li>Number of Negotiations: 20</li>
            <li>Number of Acquired Games: 8</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default TaskDescription;
