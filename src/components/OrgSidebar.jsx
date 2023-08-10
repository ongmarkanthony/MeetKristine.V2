import React from "react";
import { Sidebar } from "react-pro-sidebar";

const OrgSidebar = () => {
  return (
    <Sidebar className="!sticky !w-300px flex h-screen md:hidden justify-start overflow-auto rop-0">
      <div className="bg-white-A700 flex flex-col md:gap-10 gap-507px items-center justify-end p-5px w-full">
        <div className="flex flex-col gap-2 items-center justify-start mt-19px w-87% md:w-full ">
          <div className="flex flex-row gap-2 items-start justify-start pr-4 py-4 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-56% md:w-full">
              <img src="..." alt="save" className="h-5 ml-7px w-6" />
              <p className="font-semibold text-base text-blue_gray-700">
                Dashboard
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-start justify-start my-9px w-31% md:w-full">
              <img src="..." alt="user" className="h-6 w-6" />
              <p className="font-semibold mt-3px text-base text-blue_gray-700">
                Users
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-start justify-start my-2 w-49% md:w-full">
              <img src="..." alt="grid" className="h-6 w-6" />
              <p className="font-semibold my-5px text-base text-blue_gray-700">
                Categories
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
            <div className="flex flex-row gap-2 items-start justify-start w-55%">
              <img src="..." alt="linkedin" className="h-6 w-6" />
              <p className="font-semibold mt-5px text-base text-blue-A700_01">
                Organisation
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-start justify-start my-9px w-54% md:w-full">
              <img src="..." alt="notification One" />
              <p className="font-semibold mt-3px text-base text-blue_gray-700">
                Notifications
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
              <img src="..." alt="settings" className="h-6 w-6" />
              <p className="font-semibold mt-5px text-base text-blue_gray-700">
                Settings
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-opensans items-start justify-start p-2 w-87% md:w-full">
          <div className="flex flex-row gap-2 items-end justify-start my-2 w-29% md:w-full">
            <img src="..." alt="question" className="h-6 w-6" />
            <p className="font-semibold mt-5px text-base text-blue_gray-700">
              Help
            </p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default OrgSidebar;
