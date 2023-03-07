"use client";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const NotInternetConnection = ({ children }: Props) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return <>{children}</>;
  } else {
    return <h1 className="text-4xl dark:text-grey-100">No Interner Connection. Please try again later.</h1>;
  }
};

export default NotInternetConnection;
