import { FastifyReply, FastifyRequest } from "fastify";
import { ListUserService } from "../services/ListUserService";
import { GetUserByIdService } from "../services/GetUserByIdService";

export class ListUserController{
    async listAll(request: FastifyRequest, reply: FastifyReply) {
        
        const listUserService = new ListUserService();
        const users = await listUserService.execute();

        reply.send(users);
    }

    async getById(request:FastifyRequest, reply:FastifyReply) {
        const { id } = request.params as { id: string };
        const user = await new GetUserByIdService().execute(id);

        if (!user) {
            return reply.status(404).send({error: "Usuário não encontrado"})
        }

        return reply.send(user);
    }
}