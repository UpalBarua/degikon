import { Card } from "@nextui-org/card";
import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Newsletter() {
  return (
    <Card
      classNames={{
        base: [
          "border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
          "gap-6 p-4 items-start relative z-50 lg:flex-row lg:items-center",
        ],
      }}
    >
      <Image
        src="/images/newsletter.jpg"
        alt="newsletter image"
        quality={95}
        height={500}
        width={500}
        className="absolute left-0 top-0 h-full max-h-[25rem] w-full border-foreground/10 object-cover object-center lg:max-h-full lg:w-auto lg:max-w-[30rem] lg:border-r"
      />
      <div className="space-y-2 p-4 pt-[25rem] lg:p-8 lg:pl-[32rem]">
        <SectionHeading className="pl-0 text-start">
          Join Our Exclusive Newsletter! Stay Ahead of the Curve Join Our
          Exclusive Newsletter!
        </SectionHeading>
        <SectionSubheading className="mx-0 max-w-full px-0 text-start">
          Dive into the latest trends, insights, and tips in the digital world
          with <span className="font-semibold">degikon </span>
          newsletter. Signing up is quick and easy! Just enter your email below,
          and let us bring the future of digital innovation straight to you.
        </SectionSubheading>
        <NewsletterForm />
      </div>
    </Card>
  );
}
