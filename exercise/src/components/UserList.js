import React, {Component} from 'react';
import ListItem from './ListItem';

const URL = 'https://randomuser.me/api/?results=20';

const listStyle = {  
  width: '60%',
  backgroundColor: 'white',
  position: 'relative',
  overflow: 'auto',
  paddingLeft: '20%',
  paddingTop: '8px',
  paddingBottom: '8px'  
};

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


class UserList extends Component {
    
  state = { users : []};
  componentWillMount() {
    fetch(URL)
    .then(data => data.json())
    .then(res => this.setState((state) => {
          return {users : res.results}
        }
      ));
  }

  render() {    
    return (
      <div>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <div style={ { 'width' : '20%' } }>First Name</div>
            <div style={ { 'width' : '20%' } }>Last Name</div>
            <div style={ { 'width' : '40%' } }>Email</div>
            <div style={ { 'width' : '20%' } }>Phone</div>
          </li>
          <div>
            {this.state.users.map((item, i) => 
                <li style={listItemStyle} key={i}>
                  <div style={ { 'width' : '20%' } }>{item.name.first}</div>
                  <div style={ { 'width' : '20%' } }>{item.name.last}</div>
                  <div style={ { 'width' : '40%' } }>{item.email}</div>
                  <div style={ { 'width' : '20%' } }>{item.phone}</div>
                </li>
              )}
          </div>
        </ul>
      </div>
    );
  }  
}

export default UserList;