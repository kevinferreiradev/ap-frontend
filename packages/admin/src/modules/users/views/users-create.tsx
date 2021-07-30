import * as React from 'react';
import { Create, TextInput, BooleanInput, PasswordInput } from 'react-admin';
import Box from '@material-ui/core/Box';
import { validateUserCreation } from './userValidation';
import { useStyles } from './useStyles';
import SimpleForm from 'components/SimpleForm';

export const UserCreate = (props: any) => {
  const classes = useStyles();
  return (
    <Create {...props} className={classes.createBox}>
      <SimpleForm validate={validateUserCreation}>
        <Box className={classes.fields}>
          <TextInput fullWidth source="firstName" className={classes.input} />
          <TextInput fullWidth source="lastName" className={classes.input} />
        </Box>
        <Box className={classes.fields}>
          <TextInput fullWidth source="email" className={classes.input} />
          <TextInput fullWidth source="username" className={classes.input} />
          <PasswordInput
            fullWidth
            source="password"
            className={classes.input}
          />
        </Box>
        <BooleanInput
          source="active"
          className={classes.input}
          initialValue={true}
        />
      </SimpleForm>
    </Create>
  );
};
