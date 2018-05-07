import React, { Component } from 'react';
import { connect } from 'react-redux'

import UsersTable from 'components/UsersTable';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        // passing users from state down to the view component
        <UsersTable users={this.props.users} />
      </div>
    );
  }
}

const mapState = state => ({
  users: state.users,
});

export default connect(mapState)(Dashboard);
