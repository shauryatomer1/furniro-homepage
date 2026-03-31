import { requestJson } from "@/lib/api/http";

type NewsletterPayload = {
  email: string;
};

export type NewsletterResponse = {
  message: string;
};

export async function subscribeToNewsletter(payload: NewsletterPayload) {
  return requestJson<NewsletterResponse>("/api/newsletter", {
    method: "POST",
    cache: "no-store",
    body: payload,
  });
}
