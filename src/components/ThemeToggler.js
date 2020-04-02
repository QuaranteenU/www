import React, { useContext } from "react";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";

const ThemeToggler = () => {
  const themeContext = useContext(ThemeManagerContext)

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => themeContext.toggleDark()}
        checked={themeContext.isDark}
      />{" "}
      Dark mode
    </label>
  );
}

export default ThemeToggler;