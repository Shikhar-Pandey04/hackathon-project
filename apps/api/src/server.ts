import Fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";

const app = Fastify({
  logger: true,
});

await app.register(cors);

await app.register(multipart);

app.get("/", async () => {
  return {
    success: true,
    message: "Industrial Brain API Running 🚀",
  };
});

app.listen({
  port: 5000,
});