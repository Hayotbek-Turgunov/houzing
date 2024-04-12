import styled from 'styled-components';

import { ReactComponent as logoImg } from '../../assets/icons/logo.svg'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: var(--colorPrimary);
color: #fff;
padding: var(--padding);
height: 64px;
`

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({ logo }) => logo && 'pointer'};
.active{
  color: yellow;
}
`

const Logo = styled(logoImg)`
width: 30px;
margin-right: 12px;

& path{
  fill: #fff;
  stroke: #fff;
}
`


const Link = styled(NavLink)`
text-decoration: none;
color: white;
padding: 0 32px;

`

export { Container, Wrapper, Section, Logo, Link }