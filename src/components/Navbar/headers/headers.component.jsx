import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCurrentUser} from '../../../redux/user/user.selectors'

import { auth } from '../../../firebase/firebase.utils';

import styled from 'styled-components'

// import './headers.styles.scss';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  min-width:70%;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 3.5rem;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    li .option{
      color: white;
    }
  }
`;



const handleClick =() =>{
   auth.signOut()
  

}

const RightHeader = ({open , currentUser   }) => (
  <Ul open={open}>
    
      <li >
        <Link  to='/' className='option'>
          Home
        </Link>
      </li>
      <li>
        <Link  to='/about-us' className='option'>
          About
        </Link>
      </li>
      <li>
        <Link  to='/theme' className='option'>
          Theme
        </Link>
      </li>
      <li>
        <Link  to='/speakers' className='option'>
          Speakers
        </Link>
      </li>
      <li>
        <Link  to='/events' className='option' >
          Events
        </Link>
      </li>
      <li>
        <Link  to='/team' className='option'>
          Team
        </Link>
      </li>
      <li>
        <Link  to='/contact-us' className='option' >
          Contact Us
        </Link>
      </li>
      <li>
        {currentUser ? (
          <Link className='option' to='/signin' onClick={handleClick} >
            SIGN OUT
          </Link>
        ) : (
          <Link className='option' to='/signup' >
            Login/Register
          </Link>
        )}

      </li>
      
      
     
  </Ul>
   
  
);


const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  currentUser:selectCurrentUser
 
});

export default connect(mapStateToProps) (RightHeader);