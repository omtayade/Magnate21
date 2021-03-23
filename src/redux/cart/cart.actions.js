import cartActionTypes from './cartTypes'

export const toggleCartHidden =()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
});
export const AddItems = item =>({
    type:cartActionTypes.ADD_ITEMS,
    payload:item
});