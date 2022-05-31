import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";
import { CreateCategoryDto } from "./dto/category.dto";
import { searchCategoryDto } from "./dto/searchCategory.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category
  ) {}

  async createCategory(Dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(Dto);
    return category;
  }

  async getAllCategory() {
    const category = await this.categoryRepository.findAll({
      include: { all: true },
    });
    return category;
  }

  async getCategoryOne(dto: searchCategoryDto) {
    const posts = await this.categoryRepository.findAll({
      where: { id: dto.searchId },
    });
    return posts;
  }
}
