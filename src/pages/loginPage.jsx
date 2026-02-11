import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, } from "react-router-dom";



export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate() //function ekak labeyi


    

//give the inputs value
 async function login(){
            console.log("Email: ", email);
            console.log("pass: ", password);

            try{

                     const res = await axios.post(import.meta.env.VITE_BACKEND_URL+"/users/login",
                {
                    email:email,
                    password:password,
                }
            )

            console.log(res.data)

            localStorage.setItem("token",res.data.token);  //store webpage local storage user token
            const token=localStorage.getItem("token"); //token access method
           

            if(res.data.role=="admin"){
                navigate("/admin")
              //  window.location.href="/admin";
            }else{
                navigate("/")
                //window.location.href="/admin";
            }
            
        


            


            }catch(err){
                toast.error("login faild")
                    console.log("Error during login: ");
                    console.log(err);

            }

           
    }
   
    return(
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat flex">


            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px] text-center">
                <img src="/istockphoto-1204131620-612x612-removebg-preview.png" alt="logo" className="w-[300px] h-[300px] object-cover" />
                <h1 className="text-[50px] text-accent text-shadow-red-600 text-shadow-2xs font-bold">Plug In. Power Up. Play Hard</h1>
                <p className="text-[20px] text-white font-semibold italic">Your Ultimate For Gamming Gear</p>
            </div>



             <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-sm shadow-2xl flex-col rounded-xl flex items-center">
                       
                        <h1 className="text-accent text-[40px] font-bold text-shadow-amber-50 text-shadow-2xs mt-[90px] mb-[90px] " >Log-In</h1>
                       
                        <input 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        }
                        
                       type="email" placeholder="Enter Email" className=" w-[400px] h-[50px] mb-[40px] rounded-lg border  border-accent  p-[10px] text-[20px] text-accent focus:ring-amber-400" />
                     
                     
                     <input
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                     type="password" placeholder="Enter Password" className=" w-[400px] h-[50px] mb-[20px] rounded-lg border border-accent  p-[10px] text-[20px] text-accent focus:ring-amber-400" />
                    <button onClick={login} className=" w-[250px] bg-accent text-secondary font-bold rounded-lg text-[20px] hover:bg-blue-200 p-[5px] hover:text-black mt-[30px]">Login</button>
                   
                   <div className="flex flex-col items-center">

                    <p className="text-white pt-[10px] text-[12px]">Forget your password? <Link to="forget-password" className="text-yellow-200 italic underline">Reset it here</Link></p>
                    <p className=" text-white ">Don 't have an account? <Link to="/register" className="text-yellow-200 italic underline">Register here</Link></p>
                

                   </div>
                   
                </div>
             </div>


        </div>
    )
}