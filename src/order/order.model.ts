import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface OrderCreationAttrs {
  products: string;
  userId: number;
  totalPrice: number;
  adres: string;
}

@Table({ tableName: "order" })
export class Order extends Model<Order, OrderCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "1,2,3", description: "id товаров" })
  @Column({ type: DataType.STRING, allowNull: false })
  products: string;

  @ApiProperty({ example: "1", description: "общая цена" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  totalPrice: number;

  @ApiProperty({ example: "1", description: "ID заказчика" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ApiProperty({ example: "Комарова 1", description: "адрес" })
  @Column({ type: DataType.STRING, allowNull: false })
  adres: string;
}
