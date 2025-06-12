import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

type Props = {
  data: { name: string; value: number }[];
  title?: string;
  colors?: string[];
};

const HorizontalBarChart = ({ data, title, colors = ['#3b82f6', '#1e3a8a'] }: Props) => (
  <div className="p-4 bg-white rounded shadow">
    {title && <h4 className="text-sm font-semibold mb-2">{title}</h4>}
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value">
          {data.map((_, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HorizontalBarChart;
