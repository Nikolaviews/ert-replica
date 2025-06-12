const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li className="text-blue-600 font-medium">Overview</li>
        <li className="text-gray-700">Reports</li>
        <li className="text-gray-700">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
