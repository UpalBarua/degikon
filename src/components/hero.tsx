import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2">
      <div className="flex flex-col items-center gap-y-5 text-center md:items-start md:text-start">
        <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 font-medium uppercase tracking-wider backdrop-blur-xl backdrop-saturate-200">
          Growth Hacking 🚀
        </span>
        <h1 className="text-[clamp(2rem,_4vw+1rem,_4rem)] font-extrabold capitalize leading-tight tracking-tight">
          We craft digital marketing that converts!
        </h1>
        <p className="max-w-[30rem] text-lg leading-relaxed text-foreground-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga
          sint omnis ut ratione delectus error eius expedita optio nostrum quia
          repudiandae laborum, quis molestiae.
        </p>
        <div className="flex items-center gap-x-4 pt-4">
          <Button color="primary" size="lg">
            Get Started
          </Button>
          <Button variant="bordered" size="lg">
            <span>See Our Projects</span>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Image
        src="/images/hero-illustration.svg"
        alt="Hero Illustration"
        height="600"
        width="600"
      />
    </section>
  );
}
