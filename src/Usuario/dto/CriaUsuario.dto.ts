import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";
import { EmailEhUnico } from "../valitadion/is-email-unique.validation";

export class CriaUsuarioDto {
  @IsNotEmpty({ message: "Nome é obrigatório" })
  @ApiProperty({ example: "Nome do usuário" })
  nome: string;

  @ApiProperty({ example: "emai@email.com" })
  @IsEmail(undefined, { message: "O e-mail informado é inválido" })
  @EmailEhUnico({ message: "Já existe um usuário com este e-mail" })
  email: string;

  @MinLength(8, { message: "Senha deve ter no mínimo 8 caracteres" })
  @ApiProperty({ example: "senha123" })
  senha: string;
}
