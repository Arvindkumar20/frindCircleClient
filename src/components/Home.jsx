import { Outlet } from "react-router-dom";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";

export default function Home() {
  return (
  <div className="flex">
    <div className="flex-grow">
      <Feed/>
      <Outlet/>
    </div>
    <RightSideBar/>
  </div>
  )
}
