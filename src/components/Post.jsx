import { Bookmark, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CommentDailog from "./CommentDailog";
import { useState } from "react";
export default function Post() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState("");
  const changeEventHandeler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText(" ");
    }
  };
//   const handleMessageClick = () => {};
  return (
    <div className="my-8 mx-auto w-full max-w-sm">
      <div className="flex  justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="image" />
            <AvatarFallback>Cn</AvatarFallback>
          </Avatar>
          <h1>username</h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <MoreHorizontal className="cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center">
            <Button
              varient="ghost "
              className="cursor-pointer bg-gray-100 w-fit text-[#ED4956] font-bold"
            >
              unfollow
            </Button>
            <Button
              varient="ghost "
              className="cursor-pointer bg-gray-100 w-fit text-black-400 hover:text-gray-100"
            >
              Favorite
            </Button>
            <Button
              varient="ghost "
              className="cursor-pointer bg-gray-100 w-fit text-black-400 hover:text-gray-100"
            >
              Delete
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <img
        className="rounded-sm my-2 w-full aspect-square object-cover"
        src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1nTNOv.img?w=768&h=429&m=6"
        alt="post image"
      />
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <FaRegHeart
            size={35}
            className="cursor-pointer p-1 hover:text-gray-600 hover:rounded-full  hover:bg-gray-200 hover:z-10"
          />
          <MessageCircle
            onClick={() => setOpen(true)}
            size={35}
            className="cursor-pointer p-1 hover:text-gray-600 hover:rounded-full  hover:bg-gray-200 hover:z-10"
          />
          <Send
            size={35}
            className="cursor-pointer p-1 hover:text-gray-600 hover:rounded-full  hover:bg-gray-200 hover:z-10"
          />
        </div>
        <Bookmark
          size={35}
          className="cursor-pointer p-1 hover:text-gray-600 hover:rounded-full  hover:bg-gray-200 hover:z-10"
        />
      </div>
      <span className="block font-bold mb-3">1k likes</span>
      <div>
        <p>
          <span>username</span>
          <span> post</span>
        </p>
        <span onClick={() => setOpen(true)} className="cursor-pointer text-gray-400 text-sm">viev all comments</span>
        <CommentDailog open={open} setOpen={setOpen}/>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="add comments ...."
            className="outline-none text-sm w-full text-gray-600"
            value={text}
            onChange={changeEventHandeler}
          />
          {text && <span className="text-[#3BADF8]">post</span>}
        </div>
      </div>
    </div>
  );
}
