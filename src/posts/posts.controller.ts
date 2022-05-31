import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { setPostDto } from "./dto/add-marks.dto";
import { CreatePostDto } from "./dto/create-post.dto";
import { searchPostDto } from "./dto/seaarchPost.dto";
import { PostsService } from "./posts.service";
@ApiTags("Posts")
@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: "Добавить товар" })
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.create(dto, image);
  }

  @ApiOperation({ summary: "Получение товара по id" })
  @Post("/One")
  getPostOne(@Body() dto: searchPostDto) {
    return this.postsService.getPostOne(dto);
  }

  @ApiOperation({ summary: "Выдать особую метку" })
  @ApiResponse({ status: 200 })
  @Post("/marks")
  addMarks(@Body() dto: setPostDto) {
    return this.postsService.addMarks(dto);
  }

  @ApiOperation({ summary: "Изменить скидку" })
  @ApiResponse({ status: 200 })
  @Post("/setDiscount")
  setDiscount(@Body() dto: setPostDto) {
    return this.postsService.setDiscount(dto);
  }

  @ApiOperation({ summary: "Убрать метку" })
  @ApiResponse({ status: 200 })
  @Delete("/marks")
  deleteMarks(@Body() dto: searchPostDto) {
    return this.postsService.deleteMarks(dto);
  }

  @ApiOperation({ summary: "Получение всех товаров" })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.postsService.getAllPosts();
  }

  @ApiOperation({ summary: "Получение всех товаров по категории" })
  @Post("/allPostsCategory")
  getAllPostCategory(@Body() dto: searchPostDto) {
    return this.postsService.getAllPostCategory(dto);
  }

  @ApiOperation({ summary: "Получение всех товаров по особой метке" })
  @Post("/allPostsMarks")
  getAllPostMarks(@Body() dto: searchPostDto) {
    return this.postsService.getAllPostMarks(dto);
  }
}
