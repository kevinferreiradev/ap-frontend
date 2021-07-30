interface Ierrors {
  firstName?: string;
  lastName?: string;
  domainname?: string;
  email?: string;
  password?: string;
}

export const validateDomainCreation = (values: any) => {
  const errors: Ierrors = {};
  if (!values.firstName) {
    errors.firstName = 'The firstName is required';
  }
  if (!values.lastName) {
    errors.lastName = 'The lastName is required';
  }
  if (!values.domainname) {
    errors.domainname = 'The domainname is required';
  }
  if (!values.email) {
    errors.email = 'The email is required';
  }
  // if (!values.password) {
  //   errors.password = ['The password is required'];
  // }
  return errors;
};
