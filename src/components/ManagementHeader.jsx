import React, { useState } from "react";
import { Input } from "postcss";

const ManagementHeader = () => {
  const [inputfieldvalue, setInputfieldvalue] = useState("");
  return (
    <div className="bg-gray-50+01 flex flex-col font-gilroy gap-50px items-center justify-end mx-auto w-full">
      <header className="flex items-center justify-center md:px-5 w-full">
        <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-90%">
            <img src="..." alt="Group" className="h-35px w-13%" />
            {/* <Input
              name="InputField"
              placeholder="Search"
              value={inputfieldvalue}
              onChange={(e) => setInputfieldvalue(e)}
              className="font-medium p-0 placeholder:text-blue_gray-200 sm:pr-5 text-base text-blue_gray-200 text-left w-full"
              wrapClassName="bg-white-A700 border border-blue_gray-300 border-solid flex md:ml-0 ml-52px pr-35px py-17px rounded-md w-2/5 w-full"
              prefix={
                <image
                  className="cursor-pointer h-5 my-4 mx-3"
                  src="..."
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#bac1ce"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setInputfieldvalue("")}
                  style={{
                    visibility:
                      inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
            /> */}
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-50px w-33% md:w-full">
              <div className="flex flex-row gap-19px items-center justify-between pl-5px py-5px w-27@ sm:w-full">
                <h4 className="font-medium ml-9px text-base text-gray-900_01">
                  Order
                </h4>
                <img src="..." alt="arrowdown" />
              </div>
              <h4 className="font-medium sm:ml-0 ml-51px sm:mt-0 mt-11px text-base text-gray-900_01">
                Cagetories
              </h4>
              <div className="flex flex-row gap-26px items-center justify-between sm:ml-0 ml-51px pl-5px py-5px w-27% sm:w-full">
                <h5 className="font-medium ml-4 text-base text-gray-900_01">
                  More
                </h5>
                <img src="..." alt="arrowdown One" className="h-6 w-6" />
              </div>
            </div>
            <img src="..." alt="cart" className="h-26px md:ml-0 ml-66px w-2%" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default ManagementHeader;
