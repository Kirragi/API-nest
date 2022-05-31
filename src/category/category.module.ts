import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "src/posts/posts.model";
import { CategoryController } from "./category.controller";
import { Category } from "./category.model";
import { CategoryService } from "./category.service";

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [SequelizeModule.forFeature([Category, Post])],
  exports: [CategoryService],
})
export class CategoryModule {}
