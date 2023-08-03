function Sidebar() {
  return (
    <>
      <div className="bg-gray-50_02 flex sm:flix-col md:flex-row font-gilroy gap-[30px] items-start mx-auto sm:pr-5 pr-6 w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50_01 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-[35px] mt-[3px] w-[65%]"
              src="images/img_group_1.svg"
              alt="Group"
            />
            <div className="flex flex-col md:gap-10 gap-[441px] items-center justify-startmb-2 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] rounded-lg w-full">
                  <Line className="bg-ble-A700_01 h-6 w-0.5" />
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}

export default Sidebar;
