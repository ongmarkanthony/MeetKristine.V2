function Sidebar() {
  return (
    <>
      <div className="bg-gray-50_02 flex sm:flix-col md:flex-row font-gilroy gap-[30px] items-start mx-auto sm:pr-5 pr-6 w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"></Sidebar>
      </div>
    </>
  );
}

export default Sidebar;
