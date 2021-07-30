import * as React from 'react';
import {
  List,
  EmailField,
  EditButton,
  Filter,
  TextInput,
  TextField,
} from 'react-admin';
import Datagrid from 'components/Datagrid';

const UserFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="First Name" source="firstName" />
    <TextInput label="Last Name" source="lastName" />
    <TextInput label="Username" source="username" />
    <TextInput label="Email" source="email" />
  </Filter>
);

export const UserList = (props: any) => {
  return (
    <List
      {...props}
      filters={<UserFilter />}
      bulkActionButtons={<React.Fragment />}
    >
      <Datagrid rowClick="edit">
        <TextField source="firstName" label="First Name" />
        <TextField source="lastName" label="Last Name" />
        <TextField source="username" label="Username" />
        <EmailField source="email" label="Email" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
