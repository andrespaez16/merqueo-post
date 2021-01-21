import React from 'react'
import Comment from './comment';
import {PostBox} from '../styles/styled'


const Post = () => {
  return (
      <>
    <PostBox>
      <input className='post-write' type='text' placeholder='Escribe aqui tu estado' />
      <div className='content-button'>
      <i class="fas fa-user"></i>
        <button className='send'>Publicar </button>
      </div>
    </PostBox>
    <Comment/>
    </>
    
  )
}
export default Post
