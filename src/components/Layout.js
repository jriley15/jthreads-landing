import React, { useEffect } from "react"
import Navbar from "./Navbar"
import { makeStyles } from "@material-ui/styles"
import useAuth from "../hooks/useAuth"

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()

  const { login } = useAuth()

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) login(token)
    return () => {}
  }, [])

  return (
    <div>
      <Navbar />
      <div className={classes.content}>{children}</div>
    </div>
  )
}
