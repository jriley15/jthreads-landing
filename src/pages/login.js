import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Formik } from "formik"
import useApi from "../hooks/useApi"
import {
  List,
  ListItem,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@material-ui/core"
import * as Yup from "yup"
import useAuth from "../hooks/useAuth"
import config from "../util/config"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    //marginTop: theme.spacing(15),
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
  item: {
    maxWidth: 500,
  },
  container: {
    minHeight: "calc(100vh - " + theme.spacing(4) + "px)",
  },
  loginButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  createLink: {
    textDecoration: "none",
  },
}))

const IndexPage = ({ location }) => {
  const classes = useStyles()
  const { post } = useApi()
  const { login } = useAuth()

  return (
    <Layout location={location} hideNav>
      <SEO title="Login" />
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item className={classes.item}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (
                data,
                { setSubmitting, resetForm, setErrors }
              ) => {
                setSubmitting(true)
                let response = await post("/Auth/Login", data)
                if (response.success) {
                  //resetForm()
                  //setOpen(false)
                  login(response.data.token)
                  //window.location.replace(config.dashboard)
                  window.opener.postMessage(
                    { token: response.data.token },
                    config.embed
                  )
                  window.close()
                } else {
                  setErrors(response.errors)
                }
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email()
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
            >
              {({
                values,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                errors,
              }) => (
                <form onSubmit={handleSubmit} onBlur={handleBlur}>
                  {errors["*"] && (
                    <div style={{ paddingBottom: 8 }}>
                      {errors["*"].map((error, index) => (
                        <Typography
                          key={index}
                          color="error"
                          variant="body2"
                          component="p"
                        >
                          {error}
                        </Typography>
                      ))}
                    </div>
                  )}
                  <Typography
                    variant="h6"
                    align="center"
                    className={classes.title}
                  >
                    JThreads
                  </Typography>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    variant="outlined"
                    name="email"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={errors.email && touched.email ? errors.email : false}
                    helperText={touched.email && errors.email}
                    disabled={isSubmitting}
                  />
                  <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : false
                    }
                    helperText={touched.password && errors.password}
                    disabled={isSubmitting}
                    onKeyPress={ev => {
                      if (ev.key === "Enter") {
                        handleSubmit()
                        ev.preventDefault()
                      }
                    }}
                  />

                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={classes.loginButton}
                    fullWidth
                  >
                    {isSubmitting ? (
                      <CircularProgress size={20} style={{ color: "white" }} />
                    ) : (
                      "Log in"
                    )}
                  </Button>
                  <Box display="flex" justifyContent="center">
                    <Typography
                      align="center"
                      component={Link}
                      to="/?register=true"
                      className={classes.createLink}
                    >
                      Create Account
                    </Typography>
                  </Box>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
