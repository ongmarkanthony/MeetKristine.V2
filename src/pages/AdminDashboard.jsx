import AdminDBMainContent from "../components/AdminDBMainContent";
import MainSidebar from "../components/GlobalSidebar";

const AdminDashboard = () => {
  return (
   <div className="flex">
      <MainSidebar />
      <AdminDBMainContent />
    </div>
  );
};

export default AdminDashboard;
