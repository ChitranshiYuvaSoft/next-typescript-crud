"use client";

import React, { FormEvent, useLayoutEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ImHome } from "react-icons/im";
import Link from "next/link";
import LogoutButton from "../Components/LogoutButton";
import { addUsers } from "@/lib/features/dataSlice";
import { isAuth } from "../Auth/isAuth";

const UserForm = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [contact, setContact] = React.useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();
  const token = localStorage.getItem("token")

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
      toast.success("Successfully Added User!", { 
        duration: 1000 ,
          style:{
            marginTop:"15vh",
          }
        });
      setName("");
      setEmail("");
      setContact("");
    } else {
      toast.error("All fields are mandatory..!",{ duration: 1000,
        style:{
          marginTop:"15vh",
        }
       });
    }
  };


  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-neutral-800 font-mono">
        <div>
          <nav className="flex space-x-4 w-[100%] h-[12vh] bg-black text-white shadow-white">
            <p className=" w-full mt-5 font-bold flex flex-row text-center">
              <div className="w-[50%] flex">
              <span className=" ml-10">
                {" "}
                <ImHome size={20} />{" "}
              </span>
              <span>
                <Link href="/user-form">/ User From </Link>
              </span>
              </div>
              <div className="w-[50%] flex ">
              <span className="ml-[65%]">
                <button
                  className="text-black bg-orange-100 focus:ring-2 w-28
                 focus:ring-green-300 font-medium rounded-3xl 
                 text-sm px-5 py-2.5 h-10 shadow-3xl hover:bg-orange-200"
                  onClick={() => router.push("/user-table")}
                >
                  {" "}
                  User List
                </button>
              </span>
              <span className="ml-[3%]">
                <LogoutButton />
              </span>
              </div>
            </p>
          </nav>
        </div>
        <div
          className="flex flex-col items-center justify-center mt-12 w-80 h-80 ml-[35%] "
        >
          <h1 className="font-bold-400 text-white underline">User Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-neutral-600	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-neutral-600 text-white text-sm rounded-3xl block p-2.5 w-64 m-3"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-neutral-600 text-white text-sm rounded-3xl block p-2.5 w-64 m-3"
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-sm px-5 py-2.5 ml-24 focus:bg-cyan-600"
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
