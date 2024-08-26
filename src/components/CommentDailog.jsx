import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MoreHorizontal } from "lucide-react";
import Post from "./Post";
import { Button } from "./ui/button";

export default function CommentDailog({ open, setOpen }) {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          onInteractOutside={() => setOpen(false)}
          className="flex flex-col p-0 max-w-4xl"
        >
          <section className="flex flex-1 justify-between">
            <div className="w-1/2">
              <img
                className="rounded-l-lg w-full h-full object-cover cursor-pointer"
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1nTNOv.img?w=768&h=429&m=6"
                alt="post image"
              />
            </div>
            <div className="flex w-1/2 flex-col justify-between">
              <div className=" flex justify-between items-cnter p-4">
                <div className="flex gap-3 items-center ">
                  <Link to="/">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Link>
                  <div>
                    <Link className="font-bold text-xs">username</Link>
                    <span className="text-gray-600 font-sm">bio</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <MoreHorizontal className="cursor-pointer"/>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="flex flex-col gap-2 p-4">
                    <Button className="text-[#ED4956] font-bold">Unfollow</Button>
                    <Button>Share to</Button>
                    <Button>Bookmark</Button>
                    <Button>Follow</Button>
                    <Button>Cancel</Button>
                   
                      {/* <Link to="/post"><Comment/></Link> */}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </div>
  );
}
