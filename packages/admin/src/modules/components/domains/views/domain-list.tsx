import * as React from 'react';
import {
  List,
  EditButton,
  Filter,
  TextInput,
  TextField,
} from 'react-admin';
import Datagrid from 'components/Datagrid';

const DomainFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Codigo" source="code" />
    <TextInput label="Descrição" source="description" />
    
  </Filter>
);

export const DomainList = (props: any) => {
  return (
    <List
      {...props}
      filters={<DomainFilter />}
      bulkActionButtons={<React.Fragment />}
    >
      <Datagrid rowClick="edit">
        <TextField source="code" label="Codigo" />
        <TextField source="description" label="Descrição" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
