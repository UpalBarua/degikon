import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { getTestimonialsFromDB } from "@/lib/services";
import { MotionDiv } from "./motion-div";
import { TestimonialCard } from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export async function Testimonials() {
  const testimonials = await getTestimonialsFromDB();

  if (!testimonials.length) return null;

  return (
    <section>
      <SectionHeading>Recommendations</SectionHeading>
      <SectionSubheading>
        Discover the beneficial effect of our services via client testimonials
      </SectionSubheading>
      <div className="hidden [column-fill:_balance] sm:block sm:columns-2 lg:columns-3">
        {testimonials.map((testimonial, i) => (
          <MotionDiv
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.125 * (i + 1),
            }}
            viewport={{
              once: true,
            }}
            key={testimonial.id}
          >
            <TestimonialCard {...testimonial} />
          </MotionDiv>
        ))}
      </div>
      <Carousel className="w-full sm:hidden">
        <div className="flex items-center justify-center gap-x-4 opacity-75">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
