import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AdminDBMainContent from "../components/AdminDBMainContent";
import GlobalSideBar from "../components/GlobalSideBar";

const AdminDashboard = () => {
  return (
   <div className="flex">
      <GlobalSideBar />
      <AdminDBMainContent />
    </div>
  );
};

export default AdminDashboard;
