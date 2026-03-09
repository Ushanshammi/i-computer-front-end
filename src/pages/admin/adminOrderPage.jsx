import axios from "axios";
import { useEffect, useState } from "react";





export function AdminOrderPage(){
   
    const [orders,setOrders]=useState([]);
        const [loaded,setLoaded]=useState(false);
       
    

    

    useEffect(()=>{
        const token=localStorage.getItem("token");

        if(!loaded){

            axios.get(import.meta.env.VITE_BACKEND_URL + "/orders",{
                headers: {
                    Authorization:`Bearer ${token}`
                }
            }).then(
        (response)=>{
          
            setOrders(response.data);
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
        <th className="px-4 py-2 font-semibold">Order ID</th>
        <th className="px-4 py-2 font-semibold">Customer email</th>
        <th className="px-4 py-2 font-semibold">Customer number</th>
        <th className="px-4 py-2 font-semibold">Date</th>
        <th className="px-4 py-2 font-semibold"> Status</th>
        <th className="px-4 py-2 font-semibold">Total amount</th>
        <th className="px-4 py-2 font-semibold">Actions</th>
       
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-100">

      {orders.map((order, index) => (
        <tr
          key={index}
          className="hover:bg-gray-50 hover:shadow-sm transition-all duration-200"
        >
         

        

          <td className="px-4 py-2">{order.orderId}</td>
          <td className="px-4 py-2">{order.email}</td>
          <td className="px-4 py-2">{order.phone}</td>
          <td className="px-4 py-2">{new Date(order.date).toLocaleDateString()}</td>
          <td className="px-4 py-2">{order.status}</td>
          

          <td className="px-4 py-2 font-semibold text-gray-900">Rs {order.total}</td>

     

          

         
        </tr>
     
     ))}

    </tbody>

  
  </table> :<h1>abc</h1>}


</div>



</div>





            </div>
    )
}




