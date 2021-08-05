import { Edit } from 'react-admin';
import { DomainForm } from '../components/domain-form';

export const DomainEdit = (props: any) => {
  return (
    <Edit {...props} undoable={false}>
      <DomainForm />
    </Edit>
  );
};
