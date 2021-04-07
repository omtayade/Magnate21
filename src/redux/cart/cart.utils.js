export const addItemToCart =(cartItems , cartItemToAdd)=>{
    const existingCartItem = cartItems.find(
        cartItem =>cartItem.id==cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem=>         //yaha ek ek cartItem ko le rahe hai , alredy existed hai to quantity badhao else naya cartItem daalo.....and importantly aisa bol sakte sab cartItem ko map karke cartitems(cartitems.map() vale cartItems me) me daal rahe hai aur naya cartitems return kar rahe hai..
          cartItem.id==cartItemToAdd.id ?{...cartItem ,quantity:cartItem.quantity + 1}
          :cartItem


        )
    }

    return [...cartItems , {...cartItemToAdd , quantity:1}];
}

export const removeItemFromCart =(cartItems , cartItemToRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem =>cartItem.id==cartItemToRemove.id
    );

    if(existingCartItem.quantity!=1){
        return cartItems.map(cartItem=>         
          cartItem.id==cartItemToRemove.id ?{...cartItem ,quantity:cartItem.quantity - 1}
          :cartItem


        )
    }

    return cartItems.filter(cartItem =>cartItem.id != cartItemToRemove.id); 
}