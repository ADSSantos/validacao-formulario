import * as yup from "yup";

const Validacao = yup.object({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(10, "O nome dev ter no minimo 10 caracteres")
    .max(30, "O nome dev ter no máximo 10 caracteres"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("o email é invalido"),
  data: yup
    .date()
    .required(" A data de nascimento é obrigatória")
    .max(new Date(), "Data invalida"),
});

export default Validacao;
