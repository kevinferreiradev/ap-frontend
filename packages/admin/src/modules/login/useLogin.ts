import { useState } from 'react';
import { login, AuthCredentialsInterface } from 'providers/authProvider';
import { History } from 'history';

const defaultUserData = {
  username: '',
  password: '',
};

interface useLoginInterface {
  (): {
    userData: AuthCredentialsInterface;

    onChangeField: (
      field: string,
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;

    doLogin: (loginData: AuthCredentialsInterface, history: History) => void;

    loginError: boolean;
    loginStarted: boolean;
  };
}

export const useLogin: useLoginInterface = () => {
  const [userData, setUserData] = useState<AuthCredentialsInterface>(
    defaultUserData,
  );
  const [loginError, setLoginError] = useState(false);
  const [loginStarted, setLoginStarted] = useState(false);

  const onChangeField = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserData({ ...userData, [field]: event.target.value });
  };

  const doLogin = (loginData: AuthCredentialsInterface, history: History) => {
    setLoginError(false);
    setLoginStarted(true);
    login(loginData)
      .then(_response => {
        history.push('user');
        setLoginStarted(false);
      })
      .catch(_error => {
        setLoginError(true);
        setLoginStarted(false);
      });
  };

  return {
    userData,
    onChangeField,
    doLogin,
    loginError,
    loginStarted,
  };
};
