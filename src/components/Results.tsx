import { ExtractedData } from '../type';
import styled from "styled-components";

interface ResultsProps {
    data: ExtractedData | null
}

  export default function Results({data}: ResultsProps): JSX.Element {
    if (!data) {
        return <p>No data available</p>;
      }
      const { word, phonetics, firstMeaning,secondMeaning , synonyms, sourceUrls } = data;
   
    return(
        <>
        <h1 style={{color: "red"}}>Word is<Wrap>{word}</Wrap></h1>
        
        </>
    )
}

const Wrap = styled.div`
    color: orange;
`;