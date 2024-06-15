/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProdutosController } from "./produtos.controller";

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [],
  exports: [],
})
export class ProdutoModule { }
