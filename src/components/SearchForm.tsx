import searchlogo from "../../public/assets/images/icon-search.svg";
import styled from "styled-components";

type SearchFormProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({
  searchTerm,
  setSearchTerm,
}: SearchFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Wrapper>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for any word"
          required
        />
        <Img src={searchlogo} alt="" />
      </Wrapper>
    </form>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  background: var(--light-gray);
  border: none;
  width: 100%;
`;

const Img = styled.img`
  background: var(--light-gray);
`;
