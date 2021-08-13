import { TextInput } from 'react-admin';
import Box from '@material-ui/core/Box';

import SimpleForm from 'components/SimpleForm';
import { validateDomainCreation } from '../views/domainValidation';
import { useStyles } from '../views/useStyles';

export const DomainForm = (props: any) => {
  const classes = useStyles();
  return (
    <SimpleForm {...props} validate={validateDomainCreation}>
      <Box className={classes.fields}>
        <TextInput
          fullWidth
          source="codigo"
          options={{ label: 'Código' }}
          className={classes.input}
        />
        <TextInput
          fullWidth
          options={{ label: 'Nome' }}
          source="nome"
          className={classes.input}
        />
        <TextInput
          fullWidth
          options={{ label: 'Descrição' }}
          source="descricao"
          className={classes.input}
        />
      </Box>
    </SimpleForm>
  );
};
