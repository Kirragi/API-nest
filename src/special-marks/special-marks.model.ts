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

interface SpecialMarksCreationAttrs {
  value: string;
}
@Table({ tableName: "SpecialMarks" })
export class SpecialMarks extends Model<
  SpecialMarks,
  SpecialMarksCreationAttrs
> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Скидка",
    description: "Особая метка товара",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;
}
