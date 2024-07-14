export const dynamic = "force-dynamic";

import { NewsletterTable } from "@/components/newsletter-table";
import { getAllNewsletterEmails } from "@/lib/services";
import type { Metadata } from "next";
import { Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter Panel | degikon",
  description:
    "Efficiently manage and access client email submissions on our Newsletter page.",
};

export default async function Newsletter() {
  const newsletterEmails = await getAllNewsletterEmails();

  return (
    <section>
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-pretty px-4 pb-2 text-center text-[clamp(1.5rem,_4.5vw+1rem,_2.8125rem)] font-extrabold capitalize leading-snug tracking-tight md:pb-0">
          Newsletters
        </h1>
      </div>
      {newsletterEmails.length ? (
        <NewsletterTable emails={newsletterEmails} />
      ) : (
        <div className="flex min-h-[20rem] w-full items-center justify-center text-center">
          <div className="catpitalize flex items-center gap-x-4 text-2xl capitalize text-foreground/40">
            <Ban />
            <span>No emails added</span>
          </div>
        </div>
      )}
    </section>
  );
}
