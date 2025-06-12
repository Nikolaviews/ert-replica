import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const jaishreeData = [
  { name: 'Baseline-testing', value: 30.26 },
  { name: 'Java-Validated-code-compilation-and-deployment', value: 65.5 },
  { name: 'Unspecified Job', value: 0.67 },
  { name: 'JAVA-EngineeringSupport', value: 0.58 },
  { name: 'Java-EngineeringSupport', value: 1.97 },
];

const IndividualLineChart = () => (
  <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 h-[350px] flex flex-col">
    <h2 className="text-lg font-semibold mb-4 text-gray-800">Individual - Jaishree</h2>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={jaishreeData}>
        <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" vertical={false} /> {/* Lighter grid lines, horizontal only */}
        <XAxis
          dataKey="name"
          interval={0}
          angle={-20} // Slight angle
          textAnchor="end"
          height={60} // Ample space for labels
          tick={{ fill: '#4A5568', fontSize: 12 }} // Darker grey for labels
          axisLine={false} // Remove X-axis line
          tickLine={false} // Remove X-axis tick lines
        />
        <YAxis
          tick={{ fill: '#6B7280', fontSize: 12 }} // Lighter grey for ticks
          axisLine={false} // Remove Y-axis line
          tickLine={false} // Remove Y-axis tick lines
        />
        <Tooltip
          formatter={(value: number) => [`${value.toFixed(2)} hrs`, 'Hours']}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            padding: '10px 12px'
          }}
          itemStyle={{ color: '#4A5568', fontSize: 14 }}
          labelStyle={{ color: '#1A202C', fontWeight: 'bold', marginBottom: '4px' }}
        />
        {/* Optional: Add a reference line for visual baseline if needed */}
        {/* <ReferenceLine y={0} stroke="#E0E0E0" strokeDasharray="3 3" /> */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3B82F6" // Stronger blue for the line
          strokeWidth={3} // Thicker line
          dot={{ r: 5, fill: '#3B82F6', stroke: 'white', strokeWidth: 2 }} // Larger, prominent dots
          activeDot={{ r: 8, fill: '#3B82F6', stroke: '#8884d8', strokeWidth: 2 }} // Active dot style
          animationBegin={0}
          animationDuration={800}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default IndividualLineChart;