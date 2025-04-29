
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagementAnalytics2 = () => {
  // Data for Daily Active Users
  const dailyActiveUsersData = [
    { date: 'Jul 29', total: 240000, benchmark: 290000 },
    { date: 'Jul 30', total: 220000, benchmark: 310000 },
    { date: 'Jul 31', total: 180000, benchmark: 300000 },
    { date: 'Aug 1', total: 190000, benchmark: 290000 },
    { date: 'Aug 2', total: 210000, benchmark: 280000 },
    { date: 'Aug 3', total: 230000, benchmark: 290000 },
    { date: 'Aug 4', total: 240000, benchmark: 300000 },
    { date: 'Aug 5', total: 220000, benchmark: 300000 },
    { date: 'Aug 6', total: 210000, benchmark: 280000 },
    { date: 'Aug 7', total: 200000, benchmark: 260000 },
    { date: 'Aug 8', total: 220000, benchmark: 250000 },
    { date: 'Aug 9', total: 230000, benchmark: 270000 },
    { date: 'Aug 10', total: 240000, benchmark: 290000 },
    { date: 'Aug 11', total: 250000, benchmark: 300000 },
    { date: 'Aug 12', total: 230000, benchmark: 300000 },
    { date: 'Aug 13', total: 210000, benchmark: 280000 },
    { date: 'Aug 14', total: 190000, benchmark: 260000 },
    { date: 'Aug 15', total: 200000, benchmark: 250000 },
    { date: 'Aug 16', total: 220000, benchmark: 260000 },
    { date: 'Aug 17', total: 250000, benchmark: 280000 },
    { date: 'Aug 18', total: 210000, benchmark: 290000 },
    { date: 'Aug 19', total: 180000, benchmark: 290000 },
    { date: 'Aug 20', total: 260000, benchmark: 300000 },
  ];

  // Data for Unique Plays per Source
  const uniquePlaysData = [
    { date: 'Jul 1', total: 1000, home: 200, friends: 100, search: 100, teleport: 500, homeOther: 50, other: 50 },
    { date: 'Jul 4', total: 50000, home: 5000, friends: 3000, search: 2000, teleport: 38000, homeOther: 1000, other: 1000 },
    { date: 'Jul 7', total: 120000, home: 20000, friends: 10000, search: 5000, teleport: 80000, homeOther: 3000, other: 2000 },
    { date: 'Jul 10', total: 160000, home: 30000, friends: 20000, search: 8000, teleport: 95000, homeOther: 4000, other: 3000 },
    { date: 'Jul 13', total: 180000, home: 35000, friends: 30000, search: 10000, teleport: 95000, homeOther: 5000, other: 5000 },
    { date: 'Jul 16', total: 200000, home: 40000, friends: 40000, search: 15000, teleport: 95000, homeOther: 5000, other: 5000 },
    { date: 'Jul 19', total: 190000, home: 45000, friends: 40000, search: 20000, teleport: 75000, homeOther: 5000, other: 5000 },
    { date: 'Jul 22', total: 180000, home: 50000, friends: 40000, search: 20000, teleport: 60000, homeOther: 5000, other: 5000 },
    { date: 'Jul 25', total: 170000, home: 55000, friends: 40000, search: 20000, teleport: 45000, homeOther: 5000, other: 5000 },
    { date: 'Jul 28', total: 180000, home: 60000, friends: 40000, search: 25000, teleport: 45000, homeOther: 5000, other: 5000 },
    { date: 'Jul 31', total: 200000, home: 70000, friends: 45000, search: 30000, teleport: 45000, homeOther: 5000, other: 5000 },
    { date: 'Aug 3', total: 190000, home: 75000, friends: 40000, search: 25000, teleport: 40000, homeOther: 5000, other: 5000 },
    { date: 'Aug 6', total: 180000, home: 70000, friends: 40000, search: 20000, teleport: 40000, homeOther: 5000, other: 5000 },
    { date: 'Aug 9', total: 190000, home: 80000, friends: 40000, search: 20000, teleport: 40000, homeOther: 5000, other: 5000 },
    { date: 'Aug 12', total: 200000, home: 85000, friends: 45000, search: 25000, teleport: 35000, homeOther: 5000, other: 5000 },
    { date: 'Aug 15', total: 180000, home: 75000, friends: 40000, search: 20000, teleport: 35000, homeOther: 5000, other: 5000 },
    { date: 'Aug 18', total: 170000, home: 70000, friends: 40000, search: 20000, teleport: 30000, homeOther: 5000, other: 5000 },
    { date: 'Aug 21', total: 180000, home: 75000, friends: 45000, search: 20000, teleport: 30000, homeOther: 5000, other: 5000 },
  ];

  return (
    <div className="text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Engagement Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="text-2xl font-bold mr-2">221,041 players</div>
              <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                214%
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
                  domain={[0, 350000]}
                  ticks={[0, 50000, 100000, 150000, 200000, 250000, 300000, 350000]}
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
              <div className="text-2xl font-bold">171,533</div>
              <div className="text-xs text-green-400">+17,153,155.4%</div>
            </div>
            
            <div className="bg-gray-800 p-3 rounded">
              <div className="text-gray-400 text-sm">Returning Users</div>
              <div className="text-2xl font-bold">60,385</div>
              <div className="text-xs text-green-400">+6,038,352.6%</div>
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
                  domain={[0, 250000]}
                  ticks={[0, 50000, 100000, 150000, 200000, 250000]}
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

export default EngagementAnalytics2;
