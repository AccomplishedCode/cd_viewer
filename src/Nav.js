import styled from "styled-components";

const NavStyles = styled.nav`
  background: black;
  box-shadow: 0 0.625rem 2.5rem -0.4375rem rgba(0, 0, 0, 0.5);
  color: white;

  display: flex;
  align-items: center;
  position: sticky;
  z-index: 10000;

  width: 100%;
  height: 1rem;
  padding: 1rem;

  & p:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <p>File</p>
      <p>Edit</p>
      <p>View</p>
    </NavStyles>
  );
}
