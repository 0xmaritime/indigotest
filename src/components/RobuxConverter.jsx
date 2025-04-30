import useExchangeRate from '../hooks/useExchangeRate';

function RobuxConverter() {
  const { 
    robux, 
    usd, 
    handleRobuxChange, 
    handleUsdChange,
    ROBUX_TO_USD,
    USD_TO_ROBUX
  } = useExchangeRate();

  return (
    <div className="bg-white shadow rounded-lg p-3 sm:p-4 mb-6">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Robux/USD Converter</h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-1">
          <label htmlFor="robux" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Robux
          </label>
          <input
            type="number"
            id="robux"
            value={robux}
            onChange={handleRobuxChange}
            className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter Robux amount"
          />
          <p className="text-xs text-gray-500 mt-1">
            1 Robux = ${ROBUX_TO_USD} USD
          </p>
        </div>
        <div className="flex-1">
          <label htmlFor="usd" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            USD
          </label>
          <input
            type="number"
            id="usd"
            value={usd}
            onChange={handleUsdChange}
            className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter USD amount"
          />
          <p className="text-xs text-gray-500 mt-1">
            1 USD cent = {USD_TO_ROBUX} Robux
          </p>
        </div>
      </div>
    </div>
  );
}

export default RobuxConverter;
