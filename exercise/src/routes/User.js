import React, { Component } from 'react';

import UserDetail from '../components/UserDetail';
import TemplatePage from '../components/TemplatePage';

export default class User extends Component {  
  render() {
    const {selectedUser, loggedIn} = this.props.location.state;    
    return (
      <TemplatePage loggedIn={loggedIn}>
        <UserDetail user={selectedUser}/>
      </TemplatePage>
    );
  }
}

