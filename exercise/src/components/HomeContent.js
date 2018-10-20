import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {withRouter} from 'react-router';

class HomeContent extends Component {  
  
  render() {
    const {loggedIn, onLogIn, history} = this.props;
    const usersLocation = {
      pathname: '/users',
      state: { 
        loggedIn        
      }
    }
    return (
      <div>                
        <Button onClick={onLogIn}>
        {
          loggedIn
          ? "Logout"
          : "Login"
        }
        </Button>
        <Button onClick={() => { history.push(usersLocation)}}>
          Users
        </Button>
      </div>
    );
  }  
}

HomeContent.propTypes = {
  loggedIn: PropTypes.bool,
  onLogIn: PropTypes.func
}

export default withRouter(HomeContent);