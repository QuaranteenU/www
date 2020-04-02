import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #2f8dff;
  color: white;
  padding: 15px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} can you even copyright a meme lol
  </StyledFooter>
);

export default Footer;
