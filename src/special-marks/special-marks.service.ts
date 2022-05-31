import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { searchMarksDto } from "./dto/searchMarks.dto";
import { SpecialMarksDto } from "./dto/special-marks.dto";
import { SpecialMarks } from "./special-marks.model";

@Injectable()
export class SpecialMarksService {
  constructor(
    @InjectModel(SpecialMarks)
    private SpecialMarksRepository: typeof SpecialMarks
  ) {}

  async createSpecialMarks(Dto: SpecialMarksDto) {
    const specialMarks = await this.SpecialMarksRepository.create(Dto);
    return specialMarks;
  }

  async getAllSpecialMarks() {
    const specialMarks = await this.SpecialMarksRepository.findAll({
      include: { all: true },
    });
    return specialMarks;
  }

  async getSpecialMarksByValue(id: number) {
    const specialMarks = await this.SpecialMarksRepository.findOne({
      where: { id },
    });
    return specialMarks;
  }

  async getMarksOne(dto: searchMarksDto) {
    const posts = await this.SpecialMarksRepository.findAll({
      where: { id: dto.searchId },
    });
    return posts;
  }
}
