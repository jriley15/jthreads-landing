import React, { useEffect } from "react"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

// A custom theme for this app
let theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#6f41f8",
    },
  },
})

theme = responsiveFontSizes(theme)

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider
