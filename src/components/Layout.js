import React from "react"
import Navbar from "./Navbar"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <div className={classes.content}>{children}</div>
    </div>
  )
}
