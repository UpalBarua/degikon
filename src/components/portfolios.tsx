import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PortfolioCards } from "./portfolio-cards";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export async function Portfolios() {
  return (
    <section
      style={{
        background:
          "linear-gradient(297deg, rgba(105,184,82,1) 10%, rgba(75,133,179,1) 65%)",
      }}
      className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.5em] border border-foreground/5 bg-primary py-14 shadow-lg"
    >
      <SectionHeading className="text-background/90">
        Showcase of Success: Explore Our Impact
      </SectionHeading>
      <SectionSubheading className="max-w-3xl text-background/70">
        Our results speak volumes. Dive into our portfolio to see how we've
        helped clients achieve their goals and surpass expectations.
      </SectionSubheading>
      <PortfolioCards />
      <Link
        href="/portfolios"
        className="mt-14 flex items-center gap-x-2 text-xl font-medium text-background/90 transition-colors hover:text-background/60"
      >
        <span>View All</span>
        <ChevronRight />
      </Link>
    </section>
  );
}
