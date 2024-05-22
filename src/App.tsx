import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import useDictionary from "./hooks/useDictionary";
import Results from "./components/Results";
import { useState } from "react";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, isLoading } = useDictionary({ searchTerm });

  return (    
      <Main>
      <Header />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {isLoading && <h1>Loading...</h1>}
        {error && <h2>error...</h2>}
        {!isLoading && !error && (
        <Results data={data} />
      )}
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
