import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  navbarRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
    margin: '5px 0px',
  },
  appBar: {
    color: 'black',
    backgroundColor: 'white',
  },
  logo: {
    height: '50px',
  },
});
