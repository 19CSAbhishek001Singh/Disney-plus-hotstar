import React from 'react'
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/dBfMltea80VN7-_-x1My2r-lzUY=/0x0:4096x2304/1220x813/filters:focal(1973x1175:2627x1829):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" alt="" />
      </Background>
      <ImgTitle>
        <img src="https://1.bp.blogspot.com/-SFIcHjsKs6w/WsGKiBqr8sI/AAAAAAAAVx0/mrXzRPfHjOktGXKq9UIPF-ieUs3jiKejgCLcBGAs/s1600/Pixar-Bao-Logo.jpg" alt="" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>

        </AddButton>
        <GroupWatchButton>

        </GroupWatchButton>
      </Controls>
    </Container>
  )
}

export default Detail
const Container = styled.div`
min-height:calc(100vh-70px);
padding:0 calc(3.5vw+5px);
position: relative;
`
const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;
img{
width:100%;
height:100%;
object-fit:cover;
}
`
const ImgTitle = styled.div`
height:30vh;
min-height:170px;
min-width:200px;
width:35vw;
img{
  width:100%;
  object-fit:contain;
  height:100%;
}
`
const Controls = styled.div`
display:flex;
`
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;
&:hover{
  background:rgb(198,198,198);
}
`
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
`
const AddButton = styled.button`

`
const GroupWatchButton = styled.button`

`