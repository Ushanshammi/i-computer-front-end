import { useState } from "react";

export default function Test(){

    const [count,setCount]=useState(0)
    const [count2,setcount2]=useState(0)

  

    return(

        <div className="w-full h-full flex justify-center items-center ">
            <div className="w-[400px] h-[300px] shadow-2xl flex relative justify-center items-center bg-amber-200">
                <button className="w-[100px] h-[50px] bg-amber-600 text-white" onClick={()=>{setCount(count-1),setcount2(count-1)}}>Decrement</button>
               
                <h1 className="w-[100px] h-[50px] text-3xl text-center">{count}</h1>
               
                 
                 <button className="w-[100px] h-[50px] bg-red-500 text-white" onClick={()=>{setCount(count+1),setcount2(count+1)}}>Increment</button>

                    
            </div>
                    <div className="absolute top-[450px]">
                        <p>allowcate = {count2}</p>
                    </div>
        </div>
    )
}