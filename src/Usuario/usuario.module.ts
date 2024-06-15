/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { EmailEhUnicoValidator } from "./valitadion/is-email-unique.validation";

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [EmailEhUnicoValidator],
  exports: [],
})
export class UsuarioModule { }
