import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { Post } from "./posts/posts.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import { CategoryModule } from "./category/category.module";
import * as path from "path";
import { Category } from "./category/category.model";
import { SpecialMarksModule } from "./special-marks/special-marks.module";
import { SpecialMarks } from "./special-marks/special-marks.model";
import { ReviewModule } from "./review/review.module";
import { Review } from "./review/review.model";
import { OrderModule } from "./order/order.module";
import { Order } from "./order/order.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Post,
        Category,
        SpecialMarks,
        Review,
        Order,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    CategoryModule,
    SpecialMarksModule,
    ReviewModule,
    OrderModule,
  ],
})
export class AppModule {}
