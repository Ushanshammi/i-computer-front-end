import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export function AdminProductPage(){
    return(

        <div className="w-full h-full flex justify-center relative items-center text-4xl">
            
            Product page
            <Link to="/admin/add-product" className=" border rounded-full border-[3px] hover:text-white hover:bg-black absolute bottom-[20px] right-[15px]"><BsPlus/></Link>
            





                



            </div>
    )
}




