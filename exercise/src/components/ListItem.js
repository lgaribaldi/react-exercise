import React, {Component} from 'react';
import PropTypes from 'prop-types';

const listItemStyle = {
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
};

class ListItem extends Component {
  
  render() {    
    const { values } = this.props;
    return (      
      <li style={listItemStyle}>
        <div style={ { 'width' : '20%' } }>{values[0]}</div>
        <div style={ { 'width' : '20%' } }>{values[1]}</div>
        <div style={ { 'width' : '40%' } }>{values[2]}</div>
        <div style={ { 'width' : '20%' } }>{values[3]}</div>
      </li>         
    );
  }  
}

ListItem.propTypes = {  
  values: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (propValue.length !== 4) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Must be array of 4 positions.'
      );
    }
  })
}

export default ListItem;