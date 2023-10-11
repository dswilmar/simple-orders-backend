import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {

    async execute(product: ProductRequest) {
        const createdProduct = await prismaClient.product.create({
            data: {
                name: product.name,
                price: product.price,
                description: product.description,
                banner: product.banner,
                category_id: product.category_id
            }
        });

        return createdProduct;
    }
}

export { CreateProductService }