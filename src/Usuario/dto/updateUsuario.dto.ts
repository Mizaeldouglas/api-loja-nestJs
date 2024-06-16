import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MinLength,
} from "class-validator";
import { v4 as uuidv4 } from "uuid";
import { ApiProperty } from "@nestjs/swagger";
import { EmailEhUnico } from "../valitadion/is-email-unique.validation";

export class updateUsuarioDto {
  @IsNotEmpty({ message: "Id é obrigatório" })
  @IsUUID(undefined, { message: "Id deve ser um UUID válido" })
  id: string = uuidv4();

  @IsNotEmpty({ message: "Nome é obrigatório" })
  @ApiProperty({ example: "Nome do usuário" })
  @IsOptional()
  nome: string;

  @ApiProperty({ example: "emai@email.com" })
  @IsEmail(undefined, { message: "O e-mail informado é inválido" })
  @EmailEhUnico({ message: "Já existe um usuário com este e-mail" })
  @IsOptional()
  email: string;

  @MinLength(8, { message: "Senha deve ter no mínimo 8 caracteres" })
  @IsOptional()
  @ApiProperty({ example: "senha123" })
  senha: string;
}
