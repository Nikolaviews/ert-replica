import HorizontalBarChart from './HorizontalBarChart';
import VerticalBarChart from './VerticalBarChart';
import NoDataChart from './NoDataChart';

type ChartData = {
    title: string;
    type: 'horizontal' | 'vertical' | 'none';
    data?: { name: string; value: number }[];
};

const FFPFFRChart = () => {
    const charts: ChartData[] = [
        { title: 'FFP [Level 1]', type: 'horizontal', data: [{ name: 'FFP-PartB', value: 80 }, { name: 'FFP-PartA', value: 130 }] },
        { title: 'FFP-PartB [Level 2]', type: 'vertical', data: [{ name: 'Java-Validated-code-compilation-and-deployment', value: 73.23 }] },
        { title: 'No Data Available for Level 3', type: 'none' },
        { title: 'FFR [Level 1]', type: 'horizontal', data: [{ name: 'FFR-PartA', value: 150 }, { name: 'FFR-PARTC', value: 100 }] },
        { title: 'FFR-PartA [Level 2]', type: 'vertical', data: [{ name: 'FFR-PartA', value: 325.01 }] },
        { title: 'Baseline-testing [Level 3]', type: 'vertical', data: [{ name: 'Baseline-testing', value: 0.5 }] },
    ];

    return (
        // Adjusted gap for better separation between new cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {charts.map((chart, index) => {
                if (chart.type === 'horizontal' && chart.data) {
                    return <HorizontalBarChart key={index} title={chart.title} data={chart.data} />;
                } else if (chart.type === 'vertical' && chart.data) {
                    return <VerticalBarChart key={index} title={chart.title} data={chart.data} />;
                } else if (chart.type === 'none') {
                    return <NoDataChart key={index} title={chart.title} />;
                }
                return null;
            })}
        </div>
    );
};

export default FFPFFRChart;