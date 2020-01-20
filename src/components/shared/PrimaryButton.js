import React from "react"
import clsx from "clsx"
import Button from "@material-ui/core/Button"
import { withStyles, WithStyles } from "@material-ui/core/styles"

const styles = {
  root: {
    background: "linear-gradient(to right, #4d5af5 0%, #6f41f8 100%)",
    borderRadius: 25,
    padding: "7px 16px",
    color: "white",
    "&:hover": {
      boxShadow: "0 3px 5px 2px rgba(111, 65, 248, .3)",
    },
  },
}

function PrimaryButton(props) {
  const { classes, children, className, ...other } = props

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || "class names"}
    </Button>
  )
}

export default withStyles(styles)(PrimaryButton)
