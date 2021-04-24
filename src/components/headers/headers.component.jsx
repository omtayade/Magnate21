import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCurrentUser} from '../../redux/user/user.selectors'

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/cart.svg';

import './headers.styles.scss';

const handleClick =() =>{
   auth.signOut()
  

}

const Header = ({ currentUser  }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        Home
      </Link>
      <Link className='option' to='/about-us'>
        About
      </Link>
      <Link className='option' to='/theme'>
        Theme
      </Link>
      <Link className='option' to='/speakers'>
        Speakers
      </Link>
      <Link className='option' to='/events'>
        Events
      </Link>
      <Link className='option' to='/contact-us'>
        Team
      </Link>
      {currentUser ? (
        <Link className='option' to='/signin' onClick={handleClick}>
          SIGN OUT
        </Link>
      ) : (
        <Link className='option' to='/signup'>
          Login/Register
        </Link>
      )}
     
    </div>
   
  </div>
);


const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  currentUser:selectCurrentUser
 
});

export default connect(mapStateToProps) (Header);