import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";


export const ColorModeContext = createContext({
    mode: "light", // Valeur par défaut du mode
    toggleColorMode: () => {},
  });

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                text: {
                    primary: "#2B3445",
                },

                myColor: {
                    main: "#F6F9FC"
                },

                background: {
                    main: "#F6F6F6"
                },

                neutral: {
                    main: "#64748B",
                },

                favColor: {
                    main: grey[300],
                },
            }
            : {
                // palette values for dark mode
                text: {
                    primary: "#fff",
                },

                myColor: {
                    main: "#252b32"
                },

                background: {
                    main: "#26353A",
                },

                neutral: {
                    main: "#64748B",
                },

                favColor: {
                    main: grey[800],
                },
            }),
    },
});



export const useMode = () => {
    const [mode, setMode] = useState(
      localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
    );
  
    const colorMode = useMemo(
      () => ({
        mode,
        toggleColorMode: () => {
          const newMode = mode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          setMode(newMode);
        },
      }),
      [mode]
    );
  
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
    return [theme, colorMode];
  };