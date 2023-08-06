import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-50_02 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto sm:pr-5 pr-6 w-full">
      <Sidebar />
      <div className="flex-1 sm:h-[1056px] h-[1109px] md:h-[1965px] md:m,t-0 mt-6 md:px-5 relative w-full">
        <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text className="font-semibold sm:text-2xl md:texxt-[26px] text-[28px] text-blue_gray-900">
              Dashboard
            </Text>
            <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[13%]">
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                <div className="md:h-9 h-[35px] mb-1 relative w-9">
                  <Img
                    className="absolute bottom-[0] h-8 left-[0] w-8"
                    src="images/img_notification.svg"
                    alt="notification"
                  />
                  <div className="absolute bg-red-700 border border-blue_gray-50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                    <Text className="font-semibold mb-0.5 ml-0.5 md:ml-[0] text-white-A700 text-xs">
                      2
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border border-blue-A700 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_profileimglarg.png"
                  alt="profileImgLarg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start w-[73%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[51%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[255px] items-center justify-start p-4 w-full"
                  style={{ backgroundImage: "url(images/img_group9824.svg" }}
                >
                  <div className="flex flex-col gap-[23px] items-center justify-start w-[37%] md:w-full">
                    <div className="h-134px] relative rounded-[20px] w-[134px]">
                      <div className="!w-[134px] h-[134px] m-auto overflow-visible"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
