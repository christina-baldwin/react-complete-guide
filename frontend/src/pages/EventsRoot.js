import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation.js";

function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventRootLayout;
