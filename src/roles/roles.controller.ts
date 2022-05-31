import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";
import { RolesService } from "./roles.service";

@ApiTags("Role")
@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: "Создание роли" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: "Удаление роли" })
  @Delete("/:id")
  deletRole(@Param("id") id: number) {
    return this.rolesService.deleteRole(id);
  }
}
