import prismaClient from '../prisma';

export class CreateUserService{
    async execute() {
        console.log("Rota foi chamada");

        return{ok: true}
    }
}