import React from 'react';
import {Ul} from '../../styles/styled'

const RightNav = (props) => {
    const {
      name,
      open
      } = props
  return (
    <Ul open={open}>
      <li>Hola! {name}</li>
    </Ul>
  )
}

export default RightNav
