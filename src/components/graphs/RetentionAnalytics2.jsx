import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const RetentionAnalytics2 = () => {
  // Data for Day 1 Retention
  const day1RetentionData = [
    { date: 'Jul 29', value: 7.2 },
    { date: 'Jul 30', value: 6.8 },
    { date: 'Jul 31', value: 7.1 },
    { date: 'Aug 1', value: 7.4 },
    { date: 'Aug 2', value: 8.0 },
    { date: 'Aug 3', value: 7.8 },
    { date: 'Aug 4', value: 7.2 },
    { date: 'Aug 5', value: 7.0 },
    { date: 'Aug 6', value: 6.5 },
    { date: 'Aug 7', value: 6.0 },
    { date: 'Aug 8', value: 7.0 },
    { date: 'Aug 9', value: 7.5 },
    { date: 'Aug 10', value: 7.2 },
    { date: 'Aug 11', value: 7.0 },
    { date: 'Aug 12', value: 6.6 },
    { date: 'Aug 13', value: 6.0 },
    { date: 'Aug 14', value: 6.5 },
    { date: 'Aug 15', value: 7.0 },
    { date: 'Aug 16', value: 7.2 },
    { date: 'Aug 17', value: 6.0 },
    { date: 'Aug 18', value: 7.0 },
    { date: 'Aug 19', value: 7.5 },
    { date: 'Aug 20', value: 7.2 },
  ];

  // Data for First Session Retention
  const firstSessionData = [
    { time: '00:00', current: 100, previous: 100 },
    { time: '01:00', current: 90, previous: 85 },
    { time: '02:00', current: 80, previous: 70 },
    { time: '03:00', current: 70, previous: 60 },
    { time: '04:00', current: 65, previous: 55 },
    { time: '05:00', current: 60, previous: 45 },
    { time: '06:00', current: 55, previous: 40 },
    { time: '09:00', current: 45, previous: 35 },
    { time: '12:00', current: 40, previous: 30 },
    { time: '15:00', current: 35, previous: 25 },
    { time: '18:00', current: 30, previous: 22 },
    { time: '21:00', current: 28, previous: 20 },
    { time: '24:00', current: 25, previous: 18 },
    { time: '27:00', current: 23, previous: 15 },
    { time: '30:00', current: 20, previous: 13 },
  ];

  return (
    <div className="bg-black text-white">
      <h2 className="text-4xl font-bold py-6 px-4">Retention analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Day 1 Retention */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="text-lg font-medium">Day 1 Retention</h3>
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
          
          <div className="text-gray-400 text-sm mb-1">Average over selected period</div>
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold mr-3">7.05%</div>
            <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              1.7%
            </div>
          </div>
          
          <div className="w-full h-64 relative">
            <div className="absolute inset-0">
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={day1RetentionData}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid stroke="#333" strokeDasharray="3 3" vertical={false} />
                    <defs>
                      <linearGradient id="gradientArea2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#333" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#333" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date" 
                      tick={{ fill: '#888', fontSize: 10 }}
                      axisLine={{ stroke: '#333' }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#888', fontSize: 10 }}
                      ticks={[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5]}
                      domain={[0, 17.5]}
                      tickFormatter={(value) => `${value}%`}
                      axisLine={{ stroke: '#333' }}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#333', borderRadius: '4px', border: 'none' }}
                      labelStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value}%`, 'Total']}
                    />
                    <Area 
                      type="basis" 
                      dataKey="value" 
                      fill="url(#gradientArea2)" 
                      stroke="none" 
                      fillOpacity={0.3}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#4dabf7"
                      strokeWidth={2}
                      dot={{ r: 2, fill: '#4dabf7', strokeWidth: 0 }}
                      activeDot={{ r: 4, fill: '#4dabf7' }}
                      isAnimationActive={false}
                    />
                    <Legend 
                      align="left"
                      verticalAlign="bottom"
                      iconType="circle"
                      iconSize={8}
                      wrapperStyle={{ paddingTop: '10px' }}
                      formatter={(value) => (
                        <span style={{ color: value === 'Total' ? '#4dabf7' : '#666' }}>
                          {value}
                        </span>
                      )}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        {/* First Session Retention */}
        <div className="bg-gray-900 p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="text-lg font-medium">New User First Session Retention</h3>
              <span className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="text-gray-400 text-sm mb-1">Percent still playing after 5 minutes</div>
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold mr-3">53.32%</div>
            <div className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              3.71%
            </div>
          </div>
          
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={firstSessionData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#888', fontSize: 10 }}
                  axisLine={{ stroke: '#333' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#888', fontSize: 10 }}
                  ticks={[0, 25, 50, 75, 100]}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                  axisLine={{ stroke: '#333' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#333', borderRadius: '4px', border: 'none' }}
                  labelStyle={{ color: '#fff' }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#4dabf7"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#4dabf7', strokeWidth: 0 }}
                  activeDot={{ r: 4 }}
                  isAnimationActive={false}
                  name="% still playing (current)"
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#4dabf7"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  dot={false}
                  isAnimationActive={false}
                  name="% still playing (previous)"
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

export default RetentionAnalytics2;
