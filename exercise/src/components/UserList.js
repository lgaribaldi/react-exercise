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
          <ListItem values={['First Name', 'Last Name', 'Email', 'Phone']}></ListItem>          
          <div>
            {this.state.users.map((item, i) => 
              <ListItem key={i} values={[item.name.first, item.name.last, item.email, item.phone]}></ListItem>              
            )}
          </div>
        </ul>
      </div>
    );
  }  
}

export default UserList;