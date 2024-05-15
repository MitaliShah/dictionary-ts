import GlobalStyles from './GlobalStyles'
import styled from 'styled-components';
import Header from './components/Header';


function App() {
  
  return (
    <Main>      
      <Header />     
      <GlobalStyles />
    </Main>
  )
}

export default App

const Main = styled.main`
    max-width: 23.438rem;
    margin: 0 auto;
    
    @media (min-width: 920px) {    
      max-width: 920px;
      width: 920px;
  }
`;