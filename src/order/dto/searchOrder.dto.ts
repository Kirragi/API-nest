import { ApiProperty } from "@nestjs/swagger";

export class orderSearchDto {
  @ApiProperty({ example: "1", description: "Id" })
  readonly searchId: number;
}
