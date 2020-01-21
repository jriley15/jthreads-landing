import React from "react"
import { useSelector, useDispatch } from "react-redux"
import jwt_decode from "jwt-decode"

const useAuth = () => {
  const authState = useSelector(state => state.authState)
  const dispatch = useDispatch()

  const login = token => {
    dispatch({ type: "LOGIN", token: token, payload: jwt_decode(token) })
    localStorage.setItem("token", token)
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("token")
  }

  return {
    login: login,
    isAuthenticated: authState.isAuthenticated,
    logout: logout,
    token: authState.token,
  }
}

export default useAuth
