import PersonIcon from '@material-ui/icons/Person';
import { UserList, UserCreate, UserEdit } from './views';

export default {
  create: UserCreate,
  edit: UserEdit,
  list: UserList,
  icon: PersonIcon,
  name: 'user',
  options: { label:"Usuários" }
};
