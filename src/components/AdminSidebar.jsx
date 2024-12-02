import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-green-700 text-white min-h-screen">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <ul className="flex flex-col space-y-4 mt-6 px-4">
        <li>
          <Link to="/admin" className="hover:text-green-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users" className="hover:text-green-300">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/content" className="hover:text-green-300">Manage Content</Link>
        </li>
        <li>
          <Link to="/admin/settings" className="hover:text-green-300">Settings</Link>
        </li>
        <li className="mt-auto">
          <Link to="/logout" className="bg-red-600 px-4 py-1 rounded text-white bg hover:text-red-300">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
