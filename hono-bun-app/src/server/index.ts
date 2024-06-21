import { Hono } from "hono";
import type { AppContext } from "./context";
import { handleError } from "./error";
import { registerMiddlewares } from "./middleware";

export function createServer() {
	const app = new Hono<AppContext>();

	registerMiddlewares(app);

	app.onError(handleError);

	return app;
}
