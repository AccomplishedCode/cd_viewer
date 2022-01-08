import PropTypes from "prop-types";
import styled from "styled-components";

import GlobalStyles from "../theme/GlobalStyles";

import NavMenu from "./NavMenu";
import Header from "./Header";

const MainStyles = styled.main`
  padding: 4rem 5rem;

  & > *:first-child {
    margin-bottom: 5rem;
  }
`;

// The purpose of this component is to add the content that will be used as a template for all of the pages (e.g. nav, footer, etc.). Each individual page's content
// will go in the {children} variable
export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <NavMenu />
      <MainStyles>
        <Header />
        {children}
      </MainStyles>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
