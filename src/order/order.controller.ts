import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { orderSearchDto } from "./dto/searchOrder.dto";
import { Order } from "./order.model";
import { OrderService } from "./order.service";

@ApiTags("Order")
@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @ApiOperation({ summary: "Создание заказа" })
  @ApiResponse({ status: 200, type: Order })
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(dto);
  }

  @ApiOperation({ summary: "Получение всех заказов" })
  @ApiResponse({ status: 200, type: Order })
  @Get()
  getAll() {
    return this.orderService.getAllOrders();
  }
  @ApiOperation({ summary: "Получение всех заказов пользователя" })
  @ApiResponse({ status: 200, type: Order })
  @Post("/post")
  getUserOrders(@Body() dto: orderSearchDto) {
    return this.orderService.getUserOrders(dto);
  }

  @ApiOperation({ summary: "Удаление заказа" })
  @Delete("/:id")
  deletOrder(@Param("id") id: number) {
    return this.orderService.deleteOrder(id);
  }
}
