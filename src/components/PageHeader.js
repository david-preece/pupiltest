import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { ApplicationStoreContext } from '../stores/ApplicationStore';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class PageHeader extends Component {
    state = {
        anchorEl: null,
    };

    handleCloseMenu = () => this.setState({ anchorEl: null });

    handleOpenMenu = event => this.setState({ anchorEl: event.currentTarget });

    handleNav = to => {
        this.handleCloseMenu();
        this.props.history.push(to);
    };

    render() {
        const store = this.context;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={this.handleOpenMenu} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="main-menu"
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleCloseMenu}
                    >
                        <MenuItem onClick={() => this.handleNav('/')}>List Your Properties</MenuItem>
                        <MenuItem onClick={() => this.handleNav('/add')}>Add Property</MenuItem>
                    </Menu>
                    <Typography variant="h6">{store.pageTitle}</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

PageHeader.contextType = ApplicationStoreContext;
PageHeader.propTypes = {
    history: PropTypes.object,
};

export default observer(withRouter(PageHeader));
