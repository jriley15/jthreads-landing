import React, { useEffect } from "react"
import Navbar from "./Navbar"
import { makeStyles } from "@material-ui/styles"
import { CookiesProvider } from "react-cookie"

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
}))

export default function Layout({ children, location, hideNav, registerPage }) {
  const classes = useStyles()

  return (
    <div>
      <CookiesProvider>
        {!hideNav && <Navbar location={location} registerPage={registerPage} />}
        <div className={classes.content}>{children}</div>
      </CookiesProvider>
    </div>
  )
}
