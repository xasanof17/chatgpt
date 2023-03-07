import React from "react";
import Aside from "./Aside";
import ClientProvider from "./ClientProvider";
import NotInternetConnection from "./NotInternetConnection";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotInternetConnection>
      <main className="flex">
        <Aside />
        <ClientProvider />
        {children}
      </main>
    </NotInternetConnection>
  );
};

export default Layout;
