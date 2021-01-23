import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CommetBox } from '../styles/styled'
import faker from 'faker'

const Comment = (props) => {
  const { posts } = props
  const [openComment, setOpenComment] = useState(false)
  const [showReaction, setshowReaction] = useState(false)
  const [reactionCount, setReactionCount] = useState(0)
  const [comments, setComents] = useState([])
  const [comment, setComent] = useState('')
  const [userName, setUserName] = useState(faker.name.firstName())

  const actionOpen = (open) => {
    setOpenComment(!open)
  }

  const reactionShow = (show) => {
    setshowReaction(!show)
    reaction()
  }

  const reaction = () => {
    setReactionCount(reactionCount + 1)
  }

  const addNewComment = (e) => {
    setComents([...comments, { autor: userName, comment }])
    e.preventDefault()
    setUserName(faker.name.firstName())
    resetInput()
  }

  const newComentWrite = (e) => setComent(e.target.value)

  const resetInput = () => setComent('')

  const renderPost = (post, index) => {
    return (
      <div className='container-post'>
        <div className='content-comment'>
          <div className='photo-user'>
            <div className='photo-box-comment'>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className='write-user'>
            <div className='name-user'>
              <span>
                <strong>{post.autor}</strong>
              </span>
              <span className='time-comment'>
                <strong>hace 45 minutos </strong>
              </span>
            </div>
            <div className='write-user-post'>
              <span className='post-coment'>{post.post}</span>
            </div>
            <div className='reaction-user'>
              <button
                className='actions'
                onClick={() => {
                  reactionShow(post.showReaction)
                }}
              >
                Reaccionar
              </button>
              <button
                className='actions'
                onClick={() => {
                  actionOpen(openComment)
                }}
              >
                Comentar
              </button>
            </div>
          </div>
        </div>
        <div className='content-reaction'>
          {reactionCount > 0 ? (
            <div className='content-reaction-button'>
              <button
                className='reaction-button-like'
                onClick={() => {
                  reaction()
                }}
              ></button>
              <button
                className='reaction-button-no-like'
                onClick={() => {
                  reaction()
                }}
              ></button>
              <button
                className='reaction-button-funny'
                onClick={() => {
                  reaction()
                }}
              ></button>
              <span className='count-reaction'>
                <strong>{reactionCount}</strong>
              </span>
            </div>
          ) : (
            <span></span>
          )}
          {comments.length > 0 ? (
            <button
              className='check-coment'
              onClick={() => {
                actionOpen(openComment)
              }}
            >
              <span>{comments.length}</span> Comentarios
            </button>
          ) : (
            <span></span>
          )}
        </div>
        <div className='content-reaction-responsive'>
          <div className='reaction-user-responsive'>
            <button
              className='actions'
              onClick={() => {
                reactionShow(post.showReaction)
              }}
            >
              Reaccionar
            </button>
            <button
              className='actions'
              onClick={() => {
                actionOpen(openComment)
              }}
            >
              Comentar
            </button>
          </div>
        </div>
        {openComment === true ? (
          <>
            {comments.map((comment) => renderComment(comment))}
            <div className='write-comments'>
              <form onSubmit={addNewComment}>
                <input
                  className='post-write'
                  type='text'
                  placeholder='Escribe un comentario'
                  value={comment}
                  onChange={newComentWrite}
                />
              </form>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    )
  }
  const renderComment = (comment) => {
    return (
      <div className='content-comments'>
        <div className='photo-user-comments'>
          <div className='photo-box-comments '>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className='name-user-comment'>
          <span>
            <strong>{comment.autor}</strong>
          </span>
          <span className='time-comment'>
            <strong>hace 45 minutos </strong>
          </span>
        </div>
        <div className='write-user'>
          <span className='post-coment'>{comment.comment}</span>
        </div>
      </div>
    )
  }
  return (<CommetBox>{posts.map((post) => renderPost(post))}</CommetBox>)
}
export default Comment
