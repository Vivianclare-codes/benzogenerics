import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
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