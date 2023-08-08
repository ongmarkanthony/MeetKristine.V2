import { Input } from "postcss";
import React from "react";

const Search = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  return (
    <Input
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
            visibility: inputfieldvalue?.length <= 0 ? "hidden" : "visible",
          }}
          height={20}
          width={20}
          viewBox="0 0 20 20"
        />
      }
    />
  );
};

export default Search;
