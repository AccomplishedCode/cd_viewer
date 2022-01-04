import PropTypes from "prop-types";

import GlobalStyles from "../theme/GlobalStyles";

import NavMenu from "./NavMenu";

// The purpose of this component is to add the content that will be used as a template for all of the pages (e.g. nav, footer, etc.). Each individual page's content
// will go in the {children} variable
export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <NavMenu />
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};