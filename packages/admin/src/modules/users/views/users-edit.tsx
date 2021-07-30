import * as React from 'react';
import { Edit, TextInput, BooleanInput } from 'react-admin';
import Box from '@material-ui/core/Box';
import { useStyles } from './useStyles';
import { validateUserCreation } from './userValidation';
import SimpleForm from 'components/SimpleForm';

export const UserEdit = (props: any) => {
  const classes = useStyles();

  return (
    <Edit {...props} undoable={false}>
      <SimpleForm validate={validateUserCreation}>
        <Box className={classes.fields}>
          <TextInput className={classes.input} fullWidth source="firstName" />
          <TextInput className={classes.input} fullWidth source="lastName" />
        </Box>
        <Box className={classes.fields}>
          <TextInput
            className={classes.input}
            disabled
            fullWidth
            source="username"
          />
          <TextInput className={classes.input} fullWidth source="email" />
          <BooleanInput source="active" />
        </Box>
      </SimpleForm>
    </Edit>
  );
};
