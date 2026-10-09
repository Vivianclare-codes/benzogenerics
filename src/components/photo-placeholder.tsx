import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label,
  className,
  src,
  alt,
}: {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={cn("block h-full w-full object-cover", className)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-xl border border-dashed border-[#2F6FAE]/50 bg-[#DCE8F1] p-5 text-center text-sm text-[#1F5185]",
        className
      )}
    >
      {label}
    </div>
  );
}