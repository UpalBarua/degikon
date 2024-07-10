import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { PortfolioCards } from "./portfolio-cards";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export async function Portfolios() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2.5em] bg-primary py-12 text-background">
      <SectionHeading>Showcase of Success: Explore Our Impact</SectionHeading>
      <SectionSubheading className="text-content max-w-3xl">
        Our results speak volumes. Dive into our portfolio to see how we've
        helped clients achieve their goals and surpass expectations.
      </SectionSubheading>
      <PortfolioCards />
      <Link
        href="/portfolios"
        className="mt-10 flex items-center gap-x-2 text-xl font-medium transition-colors hover:text-background/60"
      >
        <span>View All</span>
        <ChevronRight />
      </Link>
    </section>
  );
}
