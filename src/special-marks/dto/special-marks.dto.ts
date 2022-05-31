import { ApiProperty } from "@nestjs/swagger";

export class SpecialMarksDto {
  @ApiProperty({ example: "Скидка", description: "Особая метка товара" })
  readonly value: string;
}
