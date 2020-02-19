import React from 'react';
import ListProperties from '../pages/ListProperties';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
        container: {
            marginTop: 20,
        },
    },
    PageContent = () => {
        return (
            <Container className={classes.container}>
                <Switch>
                    <Route exact path="/" key="Your Property List">
                        <ListProperties />
                    </Route>
                </Switch>
            </Container>
        );
    };

export default withStyles(styles)(PageContent);
