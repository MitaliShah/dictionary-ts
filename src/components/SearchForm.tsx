import searchlogo from "../../public/assets/images/icon-search.svg";
import styled from "styled-components";
import { useState } from "react";

type SearchFormProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({
  searchTerm,
  setSearchTerm,
}: SearchFormProps) {
  const [interacted, setInteracted] = useState<boolean>(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Wrapper>
          <Input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setInteracted(true);
            }}
            placeholder="Search for any word"
            required
            minLength={3}
          />
          <Img src={searchlogo} alt="" />
        </Wrapper>
      </form>
      <p>{interacted && !searchTerm && `Whoops, can’t be empty…`}</p>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
  color: var(--charcoal-gray);
  background-color: var(--white);
  border-radius: 10px;
`;

const Input = styled.input`
  background: var(--light-gray);
  border: none;
  width: 100%;
  padding: 15px 24px;
  padding-right: 0px;
  color: var(--charcoal-gray);
  outline: none;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`;

const Img = styled.img`
  background: var(--light-gray);
  padding-right: 24px;
  border-radius: 0 10px 10px 0;
`;