import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {

    async execute(category: CategoryRequest) {
        
        if (category.name === "") {
            throw new Error("Invalid name.")
        }

        const createCategory = await prismaClient.category.create({
            data: {
                name: category.name
            },
            select: {
                id: true,
                name: true
            }
        });

        return createCategory;

    }
}

export { CreateCategoryService }