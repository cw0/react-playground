/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import CounterPage from '../containers/CounterPage';
import {withStyles} from 'material-ui/styles';
import {AppBar, Toolbar, Button, Typography} from 'material-ui';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    //const activeStyle = { color: 'blue' };
    return (
      <div>
        <AppBar position="static">
          <Toolbar>            
            <Typography type="title" color="inherit" className="classes.flex">
              Title: 
            </Typography>
            <Button
              className={classes.button}
              href="/"
            >
              Home
            </Button>
            <Button
              className={classes.button}
              href="/fuel-savings"
            >
              Demo App
            </Button>
            <Button
              className={classes.button}
              href="/counter"
            >
              Counter
            </Button>
            <Button
              className={classes.button}
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

export default withStyles(styles)(App);
