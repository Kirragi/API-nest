import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { setPostDto } from "src/posts/dto/add-marks.dto";
import { searchMarksDto } from "./dto/searchMarks.dto";
import { SpecialMarksDto } from "./dto/special-marks.dto";
import { SpecialMarks } from "./special-marks.model";
import { SpecialMarksService } from "./special-marks.service";

@ApiTags("Special-marks")
@Controller("special-marks")
export class SpecialMarksController {
  constructor(private specialMarksService: SpecialMarksService) {}

  @ApiOperation({ summary: "Создание специальной метки" })
  @ApiResponse({ status: 200, type: SpecialMarks })
  @Post()
  create(@Body() dto: SpecialMarksDto) {
    return this.specialMarksService.createSpecialMarks(dto);
  }

  @ApiOperation({ summary: "Получение всех специальных меток" })
  @ApiResponse({ status: 200, type: SpecialMarks })
  @Get()
  getAll() {
    return this.specialMarksService.getAllSpecialMarks();
  }

  @ApiOperation({ summary: "Получение метку по id" })
  @Post("/One")
  getPostOne(@Body() dto: searchMarksDto) {
    return this.specialMarksService.getMarksOne(dto);
  }
}
