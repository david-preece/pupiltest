import React from 'react';
import { AppBar, CssBaseline, Button, Container, Toolbar, IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListProperties from './pages/ListProperties';
import PageHeader from './components/PageHeader';

const styles = {
        container: {
            marginTop: 20,
        },
    },
    App = ({ classes }) => {
        return (
            <Router>
                <CssBaseline />
                <PageHeader />

                <Container className={classes.container}>
                    <Switch>
                        <Route exact path="/" key="Your Property List">
                            <ListProperties />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        );
    };

export default withStyles(styles)(App);
