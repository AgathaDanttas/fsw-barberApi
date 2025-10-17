import prismaClient  from "../prisma";

export class GetUserByIdService {
    async execute(id: string) {
        return prismaClient.user.findUnique({
            where: { id }
        });
    }
}