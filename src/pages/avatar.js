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

  container: {
    minHeight: "calc(100vh - " + theme.spacing(4) + "px)",
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
                  Form
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
