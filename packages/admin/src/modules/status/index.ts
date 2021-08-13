import PersonIcon from '@material-ui/icons/Person';
import {
  DomainCreate,
  DomainEdit,
  DomainList,
} from '../components/domains/views';

export default {
  create: DomainCreate,
  edit: DomainEdit,
  list: DomainList,
  icon: PersonIcon,
  name: 'situacoes',
  options: { label: 'Situações' },
};
