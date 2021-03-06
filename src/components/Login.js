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
import { List, ListItem, Typography, CircularProgress } from "@material-ui/core"
import * as Yup from "yup"
import useAuth from "../hooks/useAuth"
import config from "../util/config"

export default function Login({ open, setOpen }) {
  const { post } = useApi()
  const { login } = useAuth()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (data, { setSubmitting, resetForm, setErrors }) => {
          setSubmitting(true)
          let response = await post("/Auth/Login", data)
          if (response.success) {
            //resetForm()
            //setOpen(false)
            login(response.data.token)
            window.location.replace(config.dashboard)
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
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              maxWidth="xs"
              fullWidth
            >
              <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
              <DialogContent>
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
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>

                <Button
                  onClick={handleSubmit}
                  type="submit"
                  color="primary"
                  variant="outlined"
                >
                  {isSubmitting ? <CircularProgress size={20} /> : "Submit"}
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        )}
      </Formik>
    </div>
  )
}
