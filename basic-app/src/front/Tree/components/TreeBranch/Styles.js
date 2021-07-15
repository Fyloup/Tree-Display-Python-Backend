import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  parentBtn: {
    borderRadius: '0px',
    color: theme.palette.primary.main,
    width: '200px',
    '&:hover': {
      backgroundColor: theme.palette.grey[300]
    }
  },

  divider: {
    width: '100%'
  }

}));

export default styles;
