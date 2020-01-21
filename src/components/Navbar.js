import React, { useState } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import RoundedButton from "./shared/RoundedButton"
import PrimaryButton from "./shared/PrimaryButton"
import Register from "./Register"
import Login from "./Login"
import useAuth from "../hooks/useAuth"
import config from "../util/config"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
}))

export default function Navbar() {
  const classes = useStyles()

  const { isAuthenticated, logout } = useAuth()
  const [registerOpen, setRegisterOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            JThreads
          </Typography>
          <RoundedButton className={classes.navButton}>About</RoundedButton>
          {isAuthenticated ? (
            <>
              <RoundedButton
                className={classes.navButton}
                onClick={() => {
                  logout()
                }}
              >
                Sign out
              </RoundedButton>
              <PrimaryButton
                className={classes.navButton}
                component="a"
                href={config.dashboard}
              >
                Dashboard
              </PrimaryButton>
            </>
          ) : (
            <>
              <RoundedButton
                className={classes.navButton}
                onClick={() => {
                  setRegisterOpen(true)
                }}
              >
                Sign up
              </RoundedButton>
              <PrimaryButton
                className={classes.navButton}
                onClick={() => {
                  setLoginOpen(true)
                }}
              >
                Sign in
              </PrimaryButton>
            </>
          )}
        </Toolbar>
      </AppBar>

      {registerOpen && (
        <Register open={registerOpen} setOpen={setRegisterOpen} />
      )}
      {loginOpen && <Login open={loginOpen} setOpen={setLoginOpen} />}
    </div>
  )
}
