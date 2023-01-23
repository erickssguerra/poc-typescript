export type Customer = {
  id?: number;
  name: string;
  cpf: string;
  email: string;
};

export type EmailUpdateForm = {
  new_email: string;
  previous_email: string;
};
