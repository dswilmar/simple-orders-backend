import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {

    async execute(order: OrderRequest) {
        
        const createdOrder = await prismaClient.order.create({
            data: {
                table: order.table,
                name: order.name
            }
        });

        return createdOrder;
    }
}

export { CreateOrderService }