import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Component, useEffect, useLayoutEffect } from "react";

export const isAuth = (WrappedComponent: React.ComponentType) => {
  return function authenticated(props: any) {
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
