import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function RootLayout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
