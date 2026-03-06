import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { data, useNavigate, useParams } from "react-router-dom"
import Loaded from "../components/loader";
import ImagesSlider from "../components/imageSlider";
import { addToCart,  } from "../utils/cart";


export default function ProductOverview(){
    const navigate=useNavigate();
    const params=useParams();
  
    const [product , setProduct] = useState(null);
    const [status , setStatus] = useState("loading");//loading , error,success

    useEffect(()=>{
        if(status=="loading"){
             axios.get(import.meta.env.VITE_BACKEND_URL + "/products/"+params.productID).then(
                (response)=>{
                    
                    setProduct(response.data);
                    setStatus("success");
                }
            ).catch(
                (error)=>{
                    toast.error("Product found");
                    setStatus("error");
                    console.log(product)
                    
                    
                   
                    
                   
                }
            )
        }
    },[])


    return(
        <>
            {
            status=="loading" && <Loaded/>
            
             }

             {
                status=="error" && <h1 className="text-center mt-10 text-2xl">Error loading Product</h1>
                
             }

             {
                status=="success"&&


                <div className="w-full  h-[calc(100vh-100px)] flex">

                    <div className="w-1/2 h-full flex justify-center items-center">

                        <ImagesSlider images={product.images}/>
                    </div>


                    <div className="w-1/2 h-full p-10 flex flex-col gap-6 ">

                            <h1 className="text-4xl font-semibold">{product.name}</h1>
                            <h2 className="text-lg text-secondary/80">{product.productID}</h2>
                            <h2 className="text-lg text-secondary/80">  {product.category}</h2>
                            <p className="text-md text-justify  text-secondary/90 h-32 overflow-y-auto">{product.description}</p>

                            <div className="w-full ">

                                {product.labelPrice > product.price && (
                                        <h2 className="text-secondary/70 line-through decoration-2 mr-2 text-xl">LKR. {product.labelPrice.toFixed(2)}</h2>

                                        

                                )}
                                <h2 className="text-secondary font-semibold text-3xl">LKR. {product.price.toFixed(2)}</h2>

                                

                            </div>

                            <div className="w-full flex flex-row gap-4 mt-4">

                                <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary/90 transition"
                                    onClick={
                                        ()=>{
                                            addToCart(product,1)
                                        }
                                    }
                                
                                >Add to Cart</button>

                                <button className="border-2 border-secondary text-secondary font-semibold bg-white px-6 py-3 rounded hover:bg-secondary/90 hover:text-white transition"
                                    onClick={
                                        ()=>{
                                         navigate("/checkout",{
                                            state:[{
                                                productID:product.productID,
                                                name:product.name,
                                                labeledPrice:product.labeledPrice,
                                                quantity:1,
                                                image:product.images[0],
                                                labelPrice:product.labelPrice,
                                                price:product.price,
                                            }]
                                         })
                                        }
                                    }
                                
                                >Buy Now</button>

                            </div>
                    </div>

                </div>
             }
         
        </>
    )
}