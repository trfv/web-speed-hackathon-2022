import fastifyCompress from "@fastify/compress";
import fastifySensible from "@fastify/sensible";
import fastify from "fastify";

import { User } from "../model/index.js";

import { apiRoute } from "./routes/api.js";
import { spaRoute } from "./routes/spa.js";
import { createConnection } from "./typeorm/connection.js";
import { initialize } from "./typeorm/initialize.js";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const server = fastify({
  http2: IS_PRODUCTION,
  logger: IS_PRODUCTION
    ? false
    : {
        transport: {
          options: {
            ignore: "pid,hostname",
            translateTime: "SYS:HH:MM:ss",
          },
          target: "pino-pretty",
        },
      },
});
server.register(fastifyCompress, { global: true });
server.register(fastifySensible);

server.addHook("onRequest", async (req, res) => {
  const repo = (await createConnection()).getRepository(User);

  const userId = req.headers["x-app-userid"];
  if (userId !== undefined) {
    const user = await repo.findOneBy({ id: userId });
    if (user === undefined) {
      res.unauthorized();
      return;
    }
    req.user = user;
  }
});

server.addHook("onRequest", async (req, res) => {
  res.header("Cache-Control", "public, max-age=5000, stale-while-revalidate=500");
  res.header("Connection", "keep-alive");
});

server.register(apiRoute, { prefix: "/api" });
server.register(spaRoute);

const start = async () => {
  try {
    await initialize();
    await server.listen({ host: "0.0.0.0", port: process.env.PORT || 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
