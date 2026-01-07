export default function ProductCard(props){
    console.log(props.name)
    return(

    <div> 
        <h1>{props.name}</h1>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/033/351/258/small/beautiful-bright-wallpaper-nature-background-ai-generated-photo.jpg" alt="" />
        <p>{props.price}</p>
    </div>

    )
}