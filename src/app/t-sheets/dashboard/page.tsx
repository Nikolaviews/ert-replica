import SummaryCard from '@/components/cards/SummaryCard';
import { Clock, LineChart, BarChart, DollarSign } from 'lucide-react';
import TabbedSection from '@/components/shared/TabbedSection';
import Header from '@/layout/Header';

const Dashboard = () => {
    return (
         <>
    <Header/>
        <div className= "p-4">
            {/* Summary Cards */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                {/* Total Hours Card */}
                <SummaryCard
                    title="Total Hours"
                    value="120"
                    icon={<Clock size={24} />}
                    color="blue"
                >
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-1">
                            <span>FFP</span>
                            <LineChart size={16} className="text-green-500" />
                        </div>
                        <div className="flex items-center gap-1">
                            <span>FFR</span>
                            <BarChart size={16} className="text-red-500 transform rotate-180" /> {/* Rotate to show downward trend if needed */}
                        </div>
                    </div>
                </SummaryCard>

                {/* FFP Hours Card */}
                <SummaryCard
                    title="FFP Hours"
                    value="65"
                    icon={<LineChart size={24} />}
                    color="green"
                    valueColor="text-green-600" // Set value color to green
                >
                    <div className="flex items-center text-sm text-green-500 font-medium">
                        <span className="text-green-500 mr-1">+5%</span>
                        <LineChart size={16} className="text-green-500" />
                    </div>
                </SummaryCard>

                {/* FFR Hours Card */}
                <SummaryCard
                    title="FFR Hours"
                    value="55"
                    icon={<BarChart size={24} />}
                    color="orange"
                    valueColor="text-orange-600" // Set value color to orange
                >
                    <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                        <div className="flex flex-col">
                            <span className="font-semibold">Ind. Sr:</span>
                            <span>20</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Ind. Jr:</span>
                            <span>25</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">HQ:</span>
                            <span>10</span>
                        </div>
                    </div>
                </SummaryCard>

                {/* Invoiceable Card */}
                <SummaryCard
                    title="Invoiceable"
                    value="$75.00"
                    icon={<DollarSign size={24} />}
                    color="cyan"
                    valueColor="text-blue-600" // Set value color to blue
                >
                    <div className="grid grid-cols-6 gap-2 text-sm font-medium">
                        <div className="col-span-2 bg-blue-50 text-blue-800 p-2 rounded-lg">
                            <p>FFP: $45</p>
                        </div>
                        <div className="col-span-4 bg-blue-50 text-blue-800 p-2 rounded-lg">
                            <p>FFR: $30</p>
                            <div className="flex justify-between text-xs text-gray-600 mt-1">
                                <p>Ind. Sr: $12</p>
                                <div className="border-r"></div>
                                <p>Ind. Jr: $10</p>
                                <div className="border-r"></div>
                                <p>HQ: $8</p>
                            </div>
                        </div>
                    </div>
                </SummaryCard>
            </div>

            {/* Tabs Section */}
            <TabbedSection />
        </div>
        </>
    );
};

export default Dashboard;