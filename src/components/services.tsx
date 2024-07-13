import { MotionDiv } from "./motion-div";
import { ServiceTabs } from "./service-tabs";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-[4rem]">
      <SectionHeading>Explore What We Have to Offer</SectionHeading>
      <SectionSubheading>
        Unlock new heights for your business with our extensive range of
        services.
      </SectionSubheading>
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
          delay: 0.75,
        }}
        viewport={{
          once: true,
        }}
      >
        <ServiceTabs />
      </MotionDiv>
    </section>
  );
}
