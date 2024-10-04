"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import { isAuth } from "../Auth/isAuth";
import Link from "next/link";


const Dashboard = () => {

  const [isProfile, setIsProfile] = React.useState<boolean>(false);
  console.log(isProfile,"isprofile")
  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 font-mono ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <Link
              href="/user-dashboard"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <svg
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <FaUserCircle size={20} />
              </svg>
              Profile
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="/user-table"
              className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
              aria-current="page"
            >
              <svg
                className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <HiMiniSquares2X2 size={20} />
              </svg>
              User List
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="/user-form"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <svg
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <MdOutlineFormatIndentIncrease size={20} />
              </svg>
              Form
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default isAuth(Dashboard);
