const NoDataChart = ({ title = 'No Data Available' }) => (
  <div className="p-4 bg-white rounded shadow h-[250px] flex items-center justify-center">
    <p className="text-gray-400 font-semibold">{title}</p>
  </div>
);

export default NoDataChart;
