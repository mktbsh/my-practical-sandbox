import { createServer } from "./server";

const server = createServer();

server.get("/", (c) => {
	return c.text("Hello Hono!");
});

server.get("/health", (c) =>
	c.json({
		ok: true,
	}),
);

export default server;
