import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController{
    async handle(request:FastifyRequest,reply:FastifyReply) {
        const { name, email } = request.body as { name: string, email: string };
        
        console.log(name);
        console.log(email);

        const userService = new CreateUserService();
        const user = await userService.execute({ name, email });

        reply.send(user);
    }
}