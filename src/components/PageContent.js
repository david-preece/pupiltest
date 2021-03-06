import React from 'react';
import PropTypes from 'prop-types';
import ListProperties from '../pages/ListProperties';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AddProperty from '../pages/AddProperty';

const styles = {
        container: {
            marginTop: 20,
        },
    },
    PageContent = ({ classes }) => {
        return (
            <Container className={classes.container}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        key="Your Property List"
                        render={props => <ListProperties {...props} />}
                    ></Route>
                    <Route exact path="/add" key="Add Property" render={props => <AddProperty {...props} />}></Route>
                </Switch>
            </Container>
        );
    };

PageContent.propTypes = {
    classes: PropTypes.any,
};

export default withStyles(styles)(PageContent);
