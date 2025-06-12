const Topbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">Welcome to the Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">User</span>
        <div className="w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center">U</div>
      </div>
    </header>
  );
};

export default Topbar;
