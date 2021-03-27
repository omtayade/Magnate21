import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../Cart-dropdown/cart-dropdown.component'
import { ReactComponent as Logo } from '../../assets/cart.svg';
import CartIcon from '../Cart-dropdown/cartIcon.component'
import './headers.styles.scss';

const Header = ({ currentUser , hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {hidden?null:<CartDropdown/>}
    
  </div>
);


const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps) (Header);