import { ReactNode } from 'react';

interface SummaryCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  color: string;
  children?: ReactNode; // Add children prop for custom content
  footer?: ReactNode; // Add footer prop for content below the main value
  valueColor?: string; // To allow for different value colors
}

const SummaryCard = ({ title, value, icon, color, children, footer, valueColor = 'text-gray-800' }: SummaryCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600 flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className={`text-xl font-bold ${valueColor}`}>{value}</h2>
        </div>
      </div>
      {children && <div className="mt-2">{children}</div>} {/* Render children if provided */}
      {footer && <div className="mt-auto pt-2 border-t border-gray-100">{footer}</div>} {/* Render footer if provided */}
    </div>
  );
};

export default SummaryCard;