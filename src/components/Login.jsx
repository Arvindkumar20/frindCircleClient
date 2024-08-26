import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Loader } from "lucide-react"
export default function Login() {
    const [input,setInput]=useState({email:"",password:""})
    const [loading,setLoding]=useState(false);
    const navigate=useNavigate();
    const handleInput=(e)=>{
        setInput({...input,[e.target.name ]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoding(true);
        try {
            const res=await axios.post("http://localhost:3000/api/v1/user/login",input,{
                headers:{
                    "Content-Type":"application/json"
                    },
                    withCredentials:true
                })
          if(res.data.success){
            navigate("/")
            console.log(res.data)
           toast.success(res.data.message)
           setInput({email:"",password:""})
          }
        } catch (error) {
            console.log(error+ " ocuured due to signup")
            toast.error(error.response.data.message)
        }
        finally{
            setLoding(false)
        }
        }
  return (
    <div className="flex items-center w-screen h-screen justify-center  "> 
<form onSubmit={handleSubmit} className="shadow flex flex-col gap-5 p-10">
    <div className="my-3 ">
        <h2 className="text-center font-bold text-xl mb-4">LOGO</h2>
        <p className="text-sm text-center">Login for connect your friends</p>
            </div>
            <div>
        <Label htmlFor="email" className=" font-medium">Email</Label>
        <Input 
        type="email"
        name="email"
        value={input.email}
        id="email"
        className="focus-visible:ring-transparent"
        onChange={handleInput}
        />
            </div>
            <div>
        <Label htmlFor="password" className=" font-medium">Password</Label>
        <Input 
        type="password"
        name="password"
        value={input.password}
        id="password"
        className="focus-visible:ring-transparent"
        onChange={handleInput}
        />
            </div>
            {
                (loading) ?(
                    <Button>
                        <Loader className="mr-2 h-4 w-4 animate-spin">
                         Please wait
                        </Loader>
                    </Button>
                ) :(<Button type="submit">Login</Button>)   
            }
            <p className="text-center">{"Does't"} have an account <Link to="/signup" className="text-blue-600">Signup</Link></p>
</form>
    </div>
  )
}
