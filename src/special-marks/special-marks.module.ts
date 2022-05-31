import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "src/posts/posts.model";
import { SpecialMarksController } from "./special-marks.controller";
import { SpecialMarks } from "./special-marks.model";
import { SpecialMarksService } from "./special-marks.service";

@Module({
  controllers: [SpecialMarksController],
  providers: [SpecialMarksService],
  imports: [SequelizeModule.forFeature([SpecialMarks, Post])],
  exports: [SpecialMarksService],
})
export class SpecialMarksModule {}
