import { createMiddleware } from "hono/factory";
import type { AppContext } from "../context";

export const requestId = createMiddleware<AppContext>(async (c, next) => {
	c.set("requestId", crypto.randomUUID());
	await next();
});
