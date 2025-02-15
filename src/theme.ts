/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

const colors = {
  background: {
    "1": "#0F2027",
    "2": "#203A43",
    "3": "#2C5364",
  },
  gray: {
    lightest: "#F2F2F2",
    light: "#D9D9D9",
    base: "#BFBFBF",
    dark: "#A6A6A6",
  },
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "32px",
  "2xl": "40px",
};

const theme = extendTheme({
  colors,
  fonts: {
    inter: "var(--font-inter)",
  },
  fontSizes,
});

export default theme;
