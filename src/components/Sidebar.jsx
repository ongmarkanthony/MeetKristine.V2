import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-0">
      <div className="bg-gray-50_01 flex flex-col gap-35px items-center justify-start p-6 sm:px-5 w-full">
        <h2>Image here</h2>
        <div className="flex flex-col md:gap-10 gap-441px items-center justify-start mb-2 w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex flex-col gap-2 items-center justify-start pr-17px py-17px rounded-lg w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-49%">
                <h2>Image Here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-3px text-base text-blue-A700_01"
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-end justify-start my-2 w-45% md:w-full">
                <h2>Image here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-5px text-base text-blue_gray-700"
                >
                  Payments
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-9px w-61% md:w-full">
                <h2>Image here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-3px text-base text-blue"
                >
                  Wallet&Cards
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-9px w-54% md:w-full">
                <h2>Image Here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-3px text-base text-blue_gray-700"
                >
                  Transactions
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start my-2 w-43% md:full">
                <h2>Image Here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-1 text-base text-blue_gray-700"
                >
                  Analytics
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-end justify-start my-2 w-45% md:w-full">
                <h2>Image Here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-5px text-base text-blue_gray-700"
                >
                  Messages
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                <h2>Image Here</h2>
                <Link
                  to="/"
                  className="font-semibold mt-5px text-base text-blue_gray-700"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-end justify-start my-2 w-29% md:w-full">
              <h2>Image Here</h2>
              <Link
                to="/"
                className="font-semibold mt5px text-base text-blue_gray-700"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
