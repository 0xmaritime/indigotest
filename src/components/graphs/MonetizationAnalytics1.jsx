import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonetizationAnalytics = () => {
  // Data for Daily Revenue
  const dailyRevenueData = [
    { date: 'Jul 29', total: 60000, benchmark: 310000 },
    { date: 'Jul 30', total: 85000, benchmark: 290000 },
    { date: 'Jul 31', total: 100000, benchmark: 270000 },
    { date: 'Aug 1', total: 250000, benchmark: 280000 },
    { date: 'Aug 2', total: 280000, benchmark: 300000 },
    { date: 'Aug 3', total: 330000, benchmark: 340000 },
    { date: 'Aug 4', total: 440000, benchmark: 330000 },
    { date: 'Aug 5', total: 310000, benchmark: 310000 },
    { date: 'Aug 6', total: 270000, benchmark: 290000 },
    { date: 'Aug 7', total: 250000, benchmark: 280000 },
    { date: 'Aug 8', total: 290000, benchmark: 290000 },
    { date: 'Aug 9', total: 340000, benchmark: 320000 },
    { date: 'Aug 10', total: 310000, benchmark: 350000 },
    { date: 'Aug 11', total: 280000, benchmark: 330000 },
    { date: 'Aug 12', total: 240000, benchmark: 290000 },
    { date: 'Aug 13', total: 220000, benchmark: 250000 },
    { date: 'Aug 14', total: 200000, benchmark: 230000 },
    { date: 'Aug 15', total: 170000, benchmark: 260000 },
    { date: 'Aug 16', total: 170000, benchmark: 290000 },
    { date: 'Aug 17', total: 260000, benchmark: 320000 },
    { date: 'Aug 18', total: 140000, benchmark: 290000 },
    { date: 'Aug 19', total: 110000, benchmark: 260000 },
    { date: 'Aug 20', total: 170000, benchmark: 250000 },
  ];

  // Data for Revenue Sources
  const revenueSourcesData = [
    { date: 'Jul 29', total: 60000, developer: 54000, passes: 5500, privateServers: 480, commission: 20 },
    { date: 'Jul 30', total: 85000, developer: 76000, passes: 8200, privateServers: 770, commission: 30 },
    { date: 'Jul 31', total: 100000, developer: 90000, passes: 9200, privateServers: 770, commission: 30 },
    { date: 'Aug 1', total: 250000, developer: 225000, passes: 24000, privateServers: 950, commission: 50 },
    { date: 'Aug 2', total: 280000, developer: 252000, passes: 27000, privateServers: 950, commission: 50 },
    { date: 'Aug 3', total: 330000, developer: 297000, passes: 32000, privateServers: 950, commission: 50 },
    { date: 'Aug 4', total: 440000, developer: 395000, passes: 44000, privateServers: 950, commission: 55 },
    { date: 'Aug 5', total: 310000, developer: 278000, passes: 31000, privateServers: 950, commission: 50 },
    { date: 'Aug 6', total: 270000, developer: 243000, passes: 26000, privateServers: 950, commission: 50 },
    { date: 'Aug 7', total: 250000, developer: 225000, passes: 24000, privateServers: 950, commission: 50 },
    { date: 'Aug 8', total: 290000, developer: 261000, passes: 28000, privateServers: 950, commission: 50 },
    { date: 'Aug 9', total: 340000, developer: 306000, passes: 33000, privateServers: 950, commission: 50 },
    { date: 'Aug 10', total: 310000, developer: 278000, passes: 31000, privateServers: 950, commission: 50 },
    { date: 'Aug 11', total: 280000, developer: 252000, passes: 27000, privateServers: 950, commission: 50 },
    { date: 'Aug 12', total: 240000, developer: 215000, passes: 24000, privateServers: 950, commission: 50 },
    { date: 'Aug 13', total: 220000, developer: 198000, passes: 21000, privateServers: 950, commission: 50 },
    { date: 'Aug 14', total: 200000, developer: 180000, passes: 19000, privateServers: 950, commission: 50 },
    { date: 'Aug 15', total: 170000, developer: 153000, passes: 16000, privateServers: 950, commission: 50 },
    { date: 'Aug 16', total: 170000, developer: 153000, passes: 16000, privateServers: 950, commission: 50 },
    { date: 'Aug 17', total: 260000, developer: 234000, passes: 25000, privateServers: 950, commission: 50 },
    { date: 'Aug 18', total: 140000, developer: 126000, passes: 13000, privateServers: 950, commission: 50 },
    { date: 'Aug 19', total: 110000, developer: 99000, passes: 10000, privateServers: 950, commission: 50 },
    { date: 'Aug 20', total: 170000, developer: 153000, passes: 16000, privateServers: 950, commission: 50 },
  ];

  return (
    <div className="text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Monetization Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Revenue */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="text-lg font-medium">Daily Revenue</h3>
              <span className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Average over selected period</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-2xl font-bold mr-2">228,155</div>
                <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  2,030.1%
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400 text-sm mb-1">Total over selected period</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-2xl font-bold">6,388,351</div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={dailyRevenueData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                  domain={[0, 500000]}
                  ticks={[0, 100000, 200000, 300000, 400000, 500000]}
                  tickFormatter={(value) => value === 0 ? '0' : `${value/1000}k`}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#f9fafb', borderRadius: '4px', border: '1px solid #e5e7eb' }}
                  labelStyle={{ color: '#111827' }}
                  formatter={(value) => [value.toLocaleString(), '']}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#4dabf7"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#4dabf7', strokeWidth: 0 }}
                  activeDot={{ r: 4 }}
                  isAnimationActive={false}
                  name="Total"
                />
                <Line
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#666"
                  strokeWidth={1.5}
                  dot={false}
                  isAnimationActive={false}
                  name="Benchmark (Top 200 experience)"
                />
                <Legend 
                  align="left"
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ paddingTop: '10px' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Revenue Sources */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="text-lg font-medium">Revenue Sources</h3>
              <span className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <div className="text-gray-400 text-sm mb-1">Developer Products</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-lg font-bold mr-2">5,426,015</div>
                <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  2,621.9%
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400 text-sm mb-1">Passes</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-lg font-bold mr-2">930,905</div>
                <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  3,676.6%
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400 text-sm mb-1">Private Servers</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-lg font-bold mr-2">30,870</div>
                <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  3,575.0%
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400 text-sm mb-1">Commission For Avatar Shop Items</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-lg font-bold mr-2">561</div>
                <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  461.0%
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400 text-sm mb-1">Unknown</div>
              <div className="flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-lg font-bold">0</div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueSourcesData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                  domain={[0, 500000]}
                  ticks={[0, 100000, 200000, 300000, 400000, 500000]}
                  tickFormatter={(value) => value === 0 ? '0' : `${value/1000}k`}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#f9fafb', borderRadius: '4px', border: '1px solid #e5e7eb' }}
                  labelStyle={{ color: '#111827' }}
                  formatter={(value) => [value.toLocaleString(), '']}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#4dabf7"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#4dabf7', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Total"
                />
                <Line
                  type="monotone"
                  dataKey="developer"
                  stroke="#40c057"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#40c057', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Developer Products"
                />
                <Line
                  type="monotone"
                  dataKey="passes"
                  stroke="#be4bdb"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#be4bdb', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Passes"
                />
                <Line
                  type="monotone"
                  dataKey="privateServers"
                  stroke="#fd7e14"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#fd7e14', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Private Servers"
                />
                <Line
                  type="monotone"
                  dataKey="commission"
                  stroke="#20c997"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#20c997', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Commission For Avatar Shop Items"
                />
                <Legend 
                  align="left"
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ paddingTop: '10px' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationAnalytics;
