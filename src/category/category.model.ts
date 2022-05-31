import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Post } from "src/posts/posts.model";

interface CategoryCreationAttrs {
  value: string;
}
@Table({ tableName: "category" })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Техника",
    description: "Категория",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;
}
