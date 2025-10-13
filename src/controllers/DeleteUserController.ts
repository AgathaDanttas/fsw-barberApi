import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController{
    async handle(request: FastifyRequest, reply:FastifyReply) {
        
        try {
            const { id } = request.params as { id: string };
            
            const userService = new DeleteUserService();
            userService.execute({ id });
            
           return reply.send("Usuário deletado com sucesso");  
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes("obrigátorio") || error.message.includes("string válida")) {
                    return reply.status(400).send({ error: error.message });
                } else if (error.message.includes("não encontrado")) {
                    return reply.status(404).send({ error: error.message });
                }
            }

            return reply.status(500).send({ error: "Erro interno no servidor" });
        }
    }
}