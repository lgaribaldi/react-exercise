import React, {Component} from 'react';
import Button from './Button';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

const styles = {  
  list : {
    backgroundColor: 'white',    
    textAlign: 'center',    
    paddingTop: '16px'
  },
  item : {
    paddingTop: '8px',
    paddingBottom: '8px'
  }
};

class UserDetail extends Component {  

  render() {        
    const {user} = this.props;    
    return (
      <div style={styles.list}>
        <img src={user.picture.large} alt="Profile"/>
        <div style={styles.item}>
          Name: {user.name.first} {user.name.last}
        </div>
        <div style={styles.item}>
          Email: {user.email}
        </div>
        <div style={styles.item}>
          Phone: {user.phone}
        </div>
        <Button onClick={this.props.history.goBack}>Back</Button>
      </div>
    );
  }  
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired  
}

export default withRouter(UserDetail);