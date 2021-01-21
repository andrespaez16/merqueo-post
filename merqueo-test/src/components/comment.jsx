import React from 'react'
import styled from 'styled-components'

const CommetBox = styled.div`
  width: 100%;
  background:#ffff;  
  color: #2acd6c;
  .content-comment{
   width:100%;
   margin-top:2em;
   height:10em;
   display:flex;
   padding:1em;
  }
  .send {
    width: 8em;
    height: 2em;
    background: none;
    color: #2acd6c;
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
  .temp{
      width:50px;
      height:50px;
      background:red;
  }
  .photo-user{
    width:50px;
    height:100%;
  }
`

const Comment = (props) => {
  return (
    <CommetBox>
      <div className='content-comment'>
        <div className='photo-user'>
           <div className='temp'>
            </div> 
        </div>
        <div className='write-user'>
          <div className='name-user'>
              <span>juan rodriguez</span>
              <span>45min</span>
          </div>
          <div className='write-user-post'>
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae veniam cumque corrupti porro maxime numquam. Id odit amet fugit fugiat debitis repellat, ipsam ducimus consequatur reiciendis inventore, tenetur cupiditate iusto?</span>
          </div>
          <div className='reaction- user'>
            <button className='send'>Reaccionar</button>
            <button className='send'>Comentar</button>
          </div>
        </div>
      </div>
      <div className='content-reaction'></div>
    </CommetBox>
  )
}
export default Comment
