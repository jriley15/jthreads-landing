import React from "react"
import clsx from "clsx"
import Button from "@material-ui/core/Button"
import { withStyles, WithStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

const styles = {
  root: {
    background: grey[200],
    borderRadius: 25,
    padding: "7px 16px",
    color: "black",
    "&:hover": {
      //boxShadow: "0 3px 5px 2px rgba(111, 65, 248, .3)",
      background: grey[300],
    },
  },
}

function SecondaryButton(props) {
  const { classes, children, className, ...other } = props

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || "class names"}
    </Button>
  )
}

export default withStyles(styles)(SecondaryButton)
