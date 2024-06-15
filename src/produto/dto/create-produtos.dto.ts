import { IsDateString, IsNotEmpty } from "class-validator";
import { ImagensProdutosDto } from "./imagens-produtos.dto";
import { CaracteristicasProdutosDto } from "./caracteristicas-produtos.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutosDto {
  @ApiProperty({ example: "Produto 1" })
  @IsNotEmpty({ message: "Nome é obrigatório" })
  nome: string;

  @IsNotEmpty({ message: "Valor é obrigatório" })
  @ApiProperty({ example: 100.0 })
  valor: number;

  @IsNotEmpty({ message: "Quantidade disponível é obrigatória" })
  @ApiProperty({ example: 10 })
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: "Descrição é obrigatória" })
  @ApiProperty({ example: "Descrição do produto" })
  descricao: string;

  @IsNotEmpty({ message: "Caracteristicas são obrigatórias" })
  @ApiProperty({
    example: [
      {
        caracteristicas: [
          { nome: "caracteristica 1", descricao: "descricao 1" },
          { nome: "caracteristica 2", descricao: "descricao 2" },
        ],
      },
    ],
  })
  caracteristicas: CaracteristicasProdutosDto[];

  @IsNotEmpty({ message: "Imagens são obrigatórias" })
  @ApiProperty({
    example: [
      { name: "alguma imagem 1", url: "http://localhost:3000/imagem1.jpg" },
      { name: "alguma imagem 2", url: "http://localhost:3000/imagem2.jpg" },
    ],
  })
  imagens: ImagensProdutosDto[];
  @IsNotEmpty({ message: "Categoria é obrigatória" })
  @ApiProperty({ example: "Categoria do produto" })
  categoria: string;

  @IsDateString()
  @ApiProperty({ example: new Date().toISOString() })
  dataCriacao: string;

  @IsDateString()
  @ApiProperty({ example: new Date().toISOString() })
  dataAtualizacao: string;
}
