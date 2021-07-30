import { Create } from 'react-admin';
import { useStyles } from './useStyles';

import { DomainForm } from '../components/domain-form';

export const DomainCreate = (props: any) => {
  const classes = useStyles();
  return (
    <Create {...props} className={classes.createBox}>
      <DomainForm />
    </Create>
  );
};
