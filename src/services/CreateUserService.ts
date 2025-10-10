import prismaClient  from '../prisma/index';


interface CreateUserProps{
    name: string,
    email: string,

}

export class CreateUserService{
    async execute({name,email}:CreateUserProps) {
       
        if (!name || !email) {
            throw new Error("Preencha todos os campos!!");
        }

        const user = await prismaClient.user.create({
            data:{
                 name,
                 email
            
            },
        });

        return user;
    }
}