import prismaClient from "../prisma";

interface DeleteUserProps{
    id: string;
}

export class DeleteUserService {
    async execute({id}:DeleteUserProps) {
        
        if (!id) {
            throw new Error("Verifique o id do usuário");
        }
        
        const findUser = await prismaClient.user.findUnique({
            where: {
                id: id
            }
        });

        if (!findUser) {
            throw new Error("Usuário não existe no banco de dados");
        }

        await prismaClient.user.delete({
            where: {
                id: findUser.id
            }
        })

      
        return;
    }
}

