import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserContrtoller";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { request } from "http";


export async function userRoutes(fastify: FastifyInstance,) {

    fastify.get("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().listAll(request,reply);
    });

    fastify.get("/user/:id", async (request:FastifyRequest, reply:FastifyReply) => {
        return new ListUserController().getById(request,reply);
    });

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    });

    fastify.delete("/user/:id", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new DeleteUserController().handle(request, reply);
    });
}