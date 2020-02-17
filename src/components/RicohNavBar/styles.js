import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#021e4a',
        textAlign: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        padding: 10,
        backgroundColor: '#021e4a',
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
