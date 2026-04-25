import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { forwardRef } from "react";

export function cn_(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Card ───────────────────────────────────────────────────────────────────

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

export function Card({ className, hover = false, glass = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 p-6",
        glass
          ? "bg-white/5 backdrop-blur-md"
          : "bg-white dark:bg-white/5",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-400/40 cursor-pointer group",
        className
      )}
      {...props}
    />
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────

const badgeColors: Record<string, string> = {
  Tech: "bg-blue-500/15 text-blue-400 border-blue-400/30",
  Business: "bg-orange-500/15 text-orange-400 border-orange-400/30",
  Leadership: "bg-purple-500/15 text-purple-400 border-purple-400/30",
  default: "bg-brand-500/15 text-brand-400 border-brand-400/30",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export function Badge({ className, color = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide",
        badgeColors[color] ?? badgeColors.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// ─── Input ───────────────────────────────────────────────────────────────────

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200",
              "border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              icon && "pl-10",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
