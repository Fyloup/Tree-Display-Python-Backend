import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

    root: {
        margin: theme.spacing(10)
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    moveBtnContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },

    moveBtn: {
        margin: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.grey[300]
        }
    },

    divider: {
        width: "100%"
    }

}));

export default styles;
