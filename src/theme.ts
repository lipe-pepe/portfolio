/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

const colors = {
  background: {
    "1": "#141E30",
    "2": "#243B55",
  },
  white: {
    base: "#FFFFFF",
    dark: "rgba(255,255,255,0.6)",
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
