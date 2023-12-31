import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    async execute(userRequest: UserRequest) {
        
        if (!userRequest.email) {
            throw new Error("E-mail is required.");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: userRequest.email
            }
        });

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const passwordHash = await hash(userRequest.password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: userRequest.name,
                email: userRequest.email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return user;
    }

}

export { CreateUserService }