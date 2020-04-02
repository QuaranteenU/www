const colorPalette = {
  lightShades: "#fff",
  lightAccent: "139, 142, 149",
  mainBrand: "#2f8dff",
  darkAccent: "133, 129, 137",
  darkShades: "32, 30, 32",

  success: "95, 153, 81",
  warning: "221, 136, 25",
  error: "244, 67, 54",
}

const baseTheme = {
  actions: {
    error: colorPalette.error,
    info: colorPalette.darkShades,
    primary: colorPalette.mainBrand,
    success: colorPalette.success,
    warning: colorPalette.warning,
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    mainBrand: colorPalette.mainBrand,
  },
}

module.exports = {
  darkTheme: {
    ...baseTheme,
    global: {
      bg: colorPalette.darkShades,
      color: colorPalette.lightShades,
      link: colorPalette.mainBrand,
      linkHover: colorPalette.lightAccent,
    },
  },
  lightTheme: {
    ...baseTheme,
    global: {
      bg: colorPalette.lightShades,
      color: colorPalette.darkShades,
      link: colorPalette.mainBrand,
      linkHover: colorPalette.darkAccent,
    },
  }
}