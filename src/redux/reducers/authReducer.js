const initialState = {
  isAuthenticated: false,
  token: "",
  user: {},
}

const authReducer = (state, action) => {
  state = state || initialState

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        token: action.token,
      }

    case "LOGOUT":
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default authReducer
