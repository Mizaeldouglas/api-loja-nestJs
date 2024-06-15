/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
  private usuario = [];

  async salvar(usuario) {
    this.usuario.push(usuario);
  }

  async listar() {
    return this.usuario;
  }

  async deletar(usuario) {
    this.usuario = this.usuario.filter((user) => user !== usuario);
  }

  async atualizar(usuario, novoUsuario) {
    this.usuario = this.usuario.map((user) => {
      if (user === usuario) {
        return novoUsuario;
      }
      return user;
    });
  }

  async buscarPorId(id) {
    return this.usuario.find((user) => user.id === id);
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuario.find(
      usuario => usuario.email === email
    );
    return possivelUsuario !== undefined;
  }
}
