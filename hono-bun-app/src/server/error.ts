import type { ErrorHandler } from "hono";
import type { AppContext } from "./context";
import { HTTPException } from "hono/http-exception";

export const handleError: ErrorHandler<AppContext> = (err, c): Response => {
	switch (true) {
		case err instanceof HTTPException: {
			if (err.status >= 500) {
				// TODO: Sentry
			}

			return c.json(
				{
					error: {
						code: "error_code",
						message: err.message,
					},
				},
				err.status,
			);
		}
		default:
			return c.json(
				{
					error: {
						code: "INTERNAL_SERVER_ERROR",
						message: err.message ?? "something unexpected happened",
					},
				},
				500,
			);
	}
};
