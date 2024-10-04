import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LogoutButton = () => {

    const router = useRouter()
    const handleLogout = () => {
        toast((t) => (
          <span style={{ width: "20vw" }}>
            <b>Are you sure you want to logout?</b>
            <br />
            <button
              className="dismissButton"
              onClick={() => toast.dismiss(t.id, { duration: 1000 })}
            >
              No
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                localStorage.clear()
                router.push("/")
                toast.success("Logged out", { duration: 1000,
                  style:{
                     backgroundColor:"black",
                      color:"white"
                  }
                 });
                toast.dismiss(t.id, { duration: 1000 });
              }}
            >
              Yes
            </button>
          </span>
        ),{
          style:{
            marginTop:"15vh",
          }
        });
      };

  return (
    <div>
      <button
        className="text-white bg-red-700 hover:bg-red-800 
            focus:ring-2 focus:ring-red-300 font-medium rounded-3xl 
            text-sm px-5 py-2.5 h-10 dark:bg-red-600 dark:hover:bg-blue-700 
            focus:outline-none shadow-3xl"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
