import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg'
const Container = styled.div`
position: relative;
height: 571px;
`
const Arrow = styled(arrow)`
position: absolute;
top: 50%;
width: 50px;
height: 50px;
padding: 18px;
background: red;
border-radius: 50%;
background-color: rgba(255,255,255,0.4);
transform: ${({ left }) => (!left ? 'rotate(90deg)' : 'rotate(-90deg)')};
right: ${({ left }) => left && '20px'};
left: ${({ left }) => !left && '20px'};
cursor: pointer;
:hover{
  opacity: 0.7;
}
`

const Img = styled.img`
width: 100%;
`


const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0,0,0,0.7);
`

const Content = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
color: white;
flex-direction: column;
align-items: center;
justify-content: center;
`

Content.Title = styled.h1`
 font-family: "Montserrat", sans-serif;
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: #fff;
`

Content.Desc = styled.div`
 font-family: "Montserrat", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.02em;
color: #fff;

`

export { Container, Arrow, Img, Blur, Content }