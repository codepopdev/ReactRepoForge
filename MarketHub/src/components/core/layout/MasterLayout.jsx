import { Outlet } from "react-router";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import AuthProvidter from "@/components/shared/utils/context/AuthContext";

const MasterLayout = () => {
  return (
    <>
      <AuthProvidter>
        <div className="flex flex-row flex-wrap relative">
          <aside className="h-screen w-2/12 bg-teal-600">
            <Sidebar />
          </aside>
          <aside className="w-10/12 ">
            <header className="w-full sticky">
              <Header />
            </header>
            <main className="p-3 bg-teal-50 h-full w-full ">
              <Outlet />
            </main>
          </aside>
        </div>
      </AuthProvidter>
    </>
  );
};
export default MasterLayout;
