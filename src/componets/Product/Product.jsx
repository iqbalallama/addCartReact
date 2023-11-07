import './Product.css'
export default function Product({bottle,handleToCart}){
    const {name,img,price} = bottle;
    return(
        <div className="product">
            <img src={img}></img>
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={()=>handleToCart(bottle)}>Purches</button>
        </div>
    )
}