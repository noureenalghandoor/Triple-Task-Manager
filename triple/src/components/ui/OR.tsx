import React from "react";

type SeparatorProps = {
    label?: string; // default: "or"
    className?: string;
    lineClassName?: string;
    labelClassName?: string;
};

export function Separator({
                              label = "or",
                              className = "",
                              lineClassName = "",
                              labelClassName = "",
                          }: SeparatorProps) {
    return (
        <div
            className={`flex items-center gap-3 w-full ${className}`}
            role="separator"
            aria-label={label}
        >
            <span className={`h-px flex-1 bg-border/60 ${lineClassName}`} />
            <span
                className={`text-xs uppercase tracking-wider text-muted-foreground px-1 ${labelClassName}`}
            >
        {label}
      </span>
            <span className={`h-px flex-1 bg-border/60 ${lineClassName}`} />
        </div>
    );
}