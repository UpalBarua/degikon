export const dynamic = "force-dynamic";

import { ConfirmationModal } from "@/components/confirmation-modal";
import { NewPortfolioModal } from "@/components/new-portfolio-modal";
import { PortfolioPost } from "@/components/portfolio-post";
import { deletePortfolioById, getAllPortfolios } from "@/lib/services";
import { Ban } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolios Panel | degikon",
  description:
    "Access and update artist portfolios easily on our Portfolios page designed for admins.",
};

export default async function Portfolios() {
  const portfolios = await getAllPortfolios();

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-pretty px-4 pb-2 text-center text-[clamp(1.5rem,_4.5vw+1rem,_2.8125rem)] font-extrabold capitalize leading-snug tracking-tight md:pb-0">
          Portfolios
        </h1>
        <NewPortfolioModal />
      </div>
      <section>
        {portfolios.length ? (
          <div className="grid grid-cols-1 gap-8 px-0 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
            {portfolios.map(({ instagramURL, id }) => (
              <div key={id} className="flex flex-col gap-2">
                <PortfolioPost url={instagramURL} />
                <ConfirmationModal
                  onConfirm={async () => {
                    "use server";
                    deletePortfolioById(id as string);
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[20rem] w-full items-center justify-center text-center">
            <div className="catpitalize flex items-center gap-x-4 text-2xl capitalize text-foreground/40">
              <Ban />
              <span>No portfolios added</span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
