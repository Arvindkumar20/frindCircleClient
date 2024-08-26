import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

export default function MianLayout() {
  return (
    <div className="flex">
      <LeftSideBar/>
      <Outlet/>
    </div>
  )
}
