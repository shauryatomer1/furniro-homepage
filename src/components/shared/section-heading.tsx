import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" ? "mx-auto max-w-[560px] text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-foreground/80 text-base font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-foreground text-[28px] leading-tight font-bold md:text-[32px]">
        {title}
      </h2>
      {description ? (
        <p className="text-muted text-base leading-7 md:text-[20px] md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
