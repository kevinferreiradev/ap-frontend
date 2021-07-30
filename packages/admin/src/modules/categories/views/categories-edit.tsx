import { Edit } from 'react-admin';
import { CategoryForm } from '../components/categories-form';

export const CategoryEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <CategoryForm />
    </Edit>
  );
};
