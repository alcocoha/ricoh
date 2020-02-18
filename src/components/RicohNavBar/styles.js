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
        paddingTop: 20,
        backgroundColor: '#021e4a',
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    englandButtons: {
        position: 'absolute',
        width: 60,
        right: 100,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        '& img': {
            width: '100%'
        }
    },
    spainButtons: {
        position: 'absolute',
        right: 34,
        width: 53,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        '& img': {
            width: '100%'
        }
    },
    title: {
        flexGrow: 1,
    },
}));
