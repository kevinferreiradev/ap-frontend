import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  logo: {
    width: 'fit-content',
    marginBottom: '30px',
  },
  cardLogin: {
    width: '20vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
  },
  submitButton: {
    marginLeft: 'auto',
    width: 'fit-content',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: '10px',
  },
});
