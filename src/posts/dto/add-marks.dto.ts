import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class setPostDto {
  @ApiProperty({ example: "6", description: "значение" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly value: number;
  @ApiProperty({ example: "6", description: "ID товара" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly postId: number;
}
