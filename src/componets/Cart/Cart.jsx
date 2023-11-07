import './Cart.css'
export default function Cart({cart,remove}){
    return(
        <div>
            <h1>{cart.length}</h1>
            {
                cart.map(bottle =><div className="pro">
                    <img src={bottle.img}></img>
                    <p>${bottle.price}</p>
                    <button onClick={()=>remove(bottle.id)}>Delte</button>
                </div>)
            }
        </div>
    )
}