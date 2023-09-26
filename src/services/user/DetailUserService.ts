import prismaClient from "../../prisma";

class DetailUserSevice {

    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });
        return user;
    }

}

export { DetailUserSevice }