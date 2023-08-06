const Sidebar = () => {
  return (
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
              <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
                <Img
                  className="h-6 w-6"
                  src="images/img-minimize.svg"
                  alt="minimize"
                />
                <Text className="font-semibold mt-[3px] text-base text-blue-A700_01">
                  Dashboard
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_dollaraltsoli.svg"
                  alt="dollaraltSoli"
                />
                <Text className="font-semibold mt-[5px] text-base text-blue_gray-700">
                  Payments
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_walletoutline.svg"
                  alt="walletOutline"
                />
                <Text className="font-semibold mt-[3px] text-base text-blue_gray-700">
                  Wallet & Cards
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                <Img className="h-6 w-6" src="images/img_car.svg" alt="car" />
                <Text className="font-semibold mt-[3px] text-base text-blue_gray-700">
                  Transactions
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <Text className="font-semibold mt-1 text-base text-blue_gray-700">
                  Analytics
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-end justify-start my-2 m-[45%] md:w-full">
                <Img className="h-6 w-6" src="iamges/img_menu.svg" alt="menu" />
                <Text className="font-semibold mt-[5px] text-base text-blue_gray-700">
                  Messages
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start p-2 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img-settings.svg"
                  alt="settings"
                />
                <Text className="font-semibold mt-[5px] text-base text-blue_gray-700">
                  Settings
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_question.svg"
                alt="question"
              />
              <Text className="font-semibold mt-[5px] text-base text-blue_gray-700">
                Help
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Sidebar;
