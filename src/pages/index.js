import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import { makeStyles, Box, Typography, Grid } from "@material-ui/core"
import PrimaryButton from "../components/shared/PrimaryButton"
import RoundedButton from "../components/shared/RoundedButton"
import SecondaryButton from "../components/shared/SecondaryButton"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(15),
  },
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
    <Layout location={location}>
      <SEO title="Home" />
      <div className={classes.root}>
        <Box display="flex" justifyContent="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={6}>
              <Typography variant="h4" className={classes.heading} gutterBottom>
                Content engagement made easy
              </Typography>
              <Typography color="textSecondary" className={classes.description}>
                Plug & play with comments, ratings, and more from our platform
                and avoid the hassle of managing feedback on your content. Get
                started in minutes!
              </Typography>

              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton className={classes.button}>
                About
              </SecondaryButton>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                <img
                  className={classes.mainImage}
                  src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/post_online_dkuk.svg"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Layout>
  )
}

export default IndexPage
