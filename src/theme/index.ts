import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    mainBg: string;
    mainShadow: string;
    redPigment: string;
    bulmaHair: string;
    bellflowerBlue: string;
    gramsHair: string;
    wePeep: string;
    border: string;
  }
}

// Custom colors. Names generated by https://colornamer.robertcooper.me/
const MAIN_SHADOW = "0px 20px 25px 0px #4C67641A";
const BLACK = "#000";
const WHITE = "#fff";
const RED_PIGMENT = "#ed1c24";
const BULMA_HAIR = "#38a169";
const BELLFLOWER_BLUE = "#e2e8f0";
const GRAMS_HAIR = "#f4f5f7";
const WE_PEEP = "#fed7d7";
const BORDER = "1px solid #E2E8F0";

const theme = createTheme({
  palette: {
    primary: { main: RED_PIGMENT },
    common: {
      mainBg: GRAMS_HAIR,
      mainShadow: MAIN_SHADOW,
      black: BLACK,
      white: WHITE,
      redPigment: RED_PIGMENT,
      bulmaHair: BULMA_HAIR,
      bellflowerBlue: BELLFLOWER_BLUE,
      gramsHair: GRAMS_HAIR,
      wePeep: WE_PEEP,
      border: BORDER,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 700,
          textTransform: "capitalize",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
