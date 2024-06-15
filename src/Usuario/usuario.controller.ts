/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDto } from "./dto/CriaUsuario.dto";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller("usuarios")
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) { }

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDto) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return { dadosDoUsuario };
  }

  @Get()
  async listarUsuario() {
    return this.usuarioRepository.listar();
  }
}
