import styled from "styled-components";

import SearchIcon from "./Icons/SearchIcon";

const SearchStyles = styled.form`
  position: relative;

  min-width: 10rem;
  width: 25rem;

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--greyWhite);
    color: var(--greyWhite);
    font-family: inherit;

    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2rem;

    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    top: 0.25rem;
    left: 0;
  }
`;

export default function Search() {
  return (
    <SearchStyles>
      <input type="text" />
      <SearchIcon />
    </SearchStyles>
  );
}
