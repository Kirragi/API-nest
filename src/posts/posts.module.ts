import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "src/category/category.model";
import { FilesModule } from "src/files/files.module";
import { SpecialMarks } from "src/special-marks/special-marks.model";
import { SpecialMarksModule } from "src/special-marks/special-marks.module";
import { User } from "src/users/users.model";
import { PostsController } from "./posts.controller";
import { Post } from "./posts.model";
import { PostsService } from "./posts.service";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    SequelizeModule.forFeature([User, Post, Category, SpecialMarks]),
    FilesModule,
    SpecialMarksModule,
  ],
})
export class PostsModule {}
