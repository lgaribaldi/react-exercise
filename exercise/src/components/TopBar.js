import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

class TopBar extends Component {
  
  render() {
    const {loggedIn, onLogIn} = this.props;

    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="../favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20}}>          
          {
            loggedIn
            ? <div>
                <Button style={{borderRadius: '50%', width: '40px'}} onClick={onLogIn}>LGA</Button>
                <Button style={{backgroundColor: 'red', color: 'white'}} onClick={onLogIn}>Logout</Button>
              </div>
            : <div>
                <Button style={{backgroundColor: 'blue', color: 'white'}} onClick={onLogIn}>Login</Button>
                <Button style={{backgroundColor: 'red', color: 'white'}}>Signup</Button>
              </div>
          }                  
        </div>
      </header>
    );
  } 
};

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

TopBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogIn: PropTypes.func.isRequired
}

export default TopBar;
