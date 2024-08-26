import {
  Heart,
  Home,
  LogOut,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const navigate=useNavigate();
  const sideBarItems = [
    { icon: <Home />, text: "Home" },
    { icon: <Search />, text: "Search" },
    { icon: <TrendingUp />, text: "Explore" },
    { icon: <MessageCircle />, text: "Message" },
    { icon: <Heart />, text: "Notification" },
    { icon: <PlusSquare />, text: "Create" },
    {
      icon: (
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: "Profile",
    },
    { icon: <LogOut />, text: "Logout" },
  ];
 
  const handleLogout=async()=>{
    try {
      const res=await axios.get("http://localhost:3000/api/v1/user/logout",{
        withCredentials:true,
      });
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/login")
      }
    }
    catch(error){
      toast.error(error.response.data.message)
      console.log(error+ "error occured on clintside due to logout")
    }
  }
  const sidebarHandler=(text)=>{
    if(text==="Logout") handleLogout();
    

  }
  return (
    <div className="fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[13%] h-screen">
     <div className="flex flex-col">
      <h1 className="text-center mt-5">LOGO</h1>
    <div>
    {sideBarItems.map((e) => {
        return (
          <div key={e.text}>
            <div className="flex p-3 relative hover:bg-gray-200 cursor-pointer rounded-lg gap-3 my-2" 
            onClick={()=>sidebarHandler(e.text)}
            >
              <div>{e.icon}</div>
              <div style={{ color: "black" }}>{e.text}</div>
            </div>
            <div />
          </div>
        );
      })}
    </div>
     </div>
    </div>
  );
}
