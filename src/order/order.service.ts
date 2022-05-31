import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { orderSearchDto } from "./dto/searchOrder.dto";
import { Order } from "./order.model";

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepository: typeof Order) {}

  async createOrder(Dto: CreateOrderDto) {
    const order = await this.orderRepository.create(Dto);
    return order;
  }

  async getAllOrders() {
    const order = await this.orderRepository.findAll({
      include: { all: true },
    });
    return order;
  }

  async getUserOrders(dto: orderSearchDto) {
    const order = await this.orderRepository.findAll({
      where: { userId: dto.searchId },
    });
    return order;
  }

  async deleteOrder(id: number) {
    const order = await this.orderRepository.destroy({ where: { id } });
    return order;
  }
}
