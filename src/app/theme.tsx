import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    colors: {
    primary: {
      dark: "#003100",
      light: "#e6f6e6",
    },
    secondary: "#CDCDCD",
    background: {
        dark: "#111111",
        light: "#F4F4F4"
            
    },
    text: {
      dark: "#FFFFFF",
      light: "#000000"
     },
    icon: {
      dark: "#FFFFFF",
      light: "#000000"
    },

  },
});
export default theme;