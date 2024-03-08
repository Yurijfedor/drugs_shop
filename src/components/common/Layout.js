import { Outlet } from "react-router-dom";
import { Header } from "../appBar/header";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
