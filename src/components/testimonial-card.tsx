import { cn } from "@/lib/cn";
import type { TTestimonial } from "@/types";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Star, UserRound } from "lucide-react";

export function TestimonialCard({
  comment,
  starRating,
  customer: { name, picture },
}: TTestimonial) {
  return (
    <Card
      classNames={{
        base: "group mb-4 p-2 dark:border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl dark:border-foreground/5 sm:break-inside-avoid sm:p-4 lg:p-5",
      }}
    >
      <CardHeader className="flex items-center gap-x-4">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src={picture}
          fallback={<UserRound />}
        />
        <div className="space-y-2">
          <h3 className="font-semibold leading-none">{name}</h3>
          <div className="flex items-center gap-x-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    starRating >= i + 1 ? "text-warning" : "text-[#8E8B9D]",
                  )}
                  fill={starRating >= i + 1 ? "#FFDE07" : "#8E8B9D"}
                />
              ))}
          </div>
        </div>
      </CardHeader>
      <CardBody className="leading-relaxed text-foreground-500">
        <p>{comment}</p>
      </CardBody>
    </Card>
  );
}
