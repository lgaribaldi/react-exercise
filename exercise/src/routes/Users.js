import React, { Component } from 'react';

import HomeContent from '../components/HomeContent';
import TemplatePage from '../components/TemplatePage';

export default class Users extends Component {
  render() {
    return (
      <TemplatePage>
        <HomeContent/>
      </TemplatePage>
    );
  }
}

