import { axiosInstance } from 'services/http';

interface ISendVerificationCode {
  email: string;
}

export const sendVerificationCode = ({
  email,
}: ISendVerificationCode): Promise<void> => {
  return axiosInstance
    .post('/auth/resetPassword', { email, isAdmin: false })
    .then(response => {
      console.log(response);
    });
};

interface IChangePassword {
  password: string;
  token: string;
}

export const changePassword = ({
  password,
  token,
}: IChangePassword): Promise<void> =>
  axiosInstance.patch(`/auth/resetPassword/${token}`, { password });

export const verifyToken = ({ token }: { token: string }): Promise<void> =>
  axiosInstance.get(`auth/resetPassword/${token}`);
