import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './styles';

const RicohSelect = props => {

    const { id, label, value, options, onChange } = props;

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
                <option value="">Selecciona una opción</option>
                { buildOptions() }
            </Select>
        </FormControl>
    )
}

RicohSelect.propTypes = {
    id : PropTypes.string.isRequired,
    label : PropTypes.string,
    value : PropTypes.object,
    options : PropTypes.array
};

RicohSelect.defaultProps = {
    id : 'id-select',
    label : 'Title',
    value : { label: 'foo', value: 1 },
    options: [
        { label: 'foo', value: 1 },
        { label: 'bar', value: 2 }
    ]
}

export default RicohSelect;
