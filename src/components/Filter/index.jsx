import React, { useRef } from 'react'
import { Container, Icons, MenuWrapper, Section } from './style'
import Input from '../Generic/Input'
import Button from '../Generic/Button'
import { Dropdown } from 'antd'

export const Filter = () => {

  const countryRef = useRef()
  const regionRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()

  const roomRef = useRef()
  const sortRef = useRef()
  const sizeRef = useRef()

  const minPriceRef = useRef()
  const maxPriceRef = useRef()


  const menu = (
    <MenuWrapper>
      <h1 className='subTitle'>Adress</h1>
      <Section>
        <Input ref={countryRef} placeholder='Country' type="text" />
        <Input ref={regionRef} placeholder='Region' type="text" />
        <Input ref={cityRef} placeholder='City' type="text" />
        <Input ref={zipRef} placeholder='Zip' type="text" />
      </Section>
      <h1 className='subTitle'>Apertment info</h1>
      <Section>
        <Input ref={roomRef} placeholder='Country' type="text" />
        <Input ref={sortRef} placeholder='Region' type="text" />
        <Input ref={sizeRef} placeholder='City' type="text" />
      </Section>
      <h1 className='subTitle'>Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder='Country' type="text" />
        <Input ref={maxPriceRef} placeholder='Region' type="text" />
      </Section>
      <Section>
        <Button type='light'>Cancel</Button>
        <Button>Submit</Button>

      </Section>
    </MenuWrapper>
  )



  return (
    <Container >
      <Input
        icon={<Icons.Houses />}
        placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
      <Dropdown
        overlay={menu}
        placement="bottomRight" arrow={{ pointAtCenter: true }}>
        <div>
          <Button type={'light'}> <Icons.Filter /> Advanced</Button>
        </div>
      </Dropdown>

      <Button> <Icons.Search /> Search</Button>
    </Container>
  )
}


export default Filter