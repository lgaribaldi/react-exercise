import React, {Component} from 'react';
import TopBar from './TopBar';

export default class TemplatePage extends Component {
  state = { loggedIn : false }
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <TopBar loggedIn={this.state.loggedIn}
          onLogIn={this.onLogIn}/>
        {React.cloneElement(children, 
          { 
            loggedIn: this.state.loggedIn,
            onLogIn: this.onLogIn
          })}
      </div>
    );
  }

  onLogIn = function () {
    this.setState((state) => {
        return {loggedIn : !state.loggedIn}
      }
    );
  }.bind(this);
}
