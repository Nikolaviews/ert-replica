import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#94D3AC', '#F9C74F', '#90BE6D', '#F8961E', '#F3722C', '#577590', '#F28482'];

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
  <div className="bg-white p-4 rounded shadow w-full h-[300px]">
    <h2 className="font-semibold mb-2">Team Hours</h2>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={teamData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={({ name, value }) => `${name}: ${value.toFixed(2)} hrs`}
          dataKey="value"
        >
          {teamData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value} hrs`} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default TeamHoursPieChart;
