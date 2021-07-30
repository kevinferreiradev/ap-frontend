import { TextInput } from 'react-admin';
import Box from '@material-ui/core/Box';


import SimpleForm from 'components/SimpleForm';
import { validateCategoryCreation } from '../views/categoryValidation';
import { useStyles } from '../views/useStyles';

export const CategoryForm = (props: any) => {
  const classes = useStyles();
  return (
    <SimpleForm {...props} validate={validateCategoryCreation}>
    <Box className={classes.fields}>
      <TextInput
        className={classes.input}
        fullWidth
        options={{ label: "Imagem" }}
        source="image" />
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
    
  );
};
