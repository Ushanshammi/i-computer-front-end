import { button } from "framer-motion/client";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"; 

export default function ProductDelete(props){

    const productID=props.productID;
    const [isMessageOpen,setisMassgeOpen]=useState(false);
    const [isDeleting,setIsDeleting]=useState(false);



    async function handleDelete(){
        setIsDeleting(true);
        
         const token=localStorage.getItem("token");
                     axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + productID,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                
                        
                        
                
                }).then(
                        ()=>{
                            toast.success("Product Delete Successfully.");
                           setIsDeleting(false);
                           setisMassgeOpen(false);
                           setLoad
                        }
                     ).catch(()=>{
                        toast.error("failed to delete product");
                        setIsDeleting(false);
                     });

                }
    
    
    return(
        <> 

        <button onClick={()=>{setisMassgeOpen(true)}} className=" cursor-pointer hover:bg-green-200 pl-2 pr-2 pt-1 pb-1 rounded-[8px] bg-green-300 shadow-xl font-bold text-[15px] shadow-gray-200 text-black-700">Delete</button>

        {isMessageOpen && 
        
        <div className="w-[100vw] fixed top-0 left-0 h-screen bg-black/35 flex justify-center items-center">

            <div className="w-[600px] h-[300px] bg-white rounded-2xl relative flex flex-col items-center justify-center">
                <button onClick={()=>{setisMassgeOpen(false)}} className="w-[40px] h-[40px] bg-red-500 rounded-full text-xl text-white font-bold cursor-pointer hover:bg-red-600 absolute right-[-33px] top-[-33px]" >X</button>


                <h1 className="text-2xl mb-6 text-center">Are you sure you want to delete product? "{productID}"</h1>

                <div className="w-full flex justify-center gap-20">

                         <button disabled={isDeleting} onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Delete</button>
        

                        <button onClick={()=>{setisMassgeOpen(false)}} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Cancel</button>
            

                </div>

               
            </div>
        
        
         </div>}

        </>
    )
}
