import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PostCreationAttrs {
  title: string;
  content: string;
  categoryId: number;
  specialMarksId: number;
  image: string;
  price: number;
  discount: number;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Новость дня", description: "Заголовок поста" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: "Контент новости", description: "Текст новости" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "img.png", description: "Имя изображения" })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: "1", description: "ID автора" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ApiProperty({ example: "1", description: "ID автора" })
  @Column({ type: DataType.INTEGER, allowNull: true })
  discount: number;

  @ApiProperty({ example: "1", description: "ID автора" })
  @Column({ type: DataType.INTEGER, allowNull: true })
  categoryId: number;

  @ApiProperty({ example: "1", description: "ID специальной метки" })
  @Column({ type: DataType.INTEGER, allowNull: true })
  specialMarksId: number;
}
