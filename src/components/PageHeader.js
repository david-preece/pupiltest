import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { ApplicationStoreContext } from '../stores/ApplicationStore';

class PageHeader extends Component {
    state = {
        anchorEl: null,
    };

    handleCloseMenu = () => this.setState({ anchorEl: null });

    handleOpenMenu = event => this.setState({ anchorEl: event.currentTarget });

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
                        <MenuItem onClick={this.handleCloseMenu}>List Your Properties</MenuItem>
                        <MenuItem onClick={this.handleCloseMenu}>Add Property</MenuItem>
                        <MenuItem onClick={this.handleCloseMenu}>Clear Properties</MenuItem>
                    </Menu>
                    <Typography variant="h6">{store.pageTitle}</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

PageHeader.contextType = ApplicationStoreContext;

export default observer(PageHeader);
