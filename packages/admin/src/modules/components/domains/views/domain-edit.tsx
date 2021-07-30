import { Edit, TextInput } from 'react-admin';
import Box from '@material-ui/core/Box';
import { useStyles } from './useStyles';
import { validateDomainCreation } from './domainValidation';
import SimpleForm from 'components/SimpleForm';

export const DomainEdit = (props: any) => {
  const classes = useStyles();

  return (
    <Edit {...props} undoable={false}>
      <SimpleForm validate={validateDomainCreation}>
        <Box className={classes.fields}>
          <TextInput
            className={classes.input}
            fullWidth
            options={{ label: "Tipo" }}
            source="type" />
          <TextInput
            className={classes.input}
            fullWidth
            options={{ label: "Código" }}
            source="code" />
          <TextInput
            fullWidth
            className={classes.input}
            options={{ label: "Descrição" }}
            source="description" />
        </Box>
        
      </SimpleForm>
    </Edit>
  );
};
