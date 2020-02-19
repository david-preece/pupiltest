import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class PageHeader extends Component {
    state = {
        anchorEl: null,
    };

    static propTypes = {
        prop: PropTypes,
    };

    handleCloseMenu = () => this.setState({ anchorEl: null });

    handleOpenMenu = event => this.setState({ anchorEl: event.currentTarget });

    render() {
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
                        <MenuItem onClick={this.handleCloseMenu}>List Your Properties</MenuItem>
                        <MenuItem onClick={this.handleCloseMenu}>Add Property</MenuItem>
                        <MenuItem onClick={this.handleCloseMenu}>Clear Properties</MenuItem>
                    </Menu>
                    <Typography variant="h6">Page Header</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
