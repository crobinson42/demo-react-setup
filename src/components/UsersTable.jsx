import React from 'react';
// import PropTypes from 'prop-types'

const UsersTable = ({ users }) => (
  <table>
    {users.map(({ name, email }) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      )
    })}
  </table>
);

UsersTable.propTypes = {};
UsersTable.defaultProps = {};

export default UsersTable;
