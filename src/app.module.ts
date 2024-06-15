/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario/usuario.controller";
import { UsuarioRepository } from "./usuario/usuario.repository";
import { ProdutosController } from "./produto/produtos.controller";
import { ProdutoRepository } from "./produto/produto.repository";

@Module({
  controllers: [UsuarioController, ProdutosController],
  providers: [UsuarioRepository, ProdutoRepository],
})
export class AppModule { }
