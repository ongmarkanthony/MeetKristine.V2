import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-50_02 flex sm:flex-col md:flex-col flex-row font-gilroy gap-30px items-start mx-auto sm:pr-5 pr-6 w-full">
      <AdminSidebar />
      <div className="flex-1 sm:h-[1056px] h-[1109px] md:h-[1965px] md:m,t-0 mt-6 md:px-5 relative w-full">
        <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <p className="font-semibold sm:text-2xl md:texxt-[26px] text-[28px] text-blue_gray-900">
              Dashboard
            </p>
            <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[13%]">
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                <div className="md:h-9 h-[35px] mb-1 relative w-9">
                  <h2>Image Here</h2>
                  <div className="absolute bg-red-700 border border-blue_gray-50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                    <p className="font-semibold mb-0.5 ml-0.5 md:ml-[0] text-white-A700 text-xs">
                      2
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-blue-A700 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
                <h2>Image Here</h2>
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
                      <div className="!w-[134px] h-[134px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[134px] h-[134px] m-auto overflow-visible"
                          value={79}
                          counterClockwise
                          strokeWidth={10}
                          styles={{
                            trail: { strokeWidth: 10, stroke: "#e4e499e4" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#0061ff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <p className="absolute font-semibold h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-max">
                        80%
                      </p>
                    </div>
                    <p className="font-semibold text-2xl md:text-[22px] text-blue-A700_01 sm:text-xl">
                      Overall
                    </p>
                    <p className="text-base text-blue_gray-400">
                      Actively liberal
                    </p>
                  </div>
                </div>
                <div
                  className="sm:flex-col flex-row gap-4 grid grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-center justify-end p-[9px] w-full"
                    style={{
                      backgroundImage: "url('images/img_graphpie.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-5 items-center justify-start mt-[3px] w-[91%] md:w-full">
                      <div className="h-[78px] relative rounded-[10px] w-[78px]">
                        <div className="!w-[78px] h=[78px] m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-[78px] h-[78px] m-auto overflow-visible"
                            value={89}
                            counterClockwise
                            strokeWidth={9}
                            styles={{
                              trail: { strokeWidth: 9, stoke: "#e4e499e4" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(0deg)",
                                stroke: "#0061ff",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <p className="absolute font-semibold h-max inset-[0] justify-center m-auto text-base text-gray-900_02 w-max">
                          90%
                        </p>
                      </div>
                      <p className="font-medium text-blue_gray-400 text-xs">
                        Passively Income
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-start justify-start p-2.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_graphpie.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-5 items-end justify-start my-0.5 w-[95%] md:w-full">
                      <div className="h-[78px] relative rounded-[10px] w-[78px]">
                        <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-[78px] h-[78px] m-auto overflow-visible"
                            value={74}
                            counterClockwise
                            strokeWidth={9}
                            styles={{
                              trail: { strokeWidth: 9, stroke: "#e4e499e4" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(0deg)",
                                stroke: "#0061ff",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <p className="absolute font-semibold h-max inset-[0] justify-center m-auto text-base text-gray-900_02 w-max">
                          75%
                        </p>
                      </div>
                      <p className="font-medium text-blue_gray-400 text-xs">
                        Passively Savings
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex-flex-1 flex-col h-[135px] items-center justify-end p-[9px] w-full"
                    style={{
                      backgroundImage: "url('images/img_graphpie.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-5 items-center justify-start mt-[3px] w-[97%] md:w-full">
                      <div className="h-[78px] relative rounded-[10px] w-[78px]">
                        <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-[78px] h-[78px] m-auto overflow-visible"
                            value={49}
                            counterClockwise
                            strokeWidth={9}
                            styles={{
                              trail: { strokeWidth: 9, stroke: "#e4e499e4" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(0deg)",
                                stroke: "#0061ff",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <p className="absolute font-semibold h-max inset-[0] justify-center m-auto text-base text-gray-900_02 w-max">
                          50%
                        </p>
                      </div>
                      <p className="font-medium text-blue_gray-400 text-xs">
                        Passivelyy Expense
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end md:mt-0 mt-11 ppt-5 px-5 rounded-md w-[46%] md:w-full">
                <div className="md:h-[201px] h-[350px] relative w-[96%]">
                  <h2>Image Here</h2>
                  <div className="absolute flex flex-col gap-11 items-start justify-start left-[0] pt-0.5 top-[0] w-[77%]">
                    <div className="flex flex-row items-end justify-startw-1/4 md:w-full">
                      <h2>Image Here</h2>
                      <p className="font-medium ml-[5px] mt-[5px] text-black-900 text-lg">
                        Tip
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start rounded-md w-full">
                      <p className="font-medium leading-[26.00px] text-base text-blue_gray-400 w-full">
                        Openinga new edit account can sometimes lower your score
                        {""}
                      </p>
                      <button className="bg-blue-A700_01 cursor-pointer font-medium py-2.5 rounded-md text-center texxt-sm text-white-A700 w-[119px]">
                        {" "}
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                <div className="flex flex-col gap-[21px] items-center justify-start mt-[3px] w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start mt-[7px] w-[32%]">
                      <p className="font-semibold text-blue_gray-900 text-lg">
                        Spend Analysis
                      </p>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <h2>Image Here</h2>
                        <p className="mt-0.5 text-black-900 text-sm">
                          <span className="text-colors font-gilroy text-left font-normal">
                            88%
                          </span>
                          <span className="text-colors1 font-gilroy text-left font-normal">
                            {""}
                            Compare to last week
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-between w-[17%]">
                      <p className="font-semibold ml-[3px] text-blue_gray-600 text-sm">
                        This Week
                      </p>
                      <h2>Image Here</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end py-[3px] w-full">
                    <div className="flex flex-col gap-[18px] items-end justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-start">
                          <p className="text-blue_gray-900 text-sm">
                            25k
                          </p>
                          <p className="text-blue_gray-900 text-sm">
                            20k
                          </p>
                          <p className="md:ml-[0] ml-[3px] text-blue_gray-900 text-sm">
                            15k
                          </p>
                          <p className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm">
                            10k
                          </p>
                          <p className="ml-2 md:ml-[0] text-blue_gray-900 text-sm">
                            5k
                          </p>
                          <p className="md:ml-[0] ml-[7px] text-blue_gray-900 text-sm">
                            0k
                          </p>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[200px] items-end justify-start p-[26px] sm:px-5 w-[96%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group1185.png')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-start mb-[78px] mr-[136px] w-auto">
                            <div className="bg-black-900_01 flex flex-col items-center justify-center px-[11px] py-2.5 rounded-[5px] w-auto">
                              <p className="font-medium text-white-A700 text-xs w-auto">
                                <>
                                  $2311.65 <br /> 5 May
                                </>
                              </p>
                            </div>
                            <h2>Image Here</h2>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[96%] md:w-full">
                        <p className="text-blue_gray-900 text-sm">Mon</p>
                        <p className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm">
                          Tue
                        </p>
                        <p className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm">
                          Wed
                        </p>
                        <p className="md:ml-[0] ml-[71px] text-blue_gray-900 text-sm">
                          Thu
                        </p>
                        <p className="md:ml-[0] ml-[73px] text-blue_gray-900 text-sm">
                          Fri
                        </p>
                        <p className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm">
                          Sat
                        </p>
                        <p className="md:ml-[0] ml-[70px] text-blue_gray-900 text-sm">
                          Sun
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[35%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[3px] w-[99%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <p className="font-semibold mt-[5px] text-base text-blue_gray-900">
                      Expense Tracking
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[31%]">
                      <p className="font-semibold text-blue_gray-600 text-sm">
                        This Month
                      </p>
                      <h2>Image Here</h2>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[200px] items-start justify-start mt-[35px] p-[35px] sm:px-5 w-[200px]"
                    style={{ backgroundImage: "url('images/img_group30.svg')" }}
                  >
                    <div className="flex flex-row gap-[47px] items-start justify-start mb-0.5 mt-[13px] w-[905%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[63px] justify-start mt-[18px]">
                        <p className="font-semibold mr-2 text-base text-white-A700">
                          28%
                        </p>
                        <p className="font-semibold ml-2.5 md:ml-[0] text-base text-white-A700">
                          12%
                        </p>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-[18px]">
                        <p className="font-semibold text-base text-white-A700">
                          24%
                        </p>
                        <p className="font-semibold md:ml-[0] ml-[3px] text-base text-white-A700">
                          36%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[13px] pt-[3px] w-[91%] md:w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-1/4">
                          <div className="bg-blue-900 h-2 my-0.5 rounded-sm w-[31%]"></div>
                          <p className="font-semibold text-blue_gray-900 text-sm">
                            Travel
                          </p>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start w-[26%]">
                          <div className="bg-blue-800 h-2 mb-[7px] rounded-sm w-[30%]"></div>
                          <p className="font-semibold text-blue_gray-900 text-sm">
                            Sports
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row gap-2 items-start justify-start w-[32%]">
                          <div className="bg-blue-A700_01 h-2 mb-[7px] rounded-sm w-[23%]"></div>
                          <p className="font-semibold text-blue_gray-900 text-sm">
                            Shopping
                          </p>
                        </div>
                        <div className="flex flex-row gap- items-center justify-start w-[31%]">
                          <div className="bg-blue-A200 h-2 my-0.5 rounded-sm w-[24%]"></div>
                          <p className="font-semibold text-blue_gray-900 text-sm">
                            Medicine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-50_01 md:h-[1056px] h-[1109px] inset-y-[0] my-auto pb-[53px] right-[0] shadow-bs w-[24%]">
          <div className="bg-gray-50_01 h-[1056px] mx-auto shadow-bs w-full"></div>
          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
            <h2>Image Here</h2>
            <p className="font-semibold mt-1 text-blue_gray-900 text-lg">
              My Profile
            </p>
            <h2>Image Here</h2>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[5px] top-[6%] w-[45%]">
            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
              <div className="border-[1.79px] bprder-blue-A700 border-solid flex flex-col h-[100px] items-center justify-start p-[7px] rounded-[50%] w-[100px]">
                <h2>Image Here</h2>
              </div>
              <p className="font-semibold text-blue_gray-900 text-lg">
                {" "}
                Michelle Rock
              </p>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[21%] w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start pt-1 w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start pb-[5px] pr-[5px] w-full">
                <p className="text-base text-blue_gray-400">
                  Mobile number{" "}
                </p>
                <div className="flex flex-col items-center justify-start">
                  <p className="font-medium text-base text-blue_gray-900">
                    {" "}
                    555-0111
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <p className="text-base text-blue_gray-400">Email</p>
                <div className="flex flex-col items-center justify-start">
                  <p className="font-medium text-base text-blue_gray-900">
                    Michellerock@gmail.com
                  </p>
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
