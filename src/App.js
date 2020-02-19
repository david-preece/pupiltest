import { CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types'

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader';
import { ApplicationStoreContext } from './stores/ApplicationStore';

const App = ({ store }) => (
    <Router>
        <CssBaseline />

        <ApplicationStoreContext.Provider value={store}>
            <PageHeader />
            <PageContent />
        </ApplicationStoreContext.Provider>
    </Router>
);

App.propTypes = {
    store: PropTypes.object,
};

export default App;
