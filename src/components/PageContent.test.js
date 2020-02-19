import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import PageContent from './PageContent';
import { Container } from '@material-ui/core';

describe('PageContent', () => {
    let shallow, wrapper;

    beforeAll(() => {
        shallow = createShallow({ untilSelector: 'PageContent' });
        wrapper = shallow(<PageContent />);
    });

    it('should render a Container', () => {
        expect(wrapper.find(Container).length).toBe(1);
    });
});
