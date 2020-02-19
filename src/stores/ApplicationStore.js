import React from 'react';
import { types, getSnapshot } from 'mobx-state-tree';

const property = types.model({
        image: types.string,
        address: types.string,
        price: types.number,
    }),
    properties = types.array(property);

export const applicationStore = types
    .model({
        pageTitle: types.optional(types.string, 'Your Properties'),
        properties: types.optional(properties, []),
    })
    .actions(self => ({
        addProperty(newProperty) {
            self.properties.push(newProperty);

            if (window === undefined) {
                return null;
            }

            window.localStorage.setItem('properties', JSON.stringify(getSnapshot(self.properties)));
        },
    }));

export const ApplicationStoreContext = React.createContext();
