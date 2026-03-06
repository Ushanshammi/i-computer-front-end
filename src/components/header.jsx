import { Link } from "react-router-dom";
import UserData from "./userData";
import { MdShoppingCart } from "react-icons/md";

export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent flex relative">
           
     <img src="/istockphoto-1204131620-612x612-removebg-preview.png" alt="logo" className=" h-full"/>
     <div className="w-full h-full flex justify-center items-center  gap-[100px]">


        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>


     </div>

     <Link to="/cart" className="absolute right-4 top-1/4 translate-y-1/2 text-secondary/80 text-2xl">
        <MdShoppingCart/>
     </Link>

        </header>
    )
}