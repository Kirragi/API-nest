import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "Скидка", description: "Особая метка товара" })
  readonly value: string;
}
