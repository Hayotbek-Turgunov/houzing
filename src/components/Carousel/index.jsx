import React, { useRef } from 'react'
import { Carousel } from "antd";
import { Arrow, Blur, Container, Img } from './style';
import img1 from '../../assets/img/house1.png'
import img2 from '../../assets/img/house2.png'
import { Content } from './style';


const GenCarousel = () => {

  const slider = useRef()

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name }
    }

  }) => {
    if (name === 'right') slider.current.next()
    if (name === 'left') slider.current.prev()
  }


  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skper Pool Partment</Content.Title>
        <Content.Desc>Skper Pool Partment</Content.Desc>
      </Content>
      <Arrow data-name='left' onClick={onMove} left />
      <Arrow onClick={onMove} data-name='right' />
    </Container>
  )
}

export default GenCarousel