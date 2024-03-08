import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
