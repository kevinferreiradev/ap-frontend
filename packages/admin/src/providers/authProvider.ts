import { axiosInstance } from 'services/http';
export interface AuthCredentialsInterface {
  username: string;
  password: string;
  assertRoles?: string[];
}

interface loginResponse {
  accessToken: string;
}

interface errorResponse {
  response: {
    status: number;
  };
}

export const login = ({
  username,
  password,
}: AuthCredentialsInterface): Promise<void> => {
  
  localStorage.setItem('accessToken', 'token');
  return Promise.resolve();
  
  return axiosInstance
    .post<loginResponse>('auth/signin', { username, password })
    .then(response => {
      localStorage.setItem('accessToken', response.data.accessToken);
    });
};

export default {
  login,
  logout: (): Promise<void> => {
    localStorage.removeItem('accessToken');
    return Promise.resolve();
  },
  checkError: ({ response: { status } }: errorResponse): Promise<void> => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('accessToken');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: (): Promise<void> => {
    console.log('accessToken', localStorage.getItem('accessToken'));
    return localStorage.getItem('accessToken')
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: (): Promise<void> => Promise.resolve(),
};
