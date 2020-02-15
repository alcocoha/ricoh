import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CreateProducts = () => {
    const classes = useStyles();
    const handleChange = foo => {
        console.log('foo', foo)
    }
 
    return (
        <div>
            <h1>Crear nuevo ordenador</h1>
            <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{background: 'white', paddingLeft: 5, paddingRight: 5}}>
                    Age
                </InputLabel>
                <Select
                    native
                    value={'foo'}
                    onChange={handleChange('age')}
                    inputProps={{
                        name: 'foo',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="">Selecciona una opciòn</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
        </div>
    );
};

export default CreateProducts;