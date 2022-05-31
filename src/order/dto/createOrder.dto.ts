import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiProperty({ example: "1,2,3", description: "id товаров" })
  readonly products: string;

  @ApiProperty({ example: "Комарова 1", description: "адрес" })
  readonly adres: string;

  @ApiProperty({ example: "1", description: "Id заказчика" })
  readonly userId: number;
  @ApiProperty({ example: "1", description: "общая цена" })
  readonly totalPrice: number;
}
