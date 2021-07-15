import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({

  root: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing(6)
  },

  childContainer: {
    display: 'flex',
    alignItems: 'center'
  }

}));

export default styles;
