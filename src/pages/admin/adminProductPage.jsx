import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Loaded from "../../components/loader";



export function AdminProductPage(){

    const [products,setProducts]=useState([]);
    const [loaded,setLoaded]=useState(false);

    useEffect(()=>{

        if(!loaded){

            axios.get(import.meta.env.VITE_BACKEND_URL + "/products").then(
        (response)=>{
            console.log(response.data);
            setProducts(response.data);
            setLoaded(true);
                    }
                )

             }


         

    },[loaded]) //array ekata denna puluvan js vala primitive data type only ,,use effect hook eken venne page eka load veddi eka parak state eka reload karana eka.use state eken venne adala function eke data hamawelema refresh karai

   
    return(

        <div className="w-full max-h-full flex justify-center relative p-10 ">
            
            
            <div className="w-full overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">

   <div className="w-full overflow-x-auto">

  { loaded ? <table className="min-w-full text-sm text-gray-700 border-separate border-spacing-0">



    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 uppercase text-xs tracking-wider">
      <tr className="h-16 text-left">
        <th className="px-4 py-2 font-semibold">Image</th>
        <th className="px-4 py-2 font-semibold">Product ID</th>
        <th className="px-4 py-2 font-semibold">Name</th>
        <th className="px-4 py-2 font-semibold">Price</th>
        <th className="px-4 py-2 font-semibold">Label Price</th>
        <th className="px-4 py-2 font-semibold">Category</th>
        <th className="px-4 py-2 font-semibold">Brand</th>
        <th className="px-4 py-2 font-semibold">Model</th>
        <th className="px-4 py-2 font-semibold">Stock</th>
        <th className="px-4 py-2 font-semibold">Availability</th>
        <th className="px-4 py-2 font-semibold">Action</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-100">

      {products.map((item, index) => (
        <tr
          key={index}
          className="hover:bg-gray-50 hover:shadow-sm transition-all duration-200"
        >
          <td className="px-4 py-2">
            <img
              src={item.images[0]}
              className="w-12 h-12 object-cover rounded-lg border border-gray-200"
            />
          </td>

          <td className="px-4 py-2 font-medium text-gray-800">{item.productID}</td>

          <td className="px-4 py-2">{item.name}</td>

          <td className="px-4 py-2 font-semibold text-gray-900">Rs {item.price}</td>

          <td className="px-4 py-2 text-gray-400 line-through">Rs {item.labelPrice}</td>

          <td className="px-4 py-2">{item.category}</td>

          <td className="px-4 py-2">{item.brand}</td>

          <td className="px-4 py-2">{item.model}</td>

          <td className="px-4 py-2 font-medium">{item.stock}</td>

          <td className="px-4 py-2">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                item.isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {item.isAvailable ? "Available" : "Out of Stock"}
            </span>
          </td>
          <td className="px-4 py-2"><button
            onClick={
                ()=>{
                    const token=localStorage.getItem("token");
                     axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + item.productID,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                
                        
                        
                
                }).then(
                        ()=>{
                            toast.success("Product Delete Successfully.");
                            setLoaded(false)
                        }
                     )

                }
                
                
                

                
            }

          className=" cursor-pointer hover:bg-green-200  pl-2 pr-2 pt-1 pb-1 rounded-2xl shadow-xl shadow-gray-200 text-red-700" >Delete</button></td>
        </tr>
     
     ))}

    </tbody>

  
  </table> :<Loaded></Loaded>}


</div>

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
  whileHover={{ scale: 1.15, rotate: 10,  }}
  whileTap={{ scale: 0.95, rotate: 0 }}
  className="fixed bottom-5 right-5"
>
  <Link
    to="/admin/add-product"
    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-full shadow-2xl text-3xl flex items-center justify-center border-2 border-white hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
  >
    <BsPlus />
  </Link>
</motion.div>

</div>





           




                



            </div>
    )
}




