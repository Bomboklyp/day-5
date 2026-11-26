import { defineEventHandler, readBody, setResponseStatus } from "h3";
import { requireUser } from "../../utils/auth";
import { createRequest } from "../../utils/requests";
import { createRequestSchema, parseInput } from "../../utils/schemas";
export default defineEventHandler(async (event) => {
  const user = requireUser(event);
  const input = parseInput(createRequestSchema, await readBody<unknown>(event));
  const result = await createRequest(user, input);
  setResponseStatus(event, 201);
  return result;
});
