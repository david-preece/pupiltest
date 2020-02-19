import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader';
import { ApplicationStoreContext, applicationStore } from './stores/ApplicationStore';

const App = () => {
    return (
        <Router>
            <CssBaseline />

            <ApplicationStoreContext.Provider value={applicationStore.create()}>
                <PageHeader />
                <PageContent />
            </ApplicationStoreContext.Provider>
        </Router>
    );
};

export default App;
