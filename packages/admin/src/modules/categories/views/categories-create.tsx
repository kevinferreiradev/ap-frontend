import { Create } from 'react-admin';
import { useStyles } from './useStyles';

import { CategoryForm } from '../components/categories-form';

export const CategoryCreate = (props: any) => {
  const classes = useStyles();
  return (
    <Create {...props} className={classes.createBox}>
      <CategoryForm />
    </Create>
  );
};
