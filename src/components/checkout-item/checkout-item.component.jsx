import React from 'react';
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'
import {removeItem , AddItems} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem ,clearItem,removeItem ,AddItems}) => {
  const  { name, imageUrl, price, quantity } = cartItem;
  
  return(<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={()=>AddItems(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick = {()=> clearItem(cartItem)}> &#10005; </div> 
     {/* &# it is utf8 for symbols see w3schools  */}
  </div>)
};

const mapDispatchToProps =dispatch =>
({clearItem : item => dispatch(clearItemFromCart(item)),
  removeItem:item => dispatch(removeItem(item)),
  AddItems:item => dispatch(AddItems(item))
});

export default connect(null , mapDispatchToProps) (CheckoutItem);