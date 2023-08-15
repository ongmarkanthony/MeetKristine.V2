import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AdminDBMainContent from "../components/AdminDBMainContent";
import MainSidebar from "./components/globalSideBar";

const AdminDashboard = () => {
  return (
   <div className="flex">
      <MainSidebar />
      <AdminDBMainContent />
    </div>
  );
};

export default AdminDashboard;
