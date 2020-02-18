import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const RicohText = props => {
    const { id, label, placeholder, onChange, shrinkValidate, value } = props;

    return (
        <TextField
            id={ id }
            label={ label }
            placeholder={ placeholder }
            onChange={ onChange }
            value = { value}
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: shrinkValidate,
            }}
            variant="outlined"
        />
    );
}

RicohText.propTypes = {
    id : PropTypes.string.isRequired,
    label : PropTypes.string,
    placeholder : PropTypes.string,
    shrinkValidate: PropTypes.bool,
    value: PropTypes.string
};

RicohText.defaultProps = {
    id : 'id-text',
    label : 'Title',
    placeholder : 'Placeholder',
    shrinkValidate: true,
    value: ''
}

export default RicohText;
