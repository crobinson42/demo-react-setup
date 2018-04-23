import React from 'react'
// import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'scenes/routes'

const Router = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

Router.propTypes = {}
Router.defaultProps = {}

export default Router
