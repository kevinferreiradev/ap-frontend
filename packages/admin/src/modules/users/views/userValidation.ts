interface Ierrors {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
}

export const validateUserCreation = (values: any) => {
  const errors: Ierrors = {};
  if (!values.firstName) {
    errors.firstName = 'The firstName is required';
  }
  if (!values.lastName) {
    errors.lastName = 'The lastName is required';
  }
  if (!values.username) {
    errors.username = 'The username is required';
  }
  if (!values.email) {
    errors.email = 'The email is required';
  }
  // if (!values.password) {
  //   errors.password = ['The password is required'];
  // }
  return errors;
};
