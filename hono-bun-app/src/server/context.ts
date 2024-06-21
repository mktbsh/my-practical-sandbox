import type { Context, Env } from "hono";
import type { Variables } from "hono/types";

export interface AppContext extends Env {
	Variables: {
		requestId: string;
	};
}

export function getRequestId(c: Context<AppContext>): string {
	return c.get("requestId");
}
