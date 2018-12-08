import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Scenes } from './config/import_paths'
import axios from 'axios';
import './App.css';

const Feeds = Scenes.Feeds();

class App extends Component {
  _renderRoutes = () => {
    return (
      <Switch>
        <Route exact path = '/feeds' component = {Feeds} />
        <Redirect to = '/feeds' />
      </Switch>
    )
  }
  render() {
    return (
      <div>
        {this._renderRoutes()}
      </div>
    );
  }
}

export default App;