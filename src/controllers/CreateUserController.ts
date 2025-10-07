import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController{
    async handle(request:FastifyRequest,reply:FastifyReply) {
    
        const userService = new CreateUserService();
        const user = await userService.execute();

        reply.send(user);
    }
}