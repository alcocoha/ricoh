import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const RicohText = props => {
    const { id, label, placeholder, onChange, shrinkValidate, value, valueFromState } = props;

    return (
        <>
        {
            valueFromState ?
                <TextField
                    id={ id }
                    label={ label }
                    placeholder={ placeholder }
                    onChange={ onChange }
                    value = { value }
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: shrinkValidate,
                    }}
                    variant="outlined"
                />
                :
                <TextField
                    id={ id }
                    label={ label }
                    placeholder={ placeholder }
                    onChange={ onChange }
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: shrinkValidate,
                    }}
                    variant="outlined"
                />
        }
        </>
    );
}

RicohText.propTypes = {
    id : PropTypes.string.isRequired,
    label : PropTypes.string,
    placeholder : PropTypes.string,
    shrinkValidate: PropTypes.bool,
    value: PropTypes.string,
    valueFromState: PropTypes.bool
};

RicohText.defaultProps = {
    id : 'id-text',
    label : 'Title',
    placeholder : 'Placeholder',
    shrinkValidate: true,
    value: '',
    valueFromState: true

}

export default RicohText;
