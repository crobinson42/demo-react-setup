import React from 'react'
// import PropTypes from 'prop-types'

import { Route, Switch } from 'react-router-dom'

import Billing from './billing'
import Settings from './index'

const SettingsRoutes = () => (
  <Switch>
    <Route exact path="/settings" component={Settings} />
    <Route path="/settings/billing" component={Billing} />
  </Switch>
)

SettingsRoutes.propTypes = {}
SettingsRoutes.defaultProps = {}

export default SettingsRoutes
