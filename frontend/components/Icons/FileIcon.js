import styled from "styled-components";

const FileIconStyles = styled.div`
  border: 2px solid var(--greyWhite);
  border-radius: 0.3125rem;
  background: ${({ isActive }) =>
    isActive ? "var(--greyWhite)" : "transparent"};

  position: relative;

  width: 5.5rem;
  height: 4rem;

  &::after {
    content: "";
    border-radius: 0.3125rem;
    background: var(--greyWhite);

    position: absolute;
    bottom: -0.5rem;
    left: 0;

    width: 100%;
    height: 2px;
  }
`;

export default function FileIcon({ isActive }) {
  return <FileIconStyles isActive={isActive} />;
}
