import { useState } from "react";
import styled from "styled-components";

import Search from "../components/Search";

const HeaderStyles = styled.section`
  display: flex;
  align-items: flex-end;
  column-gap: 2.5rem;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Search />
    </HeaderStyles>
  );
}
