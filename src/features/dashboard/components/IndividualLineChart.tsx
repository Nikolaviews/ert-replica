import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const jaishreeData = [
  { name: 'Baseline-testing', value: 30.26 },
  { name: 'Java-Validated-code-compilation-and-deployment', value: 65.5 },
  { name: 'Unspecified Job', value: 0.67 },
  { name: 'JAVA-EngineeringSupport', value: 0.58 },
  { name: 'Java-EngineeringSupport', value: 1.97 },
];

const IndividualLineChart = () => (
  <div className="bg-white p-4 rounded shadow w-full h-[300px]">
    <h2 className="font-semibold mb-2">Individual - Jaishree</h2>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={jaishreeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" height={60} />
        <YAxis />
        <Tooltip formatter={(value) => `${value} hrs`} />
        <Line type="monotone" dataKey="value" stroke="#3B82F6" dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default IndividualLineChart;
