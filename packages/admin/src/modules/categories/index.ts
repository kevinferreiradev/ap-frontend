import PersonIcon from '@material-ui/icons/Person';
import { CategoryList, CategoryCreate, CategoryEdit } from './views';

export default {
  create: CategoryCreate,
  edit: CategoryEdit,
  list: CategoryList,
  icon: PersonIcon,
  name: 'categorias',
  options: { label: 'Categorias' },
};
