import * as React from 'react';
import { List, EditButton, Filter, TextInput, TextField } from 'react-admin';
import Datagrid from 'components/Datagrid';

const CategoryFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Codigo" source="codigo" />
    <TextInput label="Nome" source="nome" />
    <TextInput label="Descrição" source="descricao" />
  </Filter>
);

export const CategoryList = (props: any) => {
  return (
    <List
      {...props}
      filters={<CategoryFilter />}
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
