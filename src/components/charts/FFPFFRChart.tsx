import ChartGrid from '@/features/dashboard/components/ChartGrid';

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

    return <ChartGrid charts={charts} />;
};

export default FFPFFRChart;
