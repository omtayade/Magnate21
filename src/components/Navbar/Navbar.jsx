import React from 'react';
import styled from 'styled-components';
import Burger from './Burger/burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  position : absolute;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  z-index : 99;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Magnate21
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar