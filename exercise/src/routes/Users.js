import React, { Component } from 'react';

import UserList from '../components/UserList';
import TemplatePage from '../components/TemplatePage';

export default class Users extends Component {
  render() {
    return (
      <TemplatePage>
        <UserList/>
      </TemplatePage>
    );
  }
}

