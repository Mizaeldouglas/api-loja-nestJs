import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDto {
  @IsNotEmpty({ message: "Nome é obrigatório" })
  nome: string;

  @IsEmail({}, { message: "E-mail inválido" })
  email: string;

  @MinLength(8, { message: "Senha deve ter no mínimo 8 caracteres" })
  senha: string;
}
