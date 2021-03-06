import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import Users from './routes/Users';
import User from './routes/User';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/users" component={Users}/>
      <Route path="/users/:id" component={User}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
