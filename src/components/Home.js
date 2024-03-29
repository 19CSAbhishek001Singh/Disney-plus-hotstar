import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import Viewers from "./Viewers"
import Movies from "./Movies"
function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home
const Container = styled.main`
overflow-x: hidden;
min-height: calc(87vh);
padding:0 calc(3.5vw+5px);
position:relative;
&:before{
  background:url("/images/home-background.png") center center / cover 
  no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
`