const cart = []

function addItem(cart,name,price,quantity){
    const existingItem = cart.find(item => item.name === name)
 if (existingItem){
    existingItem.quantity += quantity
 }else{
cart.push({name,price,quantity})
}
return cart
}

function removeItem(cart,name){
    const index = cart.findIndex(item=>item.name ===name)
    if(index !== -1){
        cart.splice(index,1)
    }
return cart

}


function getCartTotal(cart){
    return cart.reduce((total,item)=> total + item.price *item.quantity,0)
}

console.log(addItem(cart,"Apple",0.5,3))
console.log(addItem(cart,"Banana",0.3,5))
console.log(addItem(cart,"mango",1.0,2))
console.log(removeItem(cart,"Banana"))
console.log(getCartTotal(cart))