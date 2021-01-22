import styled from 'styled-components'
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
 export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

export const Nav = styled.nav`
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

export const CommetBox = styled.div`
  width: 100%;
  background: #ffff;
  color: #19c15d;
  .content-comment {
    width: 100%;
    margin-top: 2em;
    height: 10em;
    display: flex;
    padding: 1em;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ececec;
  }

  .content-comments {
    width: 100%;
    height: 4em;
    display: flex;
    padding: 1em;
    display: flex;
    justify-content: space-around;
    background: #ececec;
  }
  .actions {
    width: 8em;
    height: 2em;
    background: none;
    color: #19c15d;
    border-radius: 5%;
    border: none;
    text-align: inherit;
    padding: 1em 0;
  }
  .content-button {
    width: 100%;
    background: #ffff;
    border-top: 1px #e0e0e0 solid;
    display: flex;
    flex-direction: row-reverse;
  }
  .photo-box-comment {
    width: auto;
    height: auto;
    background: #f6f6f4;
    font-size: 3em;
    color: gray;
    border-radius: 100%;
    text-align: center;
  }
  .photo-box-comments {
    width: auto;
    height: auto;
    background: #f6f6f4;
    font-size: 2em;
    color: gray;
    border-radius: 100%;
    text-align: center;
  }
  .photo-user {
    width: 4em;
    height: 100%;
  }

  .photo-user-comments {
    width: 3em;
    height: 100%;
  }

  .write-user {
    width: 80%;
    height: 50px;
  }
  .name-user {
    display: flex;
    flex-direction: column;
  }
  .time-comment {
    font-size: 0.6em;
    color: #8080805c;
  }
  .post-coment {
    color: black;
  }
  .reaction- user {
    display: flex;
    justify-content: space-around;
  }
  .content-reaction {
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: space-between;
    height: 2.4em;
    padding: 0.5em 1em;
    border: 1px solid #ececec;
  }
  .reaction-button-like {
    width: 1.2em;
    height: 1.2em;
    border-radius: 100%;
    position: relative;
    left: -6px !important;
    background: #428cf4;
    border: none;
    top: 0.1em;
  }
  .reaction-button-no-like {
    width: 1.2em;
    height: 1.2em;
    border-radius: 100%;
    position: relative;
    left: -9px !important;
    background: #fe565c;
    border: none;
    top: 0.1em;
  }
  .reaction-button-funny {
    width: 1.2em;
    height: 1.2em;
    border-radius: 100%;
    position: relative;
    left: -12px !important;
    background: #f6c02b;
    border: none;
    top: 0.1em;
  }
  .check-coment {
    width: 8em;
    height: 2em;
    background: none;
    color: #807c7c;
    border-radius: 5%;
    border: none;
  }
  .write-comments{
    width: 100%;
    background: #ececec;
    height: 6em;
    padding: 1.3em
  }
  .post-write {
    width: 100%;
    height: 3em;
    border: none;
    padding:1em;
    ::placeholder{
        color:#bbbbbb;
    }
  }
`
export const PostBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #19c15d;
  border: 1px solid #ececec;
  .post-write {
    width: 100%;
    height: 4em;
    border: none;
    padding:1em;
    ::placeholder{
        color:#19c15d;
        font-weight: 300;
    }
  }
  .send {
    width: 8em;
    height: 2em;
    background: #19c15d;
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
