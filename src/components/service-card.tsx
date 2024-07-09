import { services } from "@/config/services";
import { Card } from "@nextui-org/card";

type ServiceCardProps = (typeof services)[number]["services"][number];

export function ServiceCard({ name, serviceDescription }: ServiceCardProps) {
  return (
    <Card
      classNames={{
        base: "mb-5 p-6 bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border border-foreground/10 sm:break-inside-avoid md:p-8",
      }}
    >
      <h3 className="pb-2 text-xl font-medium tracking-tight">{name}</h3>
      <p className="leading-relaxed text-foreground/60">{serviceDescription}</p>
    </Card>
  );
}
