import React from 'react';
import PropTypes from 'prop-types';
import ImageInput from '../components/ImageInput';
import {
    Grid,
    Typography,
    Paper,
    TextField,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { convertFileToBase64 } from '../utils/images';
import { ApplicationStoreContext } from '../stores/ApplicationStore';

const styles = {
    paperRoot: { padding: 10 },
    addressTextField: {
        minHeight: 200,
        maxHeight: 300,
        width: '100%',
    },
    margin: {
        margin: 2,
    },
    gridItem: {
        marginBottom: 15,
    },
    button: {
        width: '100%',
    },
    bottomGridItem: {
        marginTop: 'auto',
    },
    rightGridContainer: {
        height: '100%',
    },
};

class AddProperty extends React.Component {
    state = {
        imageBase64: null,
        address: '',
        price: '',
    };

    handleInputChange = event => {
        const filesList = event.currentTarget.files;

        if (Boolean(filesList[0]) === false) {
            return null;
        }

        convertFileToBase64(filesList[0], this.handleImagePostProcess);
    };

    handleImagePostProcess = imageBase64 => this.setState({ imageBase64 });

    handleChange = (stateKey, value) => this.setState({ [stateKey]: value });

    handleSave = () => {
        const store = this.context,
            { imageBase64, address, price } = this.state;

        if (isNaN(price) || Boolean(address) === false || Boolean(imageBase64) === false) {
            return null;
        }

        store.addProperty({
            image: imageBase64,
            address,
            price: parseFloat(price),
        });

        this.props.history.push('/');
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paperRoot}>
                <Typography variant="h4">Add A Property</Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <ImageInput handleInputChange={this.handleInputChange} imageBase64={this.state.imageBase64} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container className={classes.rightGridContainer}>
                            <Grid item xs={12} className={classes.gridItem}>
                                <InputLabel htmlFor="address-textfield">Amount</InputLabel>
                                <TextField
                                    id="address-textfield"
                                    variant="outlined"
                                    rows={10}
                                    className={classes.addressTextField}
                                    multiline
                                    value={this.state.address}
                                    onChange={event => this.handleChange('address', event.currentTarget.value)}
                                    placeholder="Address"
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.gridItem}>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="price-textfield">Amount</InputLabel>
                                    <Input
                                        id="price-textfield"
                                        value={this.state.price}
                                        onChange={event => this.handleChange('price', event.currentTarget.value)}
                                        startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.bottomGridItem}>
                                <Button
                                    className={classes.button}
                                    onClick={this.handleSave}
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                >
                                    Save Property
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

AddProperty.propTypes = { classes: PropTypes.any };
AddProperty.contextType = ApplicationStoreContext;

export default withStyles(styles)(AddProperty);
