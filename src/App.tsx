import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import useDictionary from "./hooks/useDictionary";
import Results from "./components/Results";
import sadSmiley from "../public/assets/images/sad-smiley.png";
import { useState } from "react";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, isLoading } = useDictionary({ searchTerm });
  const notFoundDescription = `Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.`;

  return (
    <Main>
      <Header />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <div>
          <h2>{<img src={sadSmiley} alt="" />}</h2>
          <p>{error}</p>
          <p>{notFoundDescription}</p>
        </div>
      )}
      {!isLoading && !error && <Results data={data} />}
      <GlobalStyles />
    </Main>
  );
}

export default App;

const Main = styled.main`
  max-width: 23.438rem;
  width: 326px;
  margin: 0 auto;
  margin-top: 24px;

  @media (min-width: 920px) {
    max-width: 920px;
    width: 920px;
  }
`;
