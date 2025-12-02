import { useEffect, useRef, ReactNode } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

type HighlightColor =
  | "pink"
  | "yellow"
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "red"
  | "teal"
  | "peach"
  | "steel"
  | "violet";
type AnnotationType =
  | "highlight"
  | "underline"
  | "circle"
  | "box"
  | "bracket"
  | "rectangle";

interface RoughHighlightProps {
  children: ReactNode;
  color?: HighlightColor;
  type?: AnnotationType;
  animate?: boolean;
  delay?: number;
  className?: string;
}

const colorMap: Record<HighlightColor, string> = {
  pink: "hsl(330, 85%, 85%)",
  yellow: "hsl(48, 100%, 80%)",
  blue: "hsl(220, 85%, 85%)",
  purple: "hsl(270, 85%, 85%)",
  green: "hsl(150, 60%, 80%)",
  orange: "hsl(28, 100%, 80%)",
  red: "hsl(0, 85%, 80%)",
  teal: "hsl(170, 70%, 80%)",
  peach: "hsl(35, 100%, 88%)",
  steel: "hsl(210, 20%, 85%)",
  violet: "hsl(280, 70%, 88%)",
};

export const RoughHighlight = ({
  children,
  color = "yellow",
  type = "highlight",
  animate = true,
  delay = 0,
  className = "",
}: RoughHighlightProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    if (ref.current && !annotationRef.current) {
      annotationRef.current = annotate(ref.current, {
        type: type === "rectangle" ? "box" : type,
        color: colorMap[color],
        animate,
        animationDuration: 800,
        multiline: true,
        padding: type === "highlight" ? 2 : 5,
        strokeWidth: type === "underline" ? 2 : 1,
      });

      const timeout = setTimeout(() => {
        annotationRef.current?.show();
      }, delay);

      return () => {
        clearTimeout(timeout);
        annotationRef.current?.remove();
      };
    }
  }, [color, type, animate, delay]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
};
