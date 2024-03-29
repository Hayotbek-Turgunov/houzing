import styled from 'styled-components';



const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return { background: 'transparent', border: '1px solid white', color: 'white' };
    case 'light':
      return { background: 'transparent', border: '1px solid #E6E9EC', color: 'white' };
    case 'primary':
      return { background: '#0061DF', border: 'none', color: 'white' };
    default:
      return { background: '#0061DF', border: 'none', color: 'white' };
  }
}


const Container = styled.input`
display: flex;
justify-content: center;
border-radius: 2px;
align-items: center;
min-width: 120px;
font-size: 14px;
height: ${({ height }) => height ? `${height}px` : '44px'};
font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '14px'};
width: ${({ width }) => width ? `${width}px` : '100%'};
outline:none;
border:1px solid #e6e9ec;

`

export { Container }