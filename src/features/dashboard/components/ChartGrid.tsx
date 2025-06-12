import HorizontalBarChart from '@/components/charts/HorizontalBarChart';
import VerticalBarChart from '@/components/charts/VerticalBarChart';
import NoDataChart from '@/components/charts/NoDataChart';

type ChartData = {
  title: string;
  type: 'horizontal' | 'vertical' | 'none';
  data?: { name: string; value: number }[];
};

interface ChartGridProps {
  charts: ChartData[];
}

const ChartGrid: React.FC<ChartGridProps> = ({ charts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {charts.map((chart, index) => {
        if (chart.type === 'horizontal' && chart.data) {
          return <HorizontalBarChart key={index} title={chart.title} data={chart.data} />;
        }
        if (chart.type === 'vertical' && chart.data) {
          return <VerticalBarChart key={index} title={chart.title} data={chart.data} />;
        }
        return <NoDataChart key={index} title={chart.title} />;
      })}
    </div>
  );
};

export default ChartGrid;
