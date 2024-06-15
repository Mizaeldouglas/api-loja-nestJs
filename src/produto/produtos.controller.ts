/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateProdutosDto } from "./dto/create-produtos.dto";
import { UpdateProdutoDto } from "./dto/update-produtos.dto";
import { ProdutoRepository } from "./produto.repository";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('produtos')
@Controller("produtos")
export class ProdutosController {
  constructor(private readonly produtosRepository: ProdutoRepository) { }

  @Post()
  async create(@Body() createProdutosDto: CreateProdutosDto) {
    return this.produtosRepository.salvar(createProdutosDto);
  }

  @Get()
  findAll() {
    return this.produtosRepository.listar();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.produtosRepository.buscarPorId(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProdutosDto: UpdateProdutoDto) {
    return this.produtosRepository.atualizar(+id, updateProdutosDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.produtosRepository.deletar(+id);
  }
}
