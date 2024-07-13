import { SectionHeading } from "@/components/ui/section-heading";
import { NewTestimonialModal } from "@/components/new-testimonial-modal";
import { getTestimonialsFromDB, deleteTestimonialById } from "@/lib/services";
import { TestimonialCard } from "@/components/testimonial-card";
import { ConfirmationModal } from "@/components/confirmation-modal";

export default async function TestimonialPage() {
  const testimonials = await getTestimonialsFromDB();

  return (
    <main>
      <div className="flex items-center justify-between">
        <SectionHeading>Testimonial</SectionHeading>
        <NewTestimonialModal />
      </div>
      <section>
        <div className="grid grid-cols-1 gap-8 px-0 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard {...testimonial} />
              <ConfirmationModal
                onConfirm={async () => {
                  "use server";
                  deleteTestimonialById(testimonial.id as string);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
