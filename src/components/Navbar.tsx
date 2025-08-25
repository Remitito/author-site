import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosContact, IoIosDownload } from "react-icons/io";

import Link from "next/link";
const Navbar = () => {
  const linkStyle =
    "flex justify-center  text-[16px] sm:text-[18px] items-center hover:text-gray-300";

  return (
    <div className="h-[10vh] w-screen bg-[#1b3b1b] flex flex-row justify-between">
      <div className="flex justify-center items-center h-full w-20">
        <Link href={"/"} className={linkStyle}>
          <IoHome className="text-white text-2xl sm:text-3xl hover:text-gray-300" />
        </Link>
      </div>
      <div className="flex text-white w-3/5 sm:text-xl flex-row justify-evenly items-center sm:w-1/3">
        <Link className={linkStyle} href={"/buy"}>
          <IoIosDownload className="mr-0.5 sm:mr-2" />
          Download
        </Link>{" "}
        <Link className={linkStyle} href={"/contact"}>
          <IoIosContact className="mr-0.5 sm:mr-2" />
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
