import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from "src/files/files.service";
import { SpecialMarksService } from "src/special-marks/special-marks.service";
import { setPostDto } from "./dto/add-marks.dto";
import { CreatePostDto } from "./dto/create-post.dto";
import { searchPostDto } from "./dto/seaarchPost.dto";
import { Post } from "./posts.model";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService,
    private specialMarksService: SpecialMarksService
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: fileName });
    return post;
  }

  async deleteMarks(dto: searchPostDto) {
    const id = dto.searchId;
    const post = await this.postRepository.findOne({ where: { id } });
    if (post) {
      await post.set({ ...post, specialMarksId: null });
      await post.save();
      return post;
    }
    throw new HttpException("Товар или метка не найдены", HttpStatus.NOT_FOUND);
  }

  async addMarks(dto: setPostDto) {
    const id = dto.postId;
    const post = await this.postRepository.findOne({ where: { id } });
    const marks = await this.specialMarksService.getSpecialMarksByValue(
      dto.value
    );
    if (post && marks) {
      await post.set({ ...post, specialMarksId: marks.id });
      await post.save();
      return post;
    }
    throw new HttpException("Товар или метка не найдены", HttpStatus.NOT_FOUND);
  }

  async setDiscount(dto: setPostDto) {
    const id = dto.postId;
    const post = await this.postRepository.findOne({ where: { id } });
    if (post) {
      await post.set({ ...post, discount: dto.value });
      await post.save();
      return post;
    }
    throw new HttpException("Товар не найден", HttpStatus.NOT_FOUND);
  }

  async getAllPosts() {
    const posts = await this.postRepository.findAll({
      include: { all: true },
    });
    return posts;
  }

  async getAllPostCategory(dto: searchPostDto) {
    const posts = await this.postRepository.findAll({
      where: { categoryId: dto.searchId },
    });
    return posts;
  }

  async getAllPostMarks(dto: searchPostDto) {
    const posts = await this.postRepository.findAll({
      where: { specialMarksId: dto.searchId },
    });
    return posts;
  }

  async getPostOne(dto: searchPostDto) {
    const posts = await this.postRepository.findAll({
      where: { id: dto.searchId },
    });
    return posts;
  }
}
