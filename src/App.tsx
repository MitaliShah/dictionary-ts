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
        <ErrorWrapper>
          <ErrorEmojie>{<img src={sadSmiley} alt="" />}</ErrorEmojie>
          <Error>{error}</Error>
          <ErrorDesc>{notFoundDescription}</ErrorDesc>
        </ErrorWrapper>
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

  @media (min-width: 689px) {
    max-width: 689px;
    width: 689px;
  }

  @media (min-width: 920px) {
    max-width: 920px;
    width: 920px;
  }
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;

const ErrorEmojie = styled.span`
  margin-top: 132px;
  margin-bottom: 44px;
`;

const Error = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const ErrorDesc = styled.p`
  color: var(--slate-gray);
  margin-top: 24px;
`;