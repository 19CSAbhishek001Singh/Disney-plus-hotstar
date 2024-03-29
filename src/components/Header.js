import React from 'react'
import styled from 'styled-components';
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="./">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="./">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="./">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="./">
          <img src="/images/originals-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="./">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a href="./">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://media-exp1.licdn.com/dms/image/C4E03AQHdGUYrIhHvhQ/profile-displayphoto-shrink_800_800/0/1614069900767?e=1655337600&v=beta&t=-yN-LOjuKfbiguzDY5I6j6tUuoW_d1CWrtuOgu_hSfE" />
    </Nav>
  )
}

export default Header
const Nav = styled.nav`
height:70px;
background-color: #090b13;
display:flex;
align-items: center;
overflow-x: hidden;
padding:0 36px;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu = styled.div`
display: flex;
flex:1;
align-items: center;
margin-left:25px;
a{
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0 12px;
  color:white;
  cursor:pointer;
  img{
    height: 20px;
  }
  span{
    font-size:13px;
    letter-spacing:1.42px;
    position: relative;
    &:after{
      content:"";
      height:2px;
      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      background-color:white;
      opacity:0;
      transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      transform:scaleX(0);
    }
  }
  &:hover{
    span:after{
      transform:scaleX(1);
      opacity:1;
    }
  }
}
`
const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`