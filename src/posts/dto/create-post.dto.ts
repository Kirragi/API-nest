import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: "Title", description: "Заголовок новости" })
  readonly title: string;

  @ApiProperty({ example: "Content post", description: "Описание ппоста" })
  readonly content: string;

  @ApiProperty({ example: "10", description: "скидка(не обязательно)" })
  readonly discount: number;

  @ApiProperty({ example: "1", description: "Цена" })
  readonly price: number;

  @ApiProperty({ example: "1", description: "Id категории" })
  readonly categoryId: number;
  @ApiProperty({
    example: "1",
    description: "Id специальной метки(не обязательно)",
  })
  readonly specialMarksId: number;
}
