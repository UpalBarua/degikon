"use client";

import { ServiceCard } from "@/components/service-card";
import { services } from "@/config/services";
import { Tab, Tabs } from "@nextui-org/tabs";

export function ServiceTabs() {
  return (
    <Tabs
      aria-label="services"
      color="primary"
      size="lg"
      radius="full"
      fullWidth
      classNames={{
        tabList:
          "border rounded-xl bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/10 overflow-x-scroll w-[calc(100dvw-1rem)] mx-auto md:w-full md:justify-between m-2",
        tab: "max-w-fit rounded-xl h-10 px-2 md:h-11 md:px-3 scroll-mx-[5rem]",
        cursor: "rounded-xl",
      }}
    >
      {services.map(({ category, Icon, services }) => (
        <Tab
          key={category}
          title={
            <div className="flex items-center space-x-1.5">
              <Icon className="h-5 w-5" />
              <span>{category}</span>
            </div>
          }
        >
          <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
