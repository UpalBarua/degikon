import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { employees } from "@/config";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Degikon",
  description:
    "Meet the Degikon team! We bring your digital vision to life. Discover our services and values.",
};

export default function AboutUs() {
  return (
    <section className="container relative z-10 mx-auto max-w-6xl scroll-m-6 space-y-[min(4rem,8dvw)] px-4 pt-[max(3dvw,0rem)]">
      <div>
        <SectionHeading className="p-0 text-start">About us</SectionHeading>
        <p className="text-[1.25rem] leading-relaxed text-foreground/80">
          <span className="font-semibold">Degikon</span> distinguishes itself as
          more than a digital agency by employing innovators, creators and
          strategists who are committed to propelling your brand forward in the
          digital era. With a founding principle of flourishing and imagining
          the extraordinary, our organization provides a range of services
          tailored to enhance the online visibility and interaction of your
          brand.
        </p>
      </div>

      <div className="space-y-2 text-[1.25rem] leading-relaxed text-foreground/80">
        <p>
          <span className="font-semibold">Degikon</span> streamlines your
          digital projects, transforming them from concept to reality swiftly
          and efficiently. Our simplified submission process means your project
          starts in minutes, not days. With our expert team, expect rapid
          turnarounds without sacrificing quality—outperforming traditional
          freelance rates thanks to our extensive network and operational
          efficiencies.
        </p>
        <p>
          We specialize in a wide range of digital services, including SEO,
          branding, website design, video editing, and animation, all tailored
          to boost your online presence. Our approach is not just about
          delivering projects but ensuring they resonate with your audience,
          leveraging the latest trends and techniques.
        </p>
        <p>
          Choose <span className="font-semibold">Degikon </span>for competitive
          pricing, fast delivery, and quality that elevates your brand above the
          rest. Partner with us to enhance your digital footprint efficiently
          and make your brand stand out in the digital landscape.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card
          classNames={{
            base: "h-full p-4 md:p-5 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
          }}
        >
          <CardHeader className="pb-2">
            <h3 className="text-3xl font-bold tracking-tight">
              Our Aspiration
            </h3>
          </CardHeader>
          <CardBody>
            <p className="text-[1.25rem] leading-relaxed text-foreground/80">
              To revolutionize the industry by crafting brand stories that
              inspire, engage, and forge deep connections with people. Our
              mission is to create memorable narratives that resonate on an
              emotional level, driving meaningful engagement and lasting impact.
            </p>
          </CardBody>
        </Card>
        <Card
          classNames={{
            base: "h-full p-4 md:p-5 border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
          }}
        >
          <CardHeader className="pb-2">
            <h3 className="text-3xl font-bold tracking-tight">
              Our Commitment
            </h3>
          </CardHeader>
          <CardBody>
            <p className="text-[1.25rem] leading-relaxed text-foreground/80">
              To excel in the digital realm by utilizing innovative strategies,
              data-driven insights, and advanced technologies. We aim to drive
              growth, boost engagement, and ensure brand success by delivering
              measurable results and surpassing client expectations.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="pt-6">
        <SectionHeading>
          Introducing the Visionaries Behind the Magic
        </SectionHeading>
        <SectionSubheading className="max-w-full pb-8">
          Dedicated professionals unite to deliver innovative solutions that
          surpass customer expectations.
        </SectionSubheading>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {employees.map((employee) => (
            <Employee key={employee.name} {...employee} />
          ))}
        </div>
      </div>
    </section>
  );
}

type EmployeeProps = (typeof employees)[number];

function Employee({ name, image, position }: EmployeeProps) {
  return (
    <Card
      classNames={{
        base: "h-full border bg-content1/65 backdrop-saturate-200 backdrop-blur-xl border-foreground/5",
      }}
    >
      <CardBody className="p-6 text-start text-[1.25rem]">
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className="h-full w-full rounded-md object-cover object-center"
        />
        <h3 className="pb-2 pt-6 font-semibold">{name}</h3>
        <span className="text-foreground/80">{position}</span>
      </CardBody>
    </Card>
  );
}
