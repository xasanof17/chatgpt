import React from "react";
import Aside from "./Aside";
import ClientProvider from "./ClientProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <Aside />
      <ClientProvider />
      {children}
    </main>
  );
};

export default Layout;
