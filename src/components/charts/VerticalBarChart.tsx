'use client';

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
  color?: string; // Allow custom color, default to a distinct purple
};

const VerticalBarChart = ({ data, title, color = '#8A2BE2' }: Props) => ( // Vibrant purple
  <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 h-[280px] flex flex-col"> {/* Consistent styling */}
    {title && <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>}
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barCategoryGap="30%" // Adjust gap between bar categories
        margin={{ top: 30, right: 20, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false} // Remove X-axis line
          tickLine={false} // Remove X-axis tick lines
          tick={{ fill: '#4A5568', fontSize: 12 }} // Darker grey for labels
          interval={0} // Show all labels
          angle={-20} // Slight angle for readability
          textAnchor="end" // Anchor text at the end for angled labels
          height={60} // Provide sufficient height for angled labels
        />
        <YAxis
          axisLine={false} // Remove Y-axis line
          tickLine={false} // Remove Y-axis tick lines
          tick={{ fill: '#6B7280', fontSize: 12 }} // Lighter grey for ticks
        />
        <Tooltip
          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            padding: '10px 12px'
          }}
          itemStyle={{ color: '#4A5568', fontSize: 14 }}
          labelStyle={{ color: '#1A202C', fontWeight: 'bold', marginBottom: '4px' }}
          formatter={(value: number) => [`${value.toFixed(2)} hrs`, 'Hours']}
        />
        <Bar dataKey="value" fill={color} barSize={40} radius={[15, 15, 0, 0]}> {/* Thicker, more rounded bars */}
          <LabelList
            dataKey="value"
            position="top"
            formatter={(val: number) => `${val.toFixed(2)} hrs`}
            fill="#333" // Darker color for better contrast
            fontSize={13}
            fontWeight="bold"
            offset={10} // Offset from the bar
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default VerticalBarChart;