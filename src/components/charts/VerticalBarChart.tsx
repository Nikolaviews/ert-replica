import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

type Props = {
  data: { name: string; value: number }[];
  title?: string;
  color?: string;
};

const VerticalBarChart = ({ data, title, color = '#818cf8' }: Props) => (
  <div className="p-4 bg-white rounded shadow">
    {title && <h4 className="text-sm font-semibold mb-2">{title}</h4>}
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill={color}>
          <LabelList dataKey="value" position="top" formatter={(val: number) => `${val} hrs`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default VerticalBarChart;
