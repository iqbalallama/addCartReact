function getStored(){
    const store = localStorage.getItem('cart')
    if(store){
        return JSON.parse(store)
    }
    return [];
}
function saveCart(cart){
    const string = JSON.stringify(cart)
    localStorage.setItem('cart',string)

}
function addToCarts(id){
    const cart = getStored();
    cart.push(id);
    saveCart(cart);
}
function removeLs (id){
    const cart = getStored();
    const remain = cart.filter(idx => idx !== id);
    saveCart(remain)
}

export {addToCarts ,getStored,removeLs }