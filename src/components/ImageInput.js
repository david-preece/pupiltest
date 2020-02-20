import React from 'react';
import PropTypes from 'prop-types';
import AddCircle from '@material-ui/icons/AddCircle';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
        input: {
            display: 'none',
        },
        iconRoot: {
            fontSize: '500px',
        },
        image: {
            height: 500,
            width: 500,
        },
    },
    ImageInput = ({ classes, handleInputChange, imageBase64 }) => (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h6">Image:</Typography>
            </Grid>
            <Grid item>
                <input
                    id="image-input"
                    className={classes.input}
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                />
                <label for="image-input">
                    {Boolean(imageBase64) ? (
                        <img className={classes.image} src={imageBase64} />
                    ) : (
                        <AddCircle fontSize="large" classes={{ root: classes.iconRoot }} className={classes.icon} />
                    )}
                </label>
            </Grid>
        </Grid>
    );

ImageInput.propTypes = {
    classes: PropTypes.any,
    imageBase64: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ImageInput);
