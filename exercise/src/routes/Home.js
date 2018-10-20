import React, { Component } from 'react';

import HomeContent from '../components/HomeContent';
import TemplatePage from '../components/TemplatePage';

export default class Home extends Component {

  render() {
    const loggedIn = (this.props.location.state
      && this.props.location.state.loggedIn) || false;
    return (      
      <TemplatePage loggedIn={loggedIn}>
        <HomeContent/>
      </TemplatePage>
    );
  }
}

