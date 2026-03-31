"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { subscribeToNewsletter } from "@/services/newsletter-service";

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function useNewsletterForm() {
  const [serverMessage, setServerMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setServerMessage("");
    setIsSuccess(false);

    try {
      const response = await subscribeToNewsletter(values);

      setServerMessage(response.message);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now. Please try again.",
      );
    }
  });

  return {
    form,
    onSubmit,
    serverMessage,
    isSuccess,
  };
}
