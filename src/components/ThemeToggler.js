import React, { useContext } from "react";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import styled from "styled-components";

const Toggle = styled.span`
  cursor: pointer;
  width: 2.22rem;
  height: 2.22rem;
  overflow: hidden;
  position: relative;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  position: absolute;
  transition: margin-top 0.3s;
  margin-top: ${props => (props.isDark ? -0.1 : -2.3)}rem;
`;

const ThemeToggler = () => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <Toggle onClick={() => themeContext.toggleDark()}>
      <IconWrapper isDark={themeContext.isDark}>
        <span role="img" aria-label="Dark Mode">
          🌙
        </span>
        <span role="img" aria-label="Light Mode">
          ☀
        </span>
      </IconWrapper>
    </Toggle>
  );
};

export default ThemeToggler;
