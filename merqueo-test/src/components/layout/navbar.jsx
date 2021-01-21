import React from 'react';
import styled from 'styled-components';
import Burger from './burger';

const Nav = styled.nav`
  background:#ffff;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 13px 0;
    margin-left:45%;
  }
  @media (max-width: 768px) {
    .logo {
        padding: 13px 0;
        margin-left:30%;
      }
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Domicilios Test
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
