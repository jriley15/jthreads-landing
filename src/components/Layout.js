import React, { useEffect } from "react"
import Navbar from "./Navbar"
import { makeStyles } from "@material-ui/styles"
import { CookiesProvider } from "react-cookie"

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div>
      <CookiesProvider>
        <Navbar />
        <div className={classes.content}>{children}</div>
      </CookiesProvider>
    </div>
  )
}
