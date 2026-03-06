import { useState } from "react"

import { BsChevronBarDown, BsChevronBarUp } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CheckutPage(){
    const location=useLocation();
    const navigate=useNavigate();
    const [cart,setCart]=useState(location.state);

    if(location.state==null){
        navigate("/products");
    }

    function getCartTotal(){
        let total=0;
        cart.forEach((item)=>{
            total +=item.price * item.quantity;
        })
        return total;
    }
    return(

   <div className="w-full flex flex-col items-center p-[20px]">
        
        {
            cart.map(
                (item,index)=>{
                    return(
                        <div className="w-[50%] h-[145px] rounded-xl overflow-hidden shadow-xl my-1 flex justify-between">
                            <img src={item.image} alt=""  className="h-full aspect-square object-cover"/>
                            <div className="flex flex-col justify-center pl-4">
                                <h1 className="text-2xl font-semibold relative hover:[&_.tooltip]:opacity-100">
                                    <span className="opacity-0 tooltip italic  text-sm absolute bottom-[-40px] bg-secondary text-white p-2 rounded-lg">{item.name}</span>
                                    {
                                        item.name.length > 20?
                                        item.name.substring(0,15)+"...":
                                        item.name
                                    }</h1>
                                {
                                    item.labelPrice > item.price &&
                                    <h2 className="text-secondary/80 line-through decoration-2 mr-2 text-lg">LKR. 
                                        {item.labelPrice.toFixed(2)}
                                        </h2>
                                }

                                <h2 className="text-lg text-secondary font-semibold mt-7 ">
                                    LKR. {item.price.toFixed(2)}
                                    </h2>

                                <h3 className=" mt-2 pb-[10px]">{item.productID}</h3>

                            </div>

                            <div className="h-full flex flex-row items-center gap-4">
                                    <div className="h-full flex flex-col justify-center items-center">
                                            <BsChevronBarUp className="text-2xl cursor-pointer hover:text-secondary transition"
                                                onClick={
                                                    ()=>{
                                                      const copyCart=[...cart];//cart eke copy ekak dagatte loku variable ram eke store venna denne na js valin 
                                                                              //ee nisa state ekata aduragnna bari venava.e nisa thamai cart eke copy ekak daganne
                                                      copyCart[index].quantity+=1;
                                                      setCart(copyCart);
                                                    }
                                                }
                                            />
                                            <span className="text-lg">{item.quantity}</span>
                                            <BsChevronBarDown className="rotate-180 text-2xl cursor-pointer hover:text-secondary transition"
                                            
                                                 onClick={
                                                    ()=>{
                                                       const copyCart=[...cart];
                                                       copyCart[index].quantity-=1;
                                                       if(copyCart[index].quantity<1){
                                                        copyCart.splice(index,1);
                                                       }
                                                       setCart(copyCart);
                                                    }
                                                }
                                            />
                                    </div>
                                    <span className="pr-4 text-lg font-semibold">LKR. {(item.price * item.quantity).toFixed(2)}</span>

                            </div>
                            
                        </div>
                    )
                }
            )
        }

        <div className="w-[50%] h-[150px] rounded-xl overflow-hidden shadow-2xl my-1 flex justify-between items-center">

                <button  className="self-center ml-4 px-6 py-3 rounded bg-secondary text-white hover:bg-secondary/90 transition"
                    
                >Order Now</button>
                
              <span className="pr-4 text-xl font-bold">LKR. {getCartTotal().toFixed(2)}</span>

        </div>

   </div>
    )
}