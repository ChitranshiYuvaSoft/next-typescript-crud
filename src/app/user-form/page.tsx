"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ImHome } from "react-icons/im";
import Link from "next/link";
import LogoutButton from "../Components/LogoutButton";
import { isAuth } from "../Auth/isAuth";
import { addUsers } from "@/lib/features/dataSlice";

const UserForm = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [contact, setContact] = React.useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && contact) {
      const data = {
        name: name,
        email: email,
        contact: contact,
      };
      dispatch(addUsers(data));
      router.push("/user-table");
      toast.success("Successfully Added User!", { duration: 1000 });
      setName("");
      setEmail("");
      setContact("");
    } else {
      toast.error("All fields are mandatory..!");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-teal">
        <div>
          <nav className="flex space-x-4 ">
            <p className=" w-full ml-[36%] mt-5 font-bold flex flex-row text-center">
              <span className="w-8">
                {" "}
                <ImHome size={20} />{" "}
              </span>
              <span>
                <Link href="/user-form">/ User From </Link>
              </span>
              <span className="ml-[60%]">
                <button
                  className="text-black bg-lightBlue focus:ring-2 w-28
                 focus:ring-green-300 font-medium rounded-lg 
                 text-sm px-5 py-2.5 h-10 shadow-3xl"
                  onClick={() => router.push("/user-table")}
                >
                  {" "}
                  User List
                </button>
              </span>
              <span className="ml-[3%]">
                <LogoutButton />
              </span>
            </p>
          </nav>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-12 w-80 h-80 border
         border-gray-400 bg-lightBlue rounded-lg ml-[35%] shadow-3xl "
        >
          <h1 className="font-bold ">User Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3 "
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3"
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 
          focus:ring-2 focus:ring-blue-300 font-medium rounded-lg 
          text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none ml-24"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default isAuth(UserForm);
