import React, { useState } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import RoundedButton from "./shared/RoundedButton"
import PrimaryButton from "./shared/PrimaryButton"
import Register from "./Register"

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

  const [open, setOpen] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            JThreads
          </Typography>
          <RoundedButton className={classes.navButton}>About</RoundedButton>
          <RoundedButton
            className={classes.navButton}
            onClick={() => {
              setOpen(true)
            }}
          >
            Sign up
          </RoundedButton>
          <PrimaryButton className={classes.navButton}>Sign in</PrimaryButton>
        </Toolbar>
      </AppBar>

      <Register open={open} setOpen={setOpen} />
    </div>
  )
}
