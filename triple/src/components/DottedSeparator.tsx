import React from "react";
import { cn } from "@/lib/utils";

interface DSProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}

const DottedSeparator = ({
  className,
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DSProps) => {
  const isHorizontal = direction === "horizontal";

  const dot = parseInt(dotSize);
  const gap = parseInt(gapSize);
  const totalSize = dot + gap;

  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className,
      )}
    >
      <div
        className={isHorizontal ? "w-full" : "h-full"}
        style={{
          width: isHorizontal ? "100%" : dotSize,
          height: isHorizontal ? dotSize : "100%",
          backgroundImage: `radial-gradient(circle, ${color} 40%, transparent 40%)`,
          backgroundSize: isHorizontal
            ? `${totalSize}px ${dotSize}`
            : `${dotSize} ${totalSize}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default DottedSeparator;
