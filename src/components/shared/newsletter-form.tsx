"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNewsletterForm } from "@/hooks/use-newsletter-form";

export default function NewsletterForm() {
  const { form, onSubmit, serverMessage, isSuccess } = useNewsletterForm();

  const feedbackMessage = form.formState.errors.email?.message || serverMessage;

  return (
    <div className="space-y-2">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-start"
      >
        <div className="w-full">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email address
          </Label>
          <Input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Enter Your Email Address"
            {...form.register("email")}
            className="border-border h-auto rounded-none border-0 border-b px-0 py-2 text-sm shadow-none focus-visible:ring-0"
          />
        </div>
        <Button
          type="submit"
          variant="link"
          className="h-auto shrink-0 rounded-none px-0 py-2 text-sm font-medium uppercase"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      <p
        aria-live="polite"
        className={cn(
          "min-h-5 text-sm",
          isSuccess ? "text-brand" : "text-danger",
        )}
      >
        {feedbackMessage || "\u00A0"}
      </p>
    </div>
  );
}
