/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from "@nestjs/common";
import { CriaUsuarioDto } from "./dto/CriaUsuario.dto";
import { ApiTags } from '@nestjs/swagger';
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuidv4 } from 'uuid';
import { ListaUsuarioDto } from "./dto/lista-usuario.dto";

@ApiTags('usuarios')
@Controller("usuarios")
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) { }

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDto) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.id = uuidv4()
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.senha = dadosDoUsuario.senha;
    this.usuarioRepository.salvar(usuarioEntity);

    return { usuario: new ListaUsuarioDto(usuarioEntity.id, usuarioEntity.nome), message: "Usuário criado com sucesso" }
  }

  @Get()
  async listarUsuario() {
    const usuarioSalvos = await this.usuarioRepository.listar();

    return usuarioSalvos.map(usuario => new ListaUsuarioDto(
      usuario.id,
      usuario.nome
    ));
  }
}
