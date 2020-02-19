import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
        root: {
            maxWidth: 250,
        },
        media: {
            height: 250,
            width: 250,
        },
        button: {
            width: '100%',
        },
    },
    PropertyCard = ({ property, classes, onView, id }) => {
        return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image="https://via.placeholder.com/150" title={property.address} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {property.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`£${property.price}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        className={classes.button}
                        onClick={() => onView(id)}
                        size="small"
                        variant="contained"
                        color="primary"
                    >
                        View this property
                    </Button>
                </CardActions>
            </Card>
        );
    };

PropertyCard.propTypes = {
    property: PropTypes.object.isRequired,
    classes: PropTypes.any,
    id: PropTypes.number.isRequired,
    onView: PropTypes.func.isRequired,
};

export default withStyles(styles)(PropertyCard);
