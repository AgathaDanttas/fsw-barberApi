import fastify from 'fastify';
import { userRoutes } from '../src/routes/userRoutes';
import cors from '@fastify/cors'


const app = fastify({ logger: true });


const start = async () => {

    await app.register(cors);
    await app.register(userRoutes);

    try {
        await app.listen({ port: 3333 })
        return console.log("Api rodando com sucesso na port 3333✅")
    } catch (err) {
        process.exit(1)
        return console.log("Falha ao rodar Api❌")
    }
}

start()