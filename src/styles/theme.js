const colorPalette = {
  mainBrand: "#2f8dff",
  lightAccent: "#8b8e95",
  lightShades: "#fff",
  darkAccent: "#858189",
  darkShades: "#201e20",

  success: "#5f9951",
  warning: "#dd8819",
  error: "#f44336",
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