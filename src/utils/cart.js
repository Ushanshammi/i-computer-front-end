import toast from "react-hot-toast";

//this is sample
const sampleCart=[
    {
        productID:"mm192",
        name:"laptop",
        quantity:"2"
    },

     {
        productID:"mm1452",
        name:"mobile",
        quantity:"10"
    }
]






export function getCart(){

    let cartString=localStorage.getItem("cart");
    if(cartString == null){
        localStorage.setItem("cart","[]");
        return [];

    }else{
        const cart=JSON.parse(cartString);
        return cart;
    }
}


export function addToCart(product,quantity){

    const cart=getCart();

    //check if product is already in card

    const index=cart.findIndex(
        (item)=>{
            return item.productID == product.productID;
        }
    );

    if(index == -1){
        cart.push(
              {
        productID:product.productID,
        name:product.name,
        labeledPrice:product.labeledPrice,
        quantity:quantity,
        image:product.images[0],
        labelPrice:product.labelPrice,
        price:product.price,


             }
            
        )
         toast.success(`${product.name}  added to cart`);
    }else{
        const newQty=cart[index].quantity + quantity

        if(newQty <= 0){
            cart.splice(index, 1);
            toast.success(`${product.name} removed from cart`)
        }else{
            cart[index].quantity=newQty;
            toast.success(`updated ${product.name}. quanitity to ${newQty}`)
        }
    }
    const cartString=JSON.stringify(cart);
    localStorage.setItem("cart",cartString);

}

export function emptyCart(){
    localStorage.setItem("cart","[]");

}

export function getCartTotal(){

    let total=0;
    const cart=getCart();

    cart.forEach(
        (item)=>{
                total +=item.price * item.quantity;
        }
        
    )

    return total;

}