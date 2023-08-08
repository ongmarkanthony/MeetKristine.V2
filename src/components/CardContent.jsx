import React from "react";

const CardContent = () => {
  return (
    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-30px sm:px-5 rounded-lg shadow-bs w-full">
      <div className="flex flex-col gap-30px items-center justify-start w-95% md:w-full">
        <div className="flex flex-col gap-21px items-center justify-start w-47% md:w-full">
          <img
            src="..."
            alt="EllipseFive"
            className="h-150px md:h-auto rounded-50% w-150px"
          />
          <div className="flex flex-col gap-2.5 items-center justify-start">
            <p className="font-bold text-blue-A700_01 text-lg">Danial Sams</p>
            <p className="font-medium text-base text-blue_gray-400">
              UI/UX Designer
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-start rounded w-full">
          <button className="bg-blue-A700_01 cursor-pointer font-semibold py-18px rounded text-base text-center text-white-A700 w-326px">
            Profile
          </button>
          <button className="border border-blue-A700_01 border-solid cursor-pointer font-medium py-17px rounded text-base text-blue-A700_01 text-center w-326px">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
