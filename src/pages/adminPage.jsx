import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { VscCodeReview } from "react-icons/vsc";
import { AdminProductPage } from "./admin/adminProductPage";
import { AdminAddProductPage } from "./admin/adminAddProductPage";

export default function AdminPage(){
    return(
            <div className="w-full h-full max-h-full flex bg-accent">

                    <div className="w-[300px] bg-accent h-full text-2xl ">

                        <div className="w-full h-[100px] bg-accent flex items-center">

                                <img src="/istockphoto-1204131620-612x612-removebg-preview.png" alt="logo" className="h-full"/>
                                <h1>Admin Panel</h1>
                        </div>


                    <div className="w-full h-[300px flex flex-col ml-[20px] mt-[60px]">

                            <Link to="/admin" className="w-full flex items-center h-[50px] gap-[10px]"><LuClipboardList />Orders</Link>
                            <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-[10px]"><MdOutlineProductionQuantityLimits />Products</Link>
                            <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-[10px]"><LuUsers />Users</Link>
                            <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-[10px]"><VscCodeReview />Reviews</Link>

                    </div>

                    </div>


                    <div className="w-[calc(100%-300px)] p-[10px] h-full max-h-full border-[10px] bg-primary rounded-4xl border-accent overflow-y-scroll">
                    
                        <Routes>
                            <Route path="/" element={<h1>Orders</h1>}/>
                            <Route path="/products" element={<AdminProductPage/>}/>
                            <Route path="/add-product" element={<AdminAddProductPage/>}/>
                             <Route path="/users" element={<h1>Users</h1>}/>
                              <Route path="/reviews" element={<h1>Reviews</h1>}/>
                        </Routes>
                       </div>

            </div>
    )
}