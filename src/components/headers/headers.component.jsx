import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../Cart-dropdown/cart-dropdown.component'
import CartIcon from '../Cart-dropdown/cartIcon.component'
import './headers.styles.scss';

const Header = ({ currentUser , hidden }) => (
  <div className='header'>

  </div>
);


const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps) (Header);