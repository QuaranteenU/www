import React from "react";
import styled, { withTheme } from "styled-components";

const StyledFooter = withTheme(styled.footer`
  background: ${props => props.theme.palette.mainBrand};
  color: white;
  padding: 15px;
  text-align: center;
`);

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} can you even copyright a meme lol
  </StyledFooter>
);

export default Footer;
