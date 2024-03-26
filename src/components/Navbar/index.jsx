import React from 'react'
import { Container, Section, Wrapper, Logo, Link } from '../Navbar/style'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'


const Home = () => {

  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate('/home')} logo='true'>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {
            navbar.map(({ title, path }, index) => {
              return (
                <Link className={({ isActive }) => isActive && 'active'} key={index} to={path}>{title}</Link>
              )
            })
          }
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container >
  )
}

export default Home