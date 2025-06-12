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
  colors?: string[]; // Allow custom colors, default to a harmonious blue palette
};

const HorizontalBarChart = ({ data, title, colors = ['#66B2FF', '#3385FF'] }: Props) => (
  <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 h-[280px] flex flex-col"> {/* Increased height, softer shadow/border */}
    {title && <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>} {/* Larger, bolder title */}
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        barCategoryGap="20%" // Adjust gap between bar categories
        margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
      >
        <XAxis
          type="number"
          axisLine={false} // Remove X-axis line
          tickLine={false} // Remove X-axis tick lines
          tick={{ fill: '#6B7280', fontSize: 12 }} // Lighter grey for ticks
          domain={[0, 'auto']} // Ensure axis starts from 0
        />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false} // Remove Y-axis line
          tickLine={false} // Remove Y-axis tick lines
          tick={{ fill: '#4A5568', fontSize: 13 }} // Darker grey for labels
          width={120} // Adjust width for labels
        />
        <Tooltip
          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} // Light overlay on hover
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            padding: '10px 12px'
          }}
          itemStyle={{ color: '#4A5568', fontSize: 14 }}
          labelStyle={{ color: '#1A202C', fontWeight: 'bold', marginBottom: '4px' }}
          formatter={(value: number) => [`${value.toFixed(2)}`, 'Value']}
        />
        <Bar dataKey="value" barSize={30} radius={[0, 15, 15, 0]}> {/* Thicker, more rounded bars */}
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HorizontalBarChart;