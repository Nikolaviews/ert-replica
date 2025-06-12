const NoDataChart = ({ title = 'No Data Available' }) => (
  <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 h-[280px] flex items-center justify-center text-center"> {/* Consistent styling and centering */}
    <p className="text-xl font-semibold text-gray-400">{title}</p> {/* Larger, prominent text */}
  </div>
);

export default NoDataChart;