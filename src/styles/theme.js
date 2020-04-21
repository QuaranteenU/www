const colorPalette = {
  mainBrand: "#2f8dff",

  lightAccent: "#8b8e95",
  lightShades: "#fff",
  lightMuted: "#6c757d",

  darkAccent: "#004599",
  darkShades: "#201e20",
  darkMuted: "#96a2ad",

  success: "#5f9951",
  warning: "#dd8819",
  error: "#f44336",
};

const baseTheme = {
  actions: {
    error: colorPalette.error,
    info: colorPalette.darkShades,
    primary: colorPalette.mainBrand,
    success: colorPalette.success,
    warning: colorPalette.warning,
  },
  palette: {
    mainBrand: colorPalette.mainBrand,

    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,

    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
  },
};

module.exports = {
  darkTheme: {
    ...baseTheme,
    palette: {
      mainBrand: colorPalette.darkAccent,
    },
    global: {
      bg: colorPalette.darkShades,
      color: colorPalette.lightShades,
      link: colorPalette.mainBrand,
      linkHover: colorPalette.lightAccent,
      muted: colorPalette.darkMuted,
      logoTint: "rgba(0,0,0,0.4)",
    },
  },
  lightTheme: {
    ...baseTheme,
    global: {
      bg: colorPalette.lightShades,
      color: colorPalette.darkShades,
      link: colorPalette.mainBrand,
      linkHover: colorPalette.darkAccent,
      muted: colorPalette.lightMuted,
      logoTint: "rgba(0,0,0,0)",
    },
  },
};
