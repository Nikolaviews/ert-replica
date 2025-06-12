import MainLayout from '@/layouts/MainLayout';
import SummaryCard from '@/components/cards/SummaryCard';
import { FaClock, FaChartLine, FaChartBar, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <SummaryCard title="Total Hours" value="120" icon={<FaClock />} color="blue" />
                <SummaryCard title="FFP Hours" value="65" icon={<FaChartLine />} color="green" />
                <SummaryCard title="FFR Hours" value="55" icon={<FaChartBar />} color="orange" />
                <SummaryCard title="Invoiceable" value="$75.00" icon={<FaDollarSign />} color="teal" />
            </div>
            <p className="text-gray-500">Charts and tables will go here...</p>
        </>
    );
};

export default Dashboard;
