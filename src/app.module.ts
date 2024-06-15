/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario/usuario.controller";
import { UsuarioRepository } from "./usuario/usuario.repository";
import { ProdutosController } from "./produto/produtos.controller";
import { ProdutoRepository } from "./produto/produto.repository";
import { EmailEhUnicoValidator } from "./usuario/valitadion/is-email-unique.validation";

@Module({
  controllers: [UsuarioController, ProdutosController],
  providers: [UsuarioRepository, ProdutoRepository, EmailEhUnicoValidator],
})
export class AppModule { }
