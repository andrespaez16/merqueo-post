import React from 'react'
import styled from 'styled-components'

const Post = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .post-write {
    width: 100%;
    height: 4em;
    border: 1px grey #e0e0e0;
  }
  .send{
    position: absolute;
    width: 8em;
    right:0;
    height: 2em;
    background: #2acd6c;
    color: #f1f1f1;
    margin: 0.5em;
    border-radius: 5%;
    border: none; 
  }
`

const Coment = () => {
  return (
    <Post>
      <input className='post-write' type='text' placeholder='escriba' />
      <div>
        <button className='send'>Publicar</button>
      </div>
    </Post>
  )
}
export default Coment
