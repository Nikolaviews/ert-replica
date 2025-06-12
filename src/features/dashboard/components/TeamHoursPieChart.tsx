import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// A refined color palette for better visual separation and appeal
const COLORS = [
  '#4CAF50', // Green
  '#2196F3', // Blue
  '#FFC107', // Amber
  '#FF5722', // Deep Orange
  '#9C27B0', // Purple
  '#00BCD4', // Cyan
  '#E91E63', // Pink
];

const teamData = [
  { name: 'Ilango', value: 78.31 },
  { name: 'Tarun', value: 88.49 },
  { name: 'Prabhu', value: 76.24 },
  { name: 'Thairam', value: 84.47 },
  { name: 'Naveen', value: 102.44 },
  { name: 'Bhavanya', value: 72.94 },
  { name: 'Jaishree', value: 98.98 },
];

const TeamHoursPieChart = () => (
  <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 h-[350px] flex flex-col">
    <h2 className="text-lg font-semibold mb-4 text-gray-800">Team Hours</h2>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={teamData}
          cx="50%"
          cy="50%"
          outerRadius={110} // Slightly larger for better visual impact
          innerRadius={70} // A good inner radius for a clear donut
          dataKey="value"
          // Remove label lines for a cleaner look, Tooltip will provide details on hover
          labelLine={false}
          // Custom label for clarity and simplicity
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          animationBegin={0}
          animationDuration={800}
          isAnimationActive={true}
        >
          {teamData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="white" strokeWidth={1} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [`${Number(value).toFixed(2)} hrs`, 'Hours']}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '10px 14px',
          }}
          itemStyle={{ color: '#333', fontSize: 14 }}
          labelStyle={{ color: '#000', fontWeight: 'bold', marginBottom: '4px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default TeamHoursPieChart;