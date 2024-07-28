import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "./motion-div";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center justify-items-center pt-[5rem] md:pt-[2.5rem] lg:grid-cols-2">
      <div className="flex flex-col items-center gap-y-5 text-center lg:items-start lg:text-start">
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-full border border-foreground/10 bg-content1/65 px-4 py-2 font-medium uppercase tracking-wider backdrop-blur-xl backdrop-saturate-200">
            Growth Hacking 🚀
          </span>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.125 }}
        >
          <h1 className="text-pretty text-[clamp(2rem,_9vw+1rem,_4rem)] font-extrabold capitalize leading-tight tracking-tight">
            We craft digital marketing that converts!
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="max-w-[35rem] text-lg leading-relaxed text-foreground-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga
            sint omnis ut ratione delectus error eius expedita optio nostrum
            quia repudiandae laborum, quis molestiae.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="flex items-center gap-x-4 pt-4">
            <Link href="/contact-us">
              <Button
                color="primary"
                size="lg"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/portfolios">
              <Button
                className="border border-foreground/10 bg-content1/65 font-medium backdrop-blur-xl backdrop-saturate-200"
                size="lg"
              >
                <span>See Our Projects</span>
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
      >
        <Image
          src="/images/hero-illustration.svg"
          alt="Hero Illustration"
          height="600"
          width="600"
        />
      </MotionDiv>
    </section>
  );
}
