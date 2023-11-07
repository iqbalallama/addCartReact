import { useEffect } from "react"
import { useState } from "react"
import Product from "../Product/Product"
import './Products.css'
import Cart from "../Cart/Cart"
import { addToCarts, getStored, removeLs } from "../../Utility/local"
export default function Products(){
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('shopping.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    useEffect(()=>{
        if(bottles.length > 0){
            const stored = getStored();
            const saveStore = [];
            for(const id of stored){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveStore.push(bottle)
                }
            }
            setCart(saveStore)
        }
    },[bottles])
    function handleToCart (bottle){
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToCarts(bottle.id)
    }
    function remove (id){
        const remains = cart.filter(bottle => bottle.id !== id);
        setCart(remains)
        removeLs(id);
    }
    return(
        <div>
            <div>
                <h2>Add My Shopping</h2>
            </div>
            <div className="">
                <Cart cart={cart} remove={remove}></Cart>
            </div>
            <div className="products">
                {
                    bottles.map(bottle =><Product
                    key={bottle.id}
                    bottle={bottle}
                    handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
        </div>
    )
}