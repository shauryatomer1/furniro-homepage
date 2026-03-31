type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: JsonValue;
};

export async function requestJson<TResponse>(
  input: RequestInfo | URL,
  init: RequestOptions = {},
) {
  const headers = new Headers(init.headers);

  if (init.body !== undefined) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(input, {
    ...init,
    headers,
    body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
  });

  const payload = (await response.json().catch(() => null)) as
    | TResponse
    | { message?: string }
    | null;

  if (!response.ok) {
    throw new Error(
      payload && typeof payload === "object" && "message" in payload
        ? payload.message || "Something went wrong."
        : "Something went wrong.",
    );
  }

  return payload as TResponse;
}
