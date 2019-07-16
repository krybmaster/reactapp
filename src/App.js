import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function Func1() {
  return <h3>Привет, Eugene</h3>;
}

function Func2() {
  return <h3>Привет, 11</h3>;
}

function Func3() {
  return <h3>Привет, 22</h3>;
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    padding: theme.spacing(2)
  },
}));

function App() {
  const classes = useStyles();
  return (


    <BrowserRouter>

      <div>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
      <div className={classes.root}>
        <Route
          path = "/"
          render = {({ location }) => (
            <Fragment>
              <AppBar position="static" color="default">
                <Tabs 
                  value={location.pathname}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Item One" value="/" component={Link} to="/" />
                  <Tab label="Item Two" value="/tab2" component={Link} to="/tab2" />
                  <Tab value="/tab3" label="Item Three" component={Link} to="/tab3" />
                </Tabs>
              </AppBar>

              <Switch>
                <Route path = "/tab2" render = {Func3} />
                <Route path = "/tab3" render = {Func2} />
                <Route path = "/" render = {Func1} />
              </Switch>

            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;