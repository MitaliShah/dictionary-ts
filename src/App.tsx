import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { useState } from "react";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Main>
      <Header />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <GlobalStyles />
    </Main>
  );
}

export default App;

const Main = styled.main`
  max-width: 23.438rem;
  width: 326px;
  margin: 0 auto;

  @media (min-width: 920px) {
    max-width: 920px;
    width: 920px;
  }
`;
