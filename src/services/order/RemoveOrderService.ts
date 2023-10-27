import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class RemoveOrderService {

    async execute(order: OrderRequest) {

        const deletedOrder = await prismaClient.order.delete({
            where: {
                id: order.order_id
            }
        });

        return deletedOrder;
    }
}

export { RemoveOrderService }