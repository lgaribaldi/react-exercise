import React, { Component } from 'react';

import UserList from '../components/UserList';
import TemplatePage from '../components/TemplatePage';

export default class Users extends Component {  
  render() {
    const loggedIn = (this.props.location.state
      && this.props.location.state.loggedIn) || false;
    return (
      <TemplatePage loggedIn={loggedIn}>
        <UserList loggedIn={loggedIn}/>
      </TemplatePage>
    );
  }
}

