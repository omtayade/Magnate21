import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { auth } from "../../../firebase/firebase.utils";

import styled from "styled-components";

import "./headers.component.css";



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
