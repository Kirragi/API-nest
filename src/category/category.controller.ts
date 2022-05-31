import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Category } from "./category.model";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/category.dto";
import { searchCategoryDto } from "./dto/searchCategory.dto";

@ApiTags("Category")
@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: "Создание категории" })
  @ApiResponse({ status: 200, type: Category })
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }

  @ApiOperation({ summary: "Получение всех категорий" })
  @ApiResponse({ status: 200, type: Category })
  @Get()
  getAll() {
    return this.categoryService.getAllCategory();
  }

  @ApiOperation({ summary: "Получение категорию по id" })
  @Post("/One")
  getPostOne(@Body() dto: searchCategoryDto) {
    return this.categoryService.getCategoryOne(dto);
  }
}
