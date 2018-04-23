import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink, Route, Switch } from 'react-router-dom'

import SettingsRoutes from './settings/routes'
import IndexScene from './index'

const Routes = () => (
  <div>
    <div>
      Header
      <div>
        <NavLink to="/">Home</NavLink>
        {' '}
        <NavLink to="/settings">Settings</NavLink>
        {' '}
        <NavLink to="/settings/billing">Billing</NavLink>

      </div>
    </div>

    <Switch>
      <Route exact path="/" component={IndexScene} />
      <Route path="/settings" component={SettingsRoutes} />
    </Switch>
  </div>
)

Routes.propTypes = {}
Routes.defaultProps = {}

export default Routes
