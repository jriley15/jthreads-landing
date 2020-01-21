import React from "react"
import clsx from "clsx"
import Button from "@material-ui/core/Button"
import { withStyles, WithStyles } from "@material-ui/core/styles"

const styles = {
  root: {
    borderRadius: 25,
    padding: "7px 16px",
    color: "black",
    "&:hover": {
      //background: "rgba(111, 65, 248, 0.2);",
    },
  },
}

const RoundedButton = props => {
  const { classes, children, className, ...other } = props

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || "class names"}
    </Button>
  )
}

export default withStyles(styles)(RoundedButton)
