import * as React from 'react';
import { List, EditButton, Filter, TextInput, TextField } from 'react-admin';
import Datagrid from 'components/Datagrid';

const DomainFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Codigo" source="codigo" />
    <TextInput label="Descrição" source="nome" />
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
        <TextField source="codigo" label="Codigo" />
        <TextField source="nome" label="Nome" />
        <TextField source="descricao" label="Descrição" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
