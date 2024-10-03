import { redirect } from "next/navigation";
import { useEffect } from "react";

export const isAuth = (WrappedComponent) => {
  return function authenticated(props) {
    const token = localStorage.getItem("token");
    
    useEffect(() => {
      if (!token) {
        redirect("/");
      }
    }, [token]);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props}/>;
  };
};
