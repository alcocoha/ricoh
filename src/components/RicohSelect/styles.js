import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    label: {
        background: 'white',
        paddingLeft: 5,
        paddingRight: 5
    }
}));