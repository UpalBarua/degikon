import { cn } from "@/lib/cn";
import * as React from "react";
import { MotionDiv } from "../motion-div";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1
        className={cn(
          "text-pretty px-4 pb-2 text-center text-[clamp(1.5rem,_4.5vw+1rem,_2.8125rem)] font-extrabold capitalize leading-snug tracking-tight md:pb-4",
          className,
        )}
      >
        {children}
      </h1>
    </MotionDiv>
  );
}
