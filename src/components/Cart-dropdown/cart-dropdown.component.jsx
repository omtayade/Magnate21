import React from 'react'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../Cart-item/cart-item.component'
const CartDropdown =({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps =(state)=>({
    cartItems:selectCartItems(state)
});
export default connect(mapStateToProps) (CartDropdown);