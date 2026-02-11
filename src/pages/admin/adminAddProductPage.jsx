import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";


export function AdminAddProductPage(){

const [productID,setProductID]=useState("");
const [name,setName]=useState("");
const [altNames,setAltNames]=useState("");
const [discription,setDiscription]=useState("");
const [price,setPrice]=useState(0);
const [labelledPrice,setLabelledPrice]=useState(0);
const [images,setImages]=useState("");
const [category,setCategory]=useState("");
const [brand,setBrand]=useState("");
const [model,setModel]=useState("");
const [stock,setStock]=useState(0);
const [isAvailable,setIsavailable]=useState(false);

const navigate=useNavigate();

async function addProduct(){

        const token=localStorage.getItem("token");
            if(token==null){
                     toast.error("your must be logged in as admin to add products.");
                    navigate("/login");
                     return;

            }
       


        if(productID==""||name==""||price==""||brand==""||model==""||stock==""){
            toast.error("Please fill in all required fields.");

        }else{


       

        try{
            const altNamesArray=altNames.split(",");
            const imagesInArray=images.split(",");
            
          

            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products",{

                productID:productID,
                name:name,
                altNames:altNamesArray,
                description:discription,
                price:price,
                labelPrice:labelledPrice,
                images:imagesInArray,
                category:category,
                model:model,
                brand:brand,
                stock:stock,
                isAvailable:isAvailable,
            },{
                headers:{
                    Authorization:"Bearer "+token
                }
            })

            toast.success("Product Added Successfully!");
            navigate("/admin/products");



           

        }catch(err){
            toast.error("error adding product.please try again");
            console.log(err)
        }

 }

}



    return(
        
        <div className="w-full h-full p-[50px] flex justify-center items-start overflow-y-scroll ">

            <div className="w-[800px] bg-accent/50 rounded-2xl p-[40px]">
            <h1 className="flex justify-center pb-[30px] text-2xl font-bold items-center gap-[15px]" ><MdOutlineAddShoppingCart/>Add New Product</h1>

                <div className="w-full bg-white p-[20px] flex flex-wrap justify-between rounded-xl">

                            <div className=" flex flex-col my-[10px] w-[40%]">

                                 <label> Product ID</label>

                                <input type="text" value={productID} onChange={(e)=>setProductID(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>
                                  <p className="text-[13px] text-gray-500 text-right ">Provide a unique product ID</p>

                            </div>

                            <div className=" flex flex-col my-[10px] w-[40%]">

                                 <label> Product Name</label>

                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>

                            <div className=" flex flex-col my-[10px] w-[70%]">

                                 <label> Alternative Name</label>

                                <input type="text" value={altNames} onChange={(e)=>setAltNames(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>
                                <p className="text-[13px] text-gray-500 text-right ">Separate multyple names with commas</p>

                            </div>



                             <div className=" flex flex-col my-[10px] w-full">

                                 <label> Discription</label>

                                <textarea value={discription} onChange={(e)=>setDiscription(e.target.value)} className=" w-full h-[100px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px] py-[10px]"/>
                                

                            </div>



                             <div className=" flex flex-col my-[10px] w-[40%]">

                                 <label> Price</label>

                                <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>



                            <div className=" flex flex-col my-[10px] w-[40%]">

                                 <label> Label Price</label>

                                <input type="number" value={labelledPrice} onChange={(e)=>setLabelledPrice(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>


                            <div className=" flex flex-col my-[10px] w-[80%]">

                                 <label> Images</label>

                                <input type="text" value={images} onChange={(e)=>setImages(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>



                             <div className=" flex flex-col my-[10px] w-[30%]">

                                 <label> Category</label>
                                    <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full h-[40px] border rounded-2xl border-accent focus:ring-accent focus:outline-none focus:ring-2 pl-[10px] shadow-2xl">
                                        <option value="CPU">CPU</option>
                                        <option value="Graphic Card">Graphic Card</option>
                                        <option value="Motherboard">Motherboard</option>
                                        <option value="Power Supplies">Power Supplies</option>
                                        <option value="RAM">RAM</option>
                                        <option value="Storage Device">Storage Device</option>
                                        <option value="Cooling Solution">Cooling Solution</option>
                                        <option value="Computer Cases">Computer Cases</option>
                                        <option value="Mouse & Keyboard">Mouse & Keyboard</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Monitor">Monitor</option>
                                        <option value="Computer">Computer</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Cables">Cables</option>
                                        <option value="Networking Devices">Networking Devices</option>
                                        <option value="Others">Others</option>

                                    </select>
                              

                            </div>


                            <div className=" flex flex-col my-[10px]">

                                 <label> Brand</label>

                                <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>


                            <div className=" flex flex-col my-[10px] w-[30%]">

                                 <label> Model</label>

                                <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>

                            <div className=" flex flex-col my-[10px] w-[30%]">

                                 <label> Stock</label>

                                <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} className=" w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]"/>


                            </div>

                            <div className=" flex flex-col my-[10px] mb-[30px] w-[40%]">

                                 <label> Available</label>


                                     <select value={isAvailable} onChange={(e)=>setIsavailable(e.target.value)} className="w-full h-[40px] border rounded-2xl border-accent focus:ring-accent focus:outline-none focus:ring-2 pl-[10px] shadow-2xl">
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                       

                                    </select>

                            </div>
                          
                               

                                 <button onClick={addProduct} className=" w-[45%] mt-[30px] h-[50px] bg-accent font-bold text-[20px] rounded-2xl hover:bg-gray-500 hover:text-white ">Add Product</button>
                            <Link to="/admin/products" className="w-[45%] mt-[30px] h-[50px] font-bold text-[20px] rounded-2xl flex justify-center bg-accent  hover:bg-gray-500 hover:text-white items-center ">Cancel</Link>
                            

                         
                           

                       
                </div>

                

            </div>
        </div>
    )
}