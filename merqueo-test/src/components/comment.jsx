import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CommetBox } from '../styles/styled'

const Comment = (props) => {
  return (
    <CommetBox>
      <div className='content-comment'>
        <div className='photo-user'>
          <div className='photo-box-comment'>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className='write-user'>
          <div className='name-user'>
            <span>
              <strong>juan rodriguez</strong>
            </span>
            <span className='time-comment'>
              <strong>hace 45 minutos </strong>
            </span>
          </div>
          <div className='write-user-post'>
            <span className='post-coment'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam cumque corrupti
              porro maxime numquam. Id odit amet fugit fugiat debitis repellat?
            </span>
          </div>
          <div className='reaction- user'>
            <button className='actions'>Reaccionar</button>
            <button className='actions'>Comentar</button>
          </div>
        </div>
      </div>
      <div className='content-reaction'>
        <div className='content-reaction-button'>
          <button className='reaction-button-like'></button>
          <button className='reaction-button-no-like'></button>
          <button className='reaction-button-funny'></button>
          <span className='count-reaction'>
            <strong>13</strong>
          </span>
        </div>
        <button className='check-coment'>
          <span>3</span> Comentarios
        </button>
      </div>
      <div className='content-comments'>
        <div className='photo-user-comments'>
          <div className='photo-box-comments '>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className='name-user'>
          <span>
            <strong>juan rodriguez</strong>
          </span>
          <span className='time-comment'>
            <strong>hace 45 minutos </strong>
          </span>
        </div>
        <div className='write-user-post'>
          <span className='post-coment'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam cumque
          </span>
        </div>
      </div>
      <div className='content-comments'>
        <div className='photo-user-comments'>
          <div className='photo-box-comments '>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className='name-user'>
          <span>
            <strong>juan rodriguez</strong>
          </span>
          <span className='time-comment'>
            <strong>hace 45 minutos </strong>
          </span>
        </div>
        <div className='write-user-post'>
          <span className='post-coment'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam cumque
          </span>
        </div>
      </div>
      <div className='write-comments'>
        <input className='post-write' type='text' placeholder='Escribe un comentario' />
      </div>
    </CommetBox>
  )
}
export default Comment
