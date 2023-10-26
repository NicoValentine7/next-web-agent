"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const RootProviders: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {/** CSS Reset https://mui.com/material-ui/react-css-baseline/ */}
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
