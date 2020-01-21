/* eslint-disable import/prefer-default-export, react/prop-types */

import React from "react"
import Provider from "./Provider"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
