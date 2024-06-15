import { ApiProperty } from "@nestjs/swagger";

export class CaracteristicasProdutosDto {
  @ApiProperty({ example: "caracteristicas" })
  caracteristicas: {
    nome: string;
    descricao: string;
  }[];
}
