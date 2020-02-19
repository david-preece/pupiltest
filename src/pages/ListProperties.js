import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { ApplicationStoreContext } from '../stores/ApplicationStore';
import NoProperties from '../components/NoProperties';
const ListProperties = ({ history }) => {
    const viewProperty = id => history.push(`/property/${id}`);

    return (
        <ApplicationStoreContext.Consumer>
            {store => {
                if (store.properties.length === 0) {
                    return <NoProperties />;
                }
                return (
                    <Grid container spacing={2}>
                        {store.properties.map((property, index) => (
                            <Grid item key={`property_item${index}`}>
                                <PropertyCard property={property} onView={viewProperty} id={index} />
                            </Grid>
                        ))}
                    </Grid>
                );
            }}
        </ApplicationStoreContext.Consumer>
    );
};

ListProperties.propTypes = {
    classes: PropTypes.any,
};

export default ListProperties;
