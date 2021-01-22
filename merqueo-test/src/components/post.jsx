import React, { useEffect, useState } from 'react'
import Comment from './comment'
import { PostBox } from '../styles/styled'

const Post = () => {
  const [userName, setUserName] = useState('Juan R.')
  const [newPost, setNewPost] = useState('')
  const [post, setPost] = useState([
    {
      autor: userName,
      post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam cumque corrupt',
      reaction:0,
      comments:[],
      openComment:false,
      showReaction:false
    }
  ])

  const addNewPost = (e) => {
    setPost([...post, { autor: userName, post: newPost }])
    e.preventDefault()
    resetInput()
    console.log(post, 'esto es lo que envio')
  }

  const newPostWrite = (e) => setNewPost(e.target.value)
  
  const resetInput = () => setNewPost('')

  return (
    <>
      <PostBox>
        <form onSubmit={addNewPost}>
          <input
            className='post-write'
            type='text'
            placeholder='Escribe aqui tu estado'
            value={newPost}
            onChange={newPostWrite}
          />
          <div className='content-button'>
            <button className='send'>Publicar </button>
          </div>
        </form>
      </PostBox>
      <Comment posts={post} />
    </>
  )
}
export default Post
