import { ReactNode } from 'react';

interface SummaryCardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
  color?: string;
}

const SummaryCard = ({ title, value, icon, color = 'blue' }: SummaryCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
      <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold text-gray-800">{value}</h2>
      </div>
    </div>
  );
};

export default SummaryCard;