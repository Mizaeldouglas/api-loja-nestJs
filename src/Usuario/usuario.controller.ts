/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { CriaUsuarioDto } from "./dto/CriaUsuario.dto";
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuidv4 } from 'uuid';
import { ListaUsuarioDto } from "./dto/lista-usuario.dto";
import { updateUsuarioDto } from "./dto/updateUsuario.dto";

@ApiTags('usuarios')

@Controller("usuarios")
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) { }

  @Post()
  @ApiOperation({ summary: '-> Cria um usuário' })
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
  @ApiOperation({ summary: '-> Retorna todos os usuários' })
  async listarUsuario() {
    const usuarioSalvos = await this.usuarioRepository.listar();

    return usuarioSalvos.map(usuario => new ListaUsuarioDto(
      usuario.id,
      usuario.nome
    ));
  }

  @Get(':id')
  @ApiOperation({ summary: '-> Retorna um usuário' })
  async buscarUsuarioPorId(@Param('id') id: string) {
    const usuario = await this.usuarioRepository.buscarPorId(id);

    return new ListaUsuarioDto(usuario.id, usuario.nome);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Atualiza um usuário existente' })
  async atualizarUsuario(@Body() dadosDoUsuario: updateUsuarioDto, @Param('id') id: string) {
    const usuario = await this.usuarioRepository.buscarPorId(id);
    usuario.nome = dadosDoUsuario.nome;
    usuario.email = dadosDoUsuario.email;
    usuario.senha = dadosDoUsuario.senha;

    this.usuarioRepository.atualizar(usuario, usuario);

    return { usuario: new ListaUsuarioDto(usuario.id, usuario.nome), message: "Usuário atualizado com sucesso" }
  }

  @Delete(':id')
  @ApiOperation({ summary: '-> Deleta um usuário existente' })
  async deletarUsuario(@Param('id') id: string) {
    const usuario = await this.usuarioRepository.buscarPorId(id);
    this.usuarioRepository.deletar(usuario);

    return { usuario: new ListaUsuarioDto(usuario.id, usuario.nome), message: "Usuário deletado com sucesso" }
  }
}
