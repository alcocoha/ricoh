import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './styles';

const RicohSelect = props => {

    const { id, label, value, options, onChange, placeholder } = props;

    const classes = useStyles();

    const buildOptions = () =>
        options.map( item =>
            <option key={ item.value } value={ item.value }>{ item.label }</option>
        );

    return (
        <FormControl variant="outlined" className={ classes.formControl }>
            <InputLabel shrink className={ classes.label }>
                { label }
            </InputLabel>
            <Select
                native
                value={ value }
                onChange={ onChange }
                inputProps={{
                    id
                }}
            >
                <option value="">{ placeholder }</option>
                { buildOptions() }
            </Select>
        </FormControl>
    )
}

RicohSelect.propTypes = {
    id : PropTypes.string.isRequired,
    label : PropTypes.string,
    value : PropTypes.string,
    options : PropTypes.array,
    placeholder: PropTypes.string
};

RicohSelect.defaultProps = {
    id : 'id-select',
    label : 'Title',
    value : '',
    options: [
        { label: 'foo', value: 1 },
        { label: 'bar', value: 2 }
    ],
    placeholder: ''
}

export default RicohSelect;
