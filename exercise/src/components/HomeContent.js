import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class HomeContent extends Component {
  render() {
    const {loggedIn, onLogIn} = this.props;
    return (
      <div>                
        <Button onClick={onLogIn}>
        {
          loggedIn
          ? "Logout"
          : "Login"
        }
        </Button>                
      </div>
    );
  }  
}

HomeContent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogIn: PropTypes.func.isRequired
}

export default HomeContent;