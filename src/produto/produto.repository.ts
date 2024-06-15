import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  async salvar(produto) {
    this.produtos.push(produto);
  }

  async listar() {
    return this.produtos;
  }

  async deletar(produto) {
    this.produtos = this.produtos.filter((prod) => prod !== produto);
  }

  async atualizar(produto, novoProduto) {
    this.produtos = this.produtos.map((prod) => {
      if (prod === produto) {
        return novoProduto;
      }
      return prod;
    });
  }

  async buscarPorId(id) {
    return this.produtos.find((prod) => prod.id === id);
  }
}
