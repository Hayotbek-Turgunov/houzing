import React from 'react'
import { Container, Section, Wrapper, Logo, Link } from '../Navbar/style'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import Button from '../Generic/Button'
import Filter from '../Filter'


const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate('/home')} logo='logo'  >
          <Logo /><h3>Houzing</h3>
        </Section>
        <Section>
          {
            navbar.map(({ title, path, hidden }, index) => {
              return !hidden && (
                <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
              )
            })
          }
        </Section>
        <Section>
          <Button onClick={() => navigate('/signin')} type='dark'>Sign in</Button>
        </Section>
      </Wrapper>
      <Filter />
      <Outlet />
    </Container >
  )
}

export default Home