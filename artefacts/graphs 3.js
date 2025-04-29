import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagementAnalytics = () => {
  // Data for Daily Active Users
  const dailyActiveUsersData = [
    { date: 'Jul 29', total: 130000, benchmark: 280000 },
    { date: 'Jul 30', total: 190000, benchmark: 300000 },
    { date: 'Jul 31', total: 240000, benchmark: 310000 },
    { date: 'Aug 1', total: 280000, benchmark: 320000 },
    { date: 'Aug 2', total: 370000, benchmark: 325000 },
    { date: 'Aug 3', total: 350000, benchmark: 320000 },
    { date: 'Aug 4', total: 320000, benchmark: 310000 },
    { date: 'Aug 5', total: 280000, benchmark: 300000 },
    { date: 'Aug 6', total: 270000, benchmark: 290000 },
    { date: 'Aug 7', total: 260000, benchmark: 280000 },
    { date: 'Aug 8', total: 300000, benchmark: 290000 },
    { date: 'Aug 9', total: 310000, benchmark: 300000 },
    { date: 'Aug 10', total: 290000, benchmark: 310000 },
    { date: 'Aug 11', total: 280000, benchmark: 300000 },
    { date: 'Aug 12', total: 260000, benchmark: 280000 },
    { date: 'Aug 13', total: 240000, benchmark: 260000 },
    { date: 'Aug 14', total: 220000, benchmark: 250000 },
    { date: 'Aug 15', total: 190000, benchmark: 260000 },
    { date: 'Aug 16', total: 180000, benchmark: 280000 },
    { date: 'Aug 17', total: 250000, benchmark: 300000 },
    { date: 'Aug 18', total: 180000, benchmark: 290000 },
    { date: 'Aug 19', total: 160000, benchmark: 280000 },
    { date: 'Aug 20', total: 190000, benchmark: 300000 },
  ];

  // Data for Unique Plays per Source
  const uniquePlaysData = [
    { date: 'Jul 8', total: 5000, home: 2000, friends: 1000, search: 800, teleport: 500, ads: 400, homeOther: 300, other: 0 },
    { date: 'Jul 15', total: 120000, home: 50000, friends: 30000, search: 20000, teleport: 15000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Jul 22', total: 190000, home: 90000, friends: 45000, search: 28000, teleport: 22000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Jul 29', total: 240000, home: 120000, friends: 50000, search: 30000, teleport: 35000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Aug 1', total: 300000, home: 200000, friends: 50000, search: 25000, teleport: 20000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Aug 5', total: 280000, home: 170000, friends: 55000, search: 30000, teleport: 20000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Aug 8', total: 260000, home: 150000, friends: 50000, search: 35000, teleport: 20000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Aug 12', total: 220000, home: 120000, friends: 45000, search: 30000, teleport: 20000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Aug 15', total: 200000, home: 110000, friends: 40000, search: 25000, teleport: 20000, ads: 3000, homeOther: 1000, other: 1000 },
    { date: 'Aug 19', total: 180000, home: 80000, friends: 45000, search: 30000, teleport: 20000, ads: 3000, homeOther: 1000, other: 1000 },
  ];

  return (
    <div className="bg-black text-white">
      <h2 className="text-4xl font-bold py-6 px-4">Engagement Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Daily Active Users */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="text-lg font-medium">Daily Active Users</h3>
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
          
          <div>
            <div className="text-gray-400 text-sm mb-1">Average over selected period</div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold mr-2">243,732 players</div>
              <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                2,143.6%
              </div>
            </div>
          </div>
          
          <div className="w-full h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={dailyActiveUsersData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fill: '#888', fontSize: 10 }}
                  axisLine={{ stroke: '#333' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#888', fontSize: 10 }}
                  domain={[0, 400000]}
                  ticks={[0, 100000, 200000, 300000, 400000]}
                  tickFormatter={(value) => value === 0 ? '0' : `${value/1000}k`}
                  axisLine={{ stroke: '#333' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#333', borderRadius: '4px', border: 'none' }}
                  labelStyle={{ color: '#fff' }}
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
        
        {/* Unique Plays per Source */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="text-lg font-medium">Unique Plays per Source</h3>
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
            <div className="bg-gray-800 p-3 rounded">
              <div className="text-gray-400 text-sm">New Users</div>
              <div className="text-2xl font-bold">102,256</div>
            </div>
            
            <div className="bg-gray-800 p-3 rounded">
              <div className="text-gray-400 text-sm">Returning Users</div>
              <div className="text-2xl font-bold">61,041</div>
            </div>
          </div>
          
          <div className="absolute right-4 top-4 flex space-x-1">
            <div className="w-10 h-10 bg-blue-100 rounded p-1 flex items-center justify-center">
              <img src="/api/placeholder/32/32" alt="Icon 1" className="w-8 h-8" />
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded p-1 flex items-center justify-center">
              <img src="/api/placeholder/32/32" alt="Icon 2" className="w-8 h-8" />
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded p-1 flex items-center justify-center">
              <img src="/api/placeholder/32/32" alt="Icon 3" className="w-8 h-8" />
            </div>
          </div>
          
          <div className="w-full h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={uniquePlaysData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fill: '#888', fontSize: 10 }}
                  axisLine={{ stroke: '#333' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#888', fontSize: 10 }}
                  domain={[0, 400000]}
                  ticks={[0, 100000, 200000, 300000, 400000]}
                  tickFormatter={(value) => value === 0 ? '0' : `${value/1000}k`}
                  axisLine={{ stroke: '#333' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#333', borderRadius: '4px', border: 'none' }}
                  labelStyle={{ color: '#fff' }}
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
                  dataKey="home"
                  stroke="#40c057"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#40c057', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Home Recommendation"
                />
                <Line
                  type="monotone"
                  dataKey="homeOther"
                  stroke="#be4bdb"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#be4bdb', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Home Other"
                />
                <Line
                  type="monotone"
                  dataKey="search"
                  stroke="#fab005"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#fab005', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Search"
                />
                <Line
                  type="monotone"
                  dataKey="friends"
                  stroke="#15aabf"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#15aabf', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Friends"
                />
                <Line
                  type="monotone"
                  dataKey="teleport"
                  stroke="#fa5252"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#fa5252', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Teleport"
                />
                <Line
                  type="monotone"
                  dataKey="ads"
                  stroke="#82c91e"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#82c91e', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Sponsored Ads"
                />
                <Line
                  type="monotone"
                  dataKey="other"
                  stroke="#fd7e14"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#fd7e14', strokeWidth: 0 }}
                  isAnimationActive={false}
                  name="Other"
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

export default EngagementAnalytics;