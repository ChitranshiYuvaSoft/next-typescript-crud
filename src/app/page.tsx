"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const token = localStorage.getItem("token")

  const handleLogin = () => {
    if(userName == "admin" && password == "123456"){
      const random = Math.random().toString(36).substring(2);
      localStorage.setItem("token", random + random + random)
      router.push("/user-form")
      toast.success("Logged in..",{duration:1000})
    }
    else if(!userName || !password){
      toast.error("All fields are mandatory..",{duration:1000})
    }
    else{
      toast.error("Invalid username or password",{duration:1000})
    }
  }

  useEffect(() => {
    router.prefetch('/user-form')
  }, [router])


  useEffect(()=>{
    if(!token || token == "undefined"){
      router.push("/")
    }
    else{
      router.push("/user-form")
    }
  },[token])

  return (
    <div className="flex flex-col items-center  justify-center w-full ">
      <h1 className="font-bold mt-12 underline text-base">Login</h1>
        <div
          className="flex flex-col items-center justify-center mt-12 w-80 h-80 border
         border-gray-400 rounded-lg shadow-3xl"
        >
          <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3 "
              type="text"
              placeholder="User Name"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

          <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3 "
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-2 focus:ring-blue-300 font-medium rounded-lg 
      text-sm px-5 py-2.5 me-2 mb-2 mt-12 dark:bg-blue-600 dark:hover:bg-blue-700 
      focus:outline-none"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        </div>
    </div>
  );
}

