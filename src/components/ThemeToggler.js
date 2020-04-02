import React, { useContext } from "react";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import styled from "styled-components";

const Toggle = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
`;

const ThemeToggler = () => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <Toggle onClick={() => themeContext.toggleDark()}>
      {themeContext.isDark ? <span role="img" aria-label="Dark Mode">🌙</span> : <span role="img" aria-label="Light Mode">☀</span>}
    </Toggle>
  );
}

export default ThemeToggler;