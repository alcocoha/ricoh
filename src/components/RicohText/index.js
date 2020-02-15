import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const RicohText = props => {
    const { id, label, placeholder, onChange } = props;

    return (
        <TextField
            id={ id }
            label={ label }
            style={{ margin: 8 }}
            placeholder={ placeholder }
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={ onChange }
            variant="outlined"
        />
    );
}

RicohText.propTypes = {
    id : PropTypes.string.isRequired,
    label : PropTypes.string,
    placeholder : PropTypes.string
};

RicohText.defaultProps = {
    id : 'id-text',
    label : 'Title',
    placeholder : 'Placeholder'
}

export default RicohText;
