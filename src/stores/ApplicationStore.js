import React from 'react';
import { types } from 'mobx-state-tree';

export const applicationStore = types.model({
    pageTitle: types.optional(types.string, 'Your Properties'),
});

export const ApplicationStoreContext = React.createContext();
