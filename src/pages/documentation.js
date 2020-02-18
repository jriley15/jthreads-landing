import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import DocsLayout from "../components/DocsLayout"
import { makeStyles, Box, Typography, Grid } from "@material-ui/core"
import PrimaryButton from "../components/shared/PrimaryButton"
import RoundedButton from "../components/shared/RoundedButton"
import SecondaryButton from "../components/shared/SecondaryButton"

const useStyles = makeStyles(theme => ({
  root: {},
  mainImage: {
    width: "300px",
    maxWidth: "100%",
  },
  heading: {
    marginTop: theme.spacing(5),
    fontWeight: 600,
    //marginBottom: theme.spacing(3)
  },
  description: {
    marginBottom: theme.spacing(3),
  },
  grid: {
    maxWidth: 700,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}))

const IndexPage = ({ location }) => {
  const classes = useStyles()
  return (
    <DocsLayout location={location}>
      <SEO title="Home" />
      <div className={classes.root}>Docs</div>
    </DocsLayout>
  )
}

export default IndexPage
