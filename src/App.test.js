import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import App from './App';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import { CssBaseline } from '@material-ui/core';

describe('renders learn react link', () => {
    let shallow, wrapper;

    beforeAll(() => {
        shallow = createShallow();
        wrapper = shallow(<App />);
    });

    it('should render the PageHeader component', () => {
        expect(wrapper.find(PageHeader).length).toBe(1);
    });

    it('should render the PageContent component', () => {
        expect(wrapper.find(PageContent).length).toBe(1);
    });

    it('should render the CssBaseline component', () => {
        expect(wrapper.find(CssBaseline).length).toBe(1);
    });
});
