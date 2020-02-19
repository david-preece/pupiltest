import { createShallow, createMount } from '@material-ui/core/test-utils';
import { ApplicationStoreContext } from '../stores/ApplicationStore';
import PageHeader from './PageHeader';
import React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

describe('PageHeader', () => {
    let shallow, wrapper;

    beforeAll(() => {
        shallow = createShallow({ untilSelector: 'PageHeader' });
        wrapper = shallow(<PageHeader />);
    });

    it('should render the menu button', () => {
        expect(wrapper.find(IconButton).length).toBe(1);
        expect(wrapper.find(MenuIcon).length).toBe(1);
    });

    it('should render a Toolbar component', () => {
        expect(wrapper.find(Toolbar).length).toBe(1);
    });

    it('should render a Menu component with 3 MenuItems', () => {
        expect(wrapper.find(Menu).length).toBe(1);
        expect(wrapper.find(MenuItem).length).toBe(3);
    });

    it('should render a Typography component with the value of pageTitle from the store', () => {
        const mount = createMount(),
            mountedWrapper = mount(
                <ApplicationStoreContext.Provider value={{ pageTitle: 'Hello World' }}>
                    <PageHeader />
                </ApplicationStoreContext.Provider>,
            );

        expect(mountedWrapper.find(Typography).length).toBe(1);
        expect(mountedWrapper.find(Typography).text()).toBe('Hello World');
    });
});
