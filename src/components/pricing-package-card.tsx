import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { pricingPackages } from "@/config";

type PricingPackage = (typeof pricingPackages)[number];

export function PricingPackageCard({
  name,
  services,
  features,
}: Readonly<PricingPackage>) {
  const servicesAndFeaturesList = {
    "Services Included": services,
    Features: features,
  };

  return (
    <Card
      classNames={{
        base: "h-full p-4 md:p-5 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
      }}
    >
      <CardHeader>
        <h3 className="text-3xl font-medium tracking-tight">{name}</h3>
      </CardHeader>
      <CardBody className="space-y-6">
        {Object.keys(servicesAndFeaturesList).map((key) => (
          <div key={key}>
            <h4 className="pb-2 text-sm font-medium text-foreground/80">
              {key}
            </h4>
            <ul className="space-y-2 leading-relaxed text-foreground/60">
              {servicesAndFeaturesList[
                key as keyof typeof servicesAndFeaturesList
              ].map((service) => (
                <li key={service} className="flex items-center gap-x-2">
                  <Check className="h-4 w-4 min-w-4 text-[#43ff64]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardBody>
      <CardFooter>
        <Link className="w-full" href="/get-quote">
          <Button
            color="primary"
            variant="solid"
            fullWidth
            size="lg"
            className="font-medium"
          >
            Get a Quote
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
