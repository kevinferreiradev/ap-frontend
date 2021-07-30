interface Ierrors {
  firstName?: string;
  lastName?: string;
  categoryname?: string;
  email?: string;
  password?: string;
}

export const validateCategoryCreation = (values: any) => {
  const errors: Ierrors = {};
  if (!values.firstName) {
    errors.firstName = 'The firstName is required';
  }
  if (!values.lastName) {
    errors.lastName = 'The lastName is required';
  }
  if (!values.categoryname) {
    errors.categoryname = 'The categoryname is required';
  }
  if (!values.email) {
    errors.email = 'The email is required';
  }
  // if (!values.password) {
  //   errors.password = ['The password is required'];
  // }
  return errors;
};
