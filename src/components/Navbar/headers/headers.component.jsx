import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { auth } from "../../../firebase/firebase.utils";

import styled from "styled-components";

import "./headers.component.css";

// const Ul = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-flow: row nowrap;
//   min-width: 70%;
//   margin: 0;
//   li {
//     padding: 18px 10px;
//   }
//   @media (max-width: 768px) {
//     flex-flow: column nowrap;
//     background-color: #e85d04;
//     position: fixed;
//     transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
//     top: 0;
//     right: 0;
//     height: 100%;
//     padding-top: 3.5rem;
//     z-index: 100;
//     transition: transform 0.3s ease-in-out;
//     li .option {
//       color: white;
//     }
//     li .active__option {
//       color: red;
//     }
//   }
// `;

const handleClick = async () => {
  await auth.signOut();
  window.location.reload();
};

const RightHeader = ({ open, currentUser }) => (
  <ul open={open}>
    <li>
      <NavLink
        to="/"
        exact={true}
        className="option"
        activeClassName="active__option"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about-us"
        className="option"
        activeClassName="active__option"
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/theme" className="option" activeClassName="active__option">
        Theme
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/speakers"
        className="option"
        activeClassName="active__option"
      >
        Speakers
      </NavLink>
    </li>
    <li>
      <NavLink to="/events" className="option" activeClassName="active__option">
        Events
      </NavLink>
    </li>
    <li>
      <NavLink to="/team" className="option" activeClassName="active__option">
        Team
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact-us"
        className="option"
        activeClassName="active__option"
      >
        Contact Us
      </NavLink>
    </li>
    <li>
      {currentUser ? (
        <NavLink
          className="option"
          to="/signin"
          onClick={handleClick}
          activeClassName="active__option"
        >
          SIGN OUT
        </NavLink>
      ) : (
        <NavLink
          className="option"
          to="/signup"
          activeClassName="active__option"
        >
          Login/Register
        </NavLink>
      )}
    </li>
  </ul>
);

const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser  //Equal as=> currentUser:rootReducer.userReducer.currentUser
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(RightHeader);
