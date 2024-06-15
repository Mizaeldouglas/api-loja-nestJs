/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProdutosController } from "./produtos.controller";
import { ProdutoRepository } from "./produto.repository";

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutoRepository],
  exports: [],
})
export class ProdutoModule { }
