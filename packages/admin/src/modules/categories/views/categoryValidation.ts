interface Ierrors {
  codigo?: string;
  nome?: string;
  descricao?: string;
  email?: string;
  password?: string;
}

export const validateCategoryCreation = (values: any) => {
  const errors: Ierrors = {};
  if (!values.codigo) {
    errors.codigo = 'O campo Código é obrigatório';
  }
  if (!values.nome) {
    errors.nome = 'O campo Nome é obrigatório';
  }

  return errors;
};
