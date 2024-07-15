import { ConfirmationModal } from "@/components/confirmation-modal";
import { NewTestimonialModal } from "@/components/new-testimonial-modal";
import { TestimonialCard } from "@/components/testimonial-card";
import { deleteTestimonialById, getTestimonialsFromDB } from "@/lib/services";
import { Ban } from "lucide-react";

export default async function TestimonialPage() {
  const testimonials = await getTestimonialsFromDB();

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-pretty px-4 pb-2 text-center text-[clamp(1.5rem,_4.5vw+1rem,_2.8125rem)] font-extrabold capitalize leading-snug tracking-tight md:pb-0">
          Testimonial
        </h1>
        <NewTestimonialModal />
      </div>
      <section>
        {testimonials.length ? (
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
        ) : (
          <div className="flex min-h-[20rem] w-full items-center justify-center text-center">
            <div className="catpitalize flex items-center gap-x-4 text-2xl capitalize text-foreground/40">
              <Ban />
              <span>No testimonials added</span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
