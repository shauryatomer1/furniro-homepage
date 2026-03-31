import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
});

// In-memory storage keeps the demo API self-contained for this task.
const subscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { email } = newsletterSchema.parse(payload);
    const normalizedEmail = email.toLowerCase();

    if (subscribers.has(normalizedEmail)) {
      return NextResponse.json(
        {
          message:
            "This email is already subscribed to the Furniro newsletter.",
        },
        { status: 409 },
      );
    }

    subscribers.add(normalizedEmail);

    return NextResponse.json(
      {
        message: "Thanks for subscribing to the Furniro newsletter.",
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message:
            error.issues[0]?.message || "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        message: "Unable to subscribe right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
