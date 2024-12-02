
import { Outlet } from 'react-router-dom'; // Untuk render nested routes
import AdminNavbar from '../components/AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminNavbar /> {/* Navigasi khusus admin */}
      <main className="flex-1 p-4">
        <Outlet /> {/* Tempat untuk merender halaman admin */}
      </main>
    </div>
  );
};

export default AdminLayout;
