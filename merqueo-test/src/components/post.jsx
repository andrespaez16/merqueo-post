import React from 'react'
import styled from 'styled-components'

const PostBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #2acd6c;
  .post-write {
    width: 100%;
    height: 4em;
    border: none;
    padding:1em;
    ::placeholder{
        color:#2acd6c;
    }
  }
  .send {
    width: 8em;
    height: 2em;
    background: #2acd6c;
    color: #f1f1f1;
    margin: 0.5em;
    border-radius: 5%;
    border: none;
  }
  .content-button {
    width: 100%;
    background: #ffff;
    border-top: 1px #e0e0e0 solid;
    display: flex;
    flex-direction: row-reverse;
  }
`

const Post = () => {
  return (
    <PostBox>
      <input className='post-write' type='text' placeholder='Escribe aqui tu estado' />
      <div className='content-button'>
        <button className='send'>Publicar</button>
      </div>
    </PostBox>
    
  )
}
export default Post
