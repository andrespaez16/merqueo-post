import React from 'react';
import styled from 'styled-components';
import Burger from './burger';
import {Nav} from '../../styles/styled'

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
