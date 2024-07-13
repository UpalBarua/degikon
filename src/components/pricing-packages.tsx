import { PricingPackageCard } from "@/components/pricing-package-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { pricingPackages } from "@/config";
import { MotionDiv } from "./motion-div";

export async function PricingPackages() {
  return (
    <section id="packages" className="scroll-mt-[4rem]">
      <SectionHeading>Our Packages</SectionHeading>
      <SectionSubheading>
        Explore our customizable packages for your specific needs
      </SectionSubheading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {pricingPackages?.map((pricingPackage, i) => (
          <MotionDiv
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.125 * (i + 1),
            }}
            viewport={{
              once: true,
            }}
            key={pricingPackage.name}
          >
            <PricingPackageCard {...pricingPackage} />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
