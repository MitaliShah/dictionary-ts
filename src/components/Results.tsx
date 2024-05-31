import { ExtractedData } from "../type";
import styled from "styled-components";
import play from "../../public/assets/images/icon-play.svg";
import { findTextAndAudio } from "../utils/utils";
import { useRef } from "react";

interface ResultsProps {
  data: ExtractedData | null;
}

export default function Results({ data }: ResultsProps): JSX.Element {
  const audioRef = useRef<HTMLAudioElement>(null);

  if (!data) {
    return <p></p>;
  }
  const { word, phonetics, firstMeaning, secondMeaning, synonyms, sourceUrls } =
    data;
  const { text, audio } = findTextAndAudio(phonetics);

  const { partOfSpeech: noun, definitions: noundefinitions } = firstMeaning || {
    partOfSpeech: "",
    definitions: [],
  };
  const { partOfSpeech: verb, definitions: verbdefinitions } =
    secondMeaning || { partOfSpeech: "", definitions: [] };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const definitionNoun = noundefinitions.map((def, i) => (
    <ListItem key={i}>{def.definition}</ListItem>
  ));
  const definitionVerb = verbdefinitions.map((def, i) => (
    <ListItem key={i}>{def.definition}</ListItem>
  ));
  const definitionVerbExample = verbdefinitions.map((def, i) => (
    <p key={i}>{def.example}</p>
  ));

  return (
    <div>
      <TextAudio>
        <div>
          {word && <Heading>{word}</Heading>}
          {text && <PhoneticText>{text}</PhoneticText>}
        </div>
        <div>
          <audio ref={audioRef} src={audio ?? undefined} />
          <Img src={play} onClick={playAudio}></Img>
        </div>
      </TextAudio>
      <div>
        <div>
          {definitionNoun.length > 0 && (
            <>
              <WrapNoun>
                <NounVerb>{noun}</NounVerb>
              </WrapNoun>
              <MeaningTitle>Meaning</MeaningTitle>
              <WrapperDefinition>{definitionNoun}</WrapperDefinition>
            </>
          )}
          <div>
            <SynonymsText>
              <Synonyms>{synonyms[0] && `Synonyms `}</Synonyms>
              {synonyms[0]}
            </SynonymsText>
          </div>
        </div>
        <div>
          {definitionVerb.length > 0 && (
            <>
              <WrapNoun>
                <NounVerb>{verb}</NounVerb>
              </WrapNoun>
              <MeaningTitle>Meaning</MeaningTitle>
              <WrapperDefinition>{definitionVerb}</WrapperDefinition>
              <VerbExample>{definitionVerbExample}</VerbExample>
            </>
          )}
        </div>
      </div>
      <HorizontalLine></HorizontalLine>
      <SourceWrapper>
        <SourceText href={sourceUrls[0]}>Source</SourceText>
        <p>{sourceUrls[0]}</p>
      </SourceWrapper>
    </div>
  );
}

const TextAudio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;

  @media (min-width: 689px) {
    font-size: 64px;
  }

  @media (min-width: 920px) {
    font-size: 64px;
    line-height: 1.2;
  }
`;

const PhoneticText = styled.span`
  color: var(--violet);
  font-size: 18px;
  line-height: 1.3;
  margin-top: 9px;
`;

const Img = styled.img`
  width: 48px;

  @media (min-width: 689px) {
    width: 75px;
  }

  /* @media (min-width: 920px) {
    width: 75px;
  } */
`;

const WrapNoun = styled.div`
  width: 100%;
  white-space: nowrap;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const NounVerb = styled.span`
  font-size: 18px;
  font-weight: bold;

  &::after {
    content: " ";
    width: 266px;
    display: inline-block;
    border-bottom: 1px solid var(--pale-gray);
    margin-left: 25px;
    vertical-align: middle;
  }

  @media (min-width: 689px) {
    
    &::after {
      width: 608px;    
    }
  }

  @media (min-width: 920px) {
    &::after {
      width: 855px;
    }
  }
`;

const MeaningTitle = styled.h3`
  color: var(--slate-gray);
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 16px;
`;

const WrapperDefinition = styled.ul`
  list-style-type: disc;
  padding-left: 0;
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 15px;
  &:not(:last-child) {
    margin-bottom: 13px;
  }
  &::marker {
    color: var(--violet);
  }

  @media (min-width: 689px) {
    font-size: 18px;
  }
`;

const Synonyms = styled.span`
  font-size: 16px;
  color: var(--slate-gray);
  font-weight: normal;
`;

const SynonymsText = styled.p`
  color: var(--violet);
  font-size: 16px;
  font-weight: bold;
  margin-top: 24px;

  @media (min-width: 689px) {
    font-size: 20px;
  }
`;

const VerbExample = styled.div`
  margin-left: 20px;
  color: var(--slate-gray);
  quotes: initial;
`;

const HorizontalLine = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 13px; /* Adjust margin as needed */
  margin-top: 32px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid var(--pale-gray);
  }
`;

const SourceWrapper = styled.div`
  margin-top: 48px;

  @media (min-width: 689px) {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

const SourceText = styled.a`
  color: var(--slate-gray);
  font-size: 14px;
  line-height: 1.2;
`;
