import styled from 'styled-components'
import { ReactComponent as filter } from '../../assets/icons/setting.svg'
import { ReactComponent as houses } from '../../assets/icons/houses.svg'
import { ReactComponent as search } from '../../assets/icons/search.svg'


const Container = styled.div`
 display: flex;
 padding: var(--padding);
 padding-top: 10px;
 padding-bottom: 10px;
 gap: 20px;
`
const Icons = styled.div`
`
Icons.Search = styled(search)`
margin-right: 8px;
`
Icons.Filter = styled(filter)`
margin-right: 8px;
`
Icons.Houses = styled(houses)`
margin-right: 8px;
`


const MenuWrapper = styled.div`
padding:30px;
border: 1px solid #e6e9ec;

`
const Section = styled.div`
display: flex;
gap: 20px;
margin-bottom:20px
`

export { Container, MenuWrapper, Icons, Section }
