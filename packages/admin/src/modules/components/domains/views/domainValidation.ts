interface Ierrors {
  nome?: string;
}

export const validateDomainCreation = (values: any) => {
  const errors: Ierrors = {};
  if (!values.nome) {
    errors.nome = 'O Campo Nome é obrigatório';
  }

  return errors;
};
