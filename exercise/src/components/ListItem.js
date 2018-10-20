import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

const styles = {
  listItem : {
    width: '100%',
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    textAlign: 'left',
    alignItems: 'center',
    paddingTop: '12px',
    paddingBottom: '12px',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundClip: 'padding-box'    
  }
};

class ListItem extends Component {
  
  onClick = () => {
    const {data, history, loggedIn} = this.props;    
    const userLocation = {
      pathname: '/users/' + data.login.uuid,
      state: { 
        loggedIn,
        selectedUser: data
      }
    };
    history.push(userLocation);
  }
  render() {    
    const { displayValues, data } = this.props;    
    return (      
      <li className={data ? "hasHover" : ""} 
        style={styles.listItem} onClick={this.onClick}>
        <div style={ { 'width' : '20%' } }>{displayValues[0]}</div>
        <div style={ { 'width' : '20%' } }>{displayValues[1]}</div>
        <div style={ { 'width' : '40%' } }>{displayValues[2]}</div>
        <div style={ { 'width' : '20%' } }>{displayValues[3]}</div>
      </li>         
    );
  }  
}

ListItem.propTypes = {  
  data: PropTypes.object,
  displayValues: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (propValue.length !== 4) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Must be array of 4 positions.'
      );
    }
  })
}

export default withRouter(ListItem);