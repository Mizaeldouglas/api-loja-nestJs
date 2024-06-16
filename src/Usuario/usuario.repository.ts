/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {
  private usuario: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuario.push(usuario);
  }

  async listar() {
    return this.usuario;
  }

  async deletar(usuario: UsuarioEntity) {
    this.usuario = this.usuario.filter((user) => user !== usuario);
  }

  async atualizar(usuario, novoUsuario) {

    this.usuario = this.usuario.map((user) => {
      if (user === usuario) {
        return novoUsuario;
      }
      if (!novoUsuario) {
        throw new Error('Usuário não encontrado');
      }

      Object.entries(novoUsuario).forEach(([key, value]) => {
        if (key === 'id') {
          return;
        }

        user[key] = value;
      });

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
