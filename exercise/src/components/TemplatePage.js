import React, {Component} from 'react';
import TopBar from './TopBar';
import PropTypes from 'prop-types';

class TemplatePage extends Component {
  state = { loggedIn : this.props.loggedIn || false }  
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
TemplatePage.propTypes = {
  loggedIn: PropTypes.bool  
}
export default TemplatePage;

