import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader';

const
    App = ({ classes }) => {
        return (
            <Router>
                <CssBaseline />
                <PageHeader />
                <PageContent />
            </Router>
        );
    };

export default App;
