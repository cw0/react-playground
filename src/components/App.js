/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import CounterPage from '../containers/CounterPage';
import {AppBar, Toolbar, Button, Typography} from 'material-ui';
import 'typeface-roboto';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    //const activeStyle = { color: 'blue' };
    return (
      <div>        
        <AppBar position="static">
          <Toolbar>            
            <Typography type="title" color="inherit" className="classes.flex">
              Title: 
            </Typography>
            <Button
              href="/"
            >
              Home
            </Button>
            <Button
              href="/fuel-savings"
            >
              Demo App
            </Button>
            <Button
              href="/counter"
            >
              Counter
            </Button>
            <Button
              href="/about"
            >
              About
            </Button>
          </Toolbar>
        </AppBar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fuel-savings" component={FuelSavingsPage} />
            <Route path="/counter" component={CounterPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element
};

export default App;
