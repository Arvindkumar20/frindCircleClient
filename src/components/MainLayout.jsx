import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

export default function MianLayout() {
  return (
    <div >
      <LeftSideBar/>
      <Outlet/>
    </div>
  )
}
