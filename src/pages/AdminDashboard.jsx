import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-50_02 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto sm:pr-5 pr-6 w-full">
      <Sidebar />
      <div className="flex-1 sm:h-[1056px] h-[1109px] md:h-[1965px] md:m,t-0 mt-6 md:px-5 relative w-full"></div>
    </div>
  );
};

export default AdminDashboard;
