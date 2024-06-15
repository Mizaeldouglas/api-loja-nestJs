/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { EmailEhUnicoValidator } from "./valitadion/is-email-unique.validation";
import { UsuarioRepository } from "./usuario.repository";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule { }
