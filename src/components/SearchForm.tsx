import searchlogo from "../../public/assets/images/icon-search.svg";
import styled, { css } from "styled-components";
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
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Wrapper $isfocused={isFocused} $showError={interacted && !searchTerm}>
          <Input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setInteracted(true);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for any word"
            required
            minLength={3}
          />
          <Img src={searchlogo} alt="" />
        </Wrapper>
      </form>
      {interacted && !searchTerm && (
        <p style={{ color: `var(--orange)` }}>Whoops, can’t be empty…</p>
      )}
    </>
  );
}

const Wrapper = styled.div<{ $isfocused: boolean; $showError: boolean }>`
  display: flex;
  margin-top: 24px;
  color: var(--charcoal-gray);
  background-color: var(--white);
  border-radius: 10px;

  ${({ $isfocused }) =>
    $isfocused &&
    css`
      border: 1px solid var(--violet);
    `}

  ${({ $showError }) =>
    $showError &&
    css`
      border: 1px solid var(--orange);
    `}
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
