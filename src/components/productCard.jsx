import { Link } from "react-router-dom";

export default function ProductCard(props){

   const product=props.product;


    return(

    <div className="w-[300px] h-[400px] m-4 shadow-2xl cursor-pointer relative hover:[&_.buttons]:opacity-100 hover:[&_.primary-image]:opacity-0">
        <div className="w-full h-[250px] bg-red-500 relative">

             <img src={product.images[1]} alt="" className="w-full h-full absolute bg-white object-cover" />
              <img src={product.images[0]} alt="" className="w-full h-full absolute bg-white hover:opacity-0 transition-opacity duration-500 object-cover primary-image" />
              

        </div>
        


        <div className="w-full h-[150px] p-2 flex flex-col justify-between">

            <h1 className="text-black font-semibold text-lg text-center">{product.name}</h1>
           
            <div className="w-full flex flex-col items-center">
                {
                    product.labelPrice > product.price &&
                    <h2 className="text-second/80 line-through decoration-amber-500/70 decoration-2 mr-2">
                        LKR. {product.labelPrice.toFixed(2)}
                    </h2>
                    
                }
                <h2 className="text-black font-semibold text-2xl">LKR. {product.price.toFixed(2)}</h2>
            </div>
           


        </div>
        
      
       <div className="w-full h-[150px] flex flex-row justify-center items-center gap-4 bottom-0 opacity-0 bg-white absolute buttons transition-opacity duration-300">

               <Link to={"/overview/" + product.productID } className="border-2  border-secondary text-secondary hover:bg-secondary hover:text-white text-black transition-colors duration-150 h-[50px] w-[150px] flex justify-center items-center">View Details</Link>
       </div>


    </div>

    );
}