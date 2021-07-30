import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ImageLogo from 'assets/logo.png';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useLogin } from './useLogin';
import { useStyles } from './useStyles';
import { History } from 'history';
import { Notification } from 'react-admin';

interface IProps {
  history: History;
}

export const Login: React.FC<IProps> = props => {
  const classes = useStyles();
  const {
    userData,
    onChangeField,
    doLogin,
    loginError,
    loginStarted,
  } = useLogin();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        borderRadius={10}
        boxShadow={3}
        p={4}
        px={6}
        className={classes.cardLogin}
      >
        <img src={ImageLogo} className={classes.logo} />
        <form className={classes.form}>
          <TextField
            className={classes.input}
            id="standard-basic"
            label="Username"
            variant="outlined"
            value={userData.username}
            onChange={onChangeField('username')}
          />
          <TextField
            className={classes.input}
            id="standard-basic"
            label="Password"
            value={userData.password}
            onChange={onChangeField('password')}
            variant="outlined"
            type="password"
          />
          <Typography>
            <Link href="#/recovery" onClick={() => console.log('olar')}>
              Forgot Password
            </Link>
          </Typography>
          <Button
            variant="contained"
            color="default"
            className={classes.submitButton}
            startIcon={<LockOpenIcon />}
            onClick={() => doLogin(userData, props.history)}
            disabled={loginStarted}
            type="submit"
          >
            Login
          </Button>
          {loginError && (
            <Box>
              <Typography className={classes.errorText}>
                The credentials are invalid, please check your username/password
              </Typography>
            </Box>
          )}
        </form>
      </Box>
      <Notification />
    </Box>
  );
};

export default Login;
