"use client";

import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="layout-shell flex flex-1 items-center justify-center py-24">
      <div className="border-border max-w-md space-y-4 rounded-[24px] border bg-white p-8 text-center shadow-sm">
        <AlertCircle className="text-brand mx-auto size-10" />
        <h1 className="text-foreground text-3xl font-bold">
          We hit a snag loading the homepage
        </h1>
        <p className="text-muted text-sm leading-6">
          The content service did not return the homepage payload as expected.
          You can retry without losing the rest of the app shell.
        </p>
        <Button onClick={reset} className="h-12 rounded-none px-8">
          Try again
        </Button>
      </div>
    </main>
  );
}
