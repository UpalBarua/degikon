import { socialLinks } from "@/config";
import { services } from "@/config/services";
import { Button } from "@nextui-org/button";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 space-y-14 border-t border-foreground/5 bg-content1/65 pb-6 pt-12 text-foreground/60 backdrop-blur-xl backdrop-saturate-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <Image
            src="/images/named-logo.png"
            alt="logo"
            height={80}
            width={160}
            className="pb-6 pt-8 lg:p-0"
          />
          <p>Copyright © 2024 degikon.com</p>
          <Link href="/contact-us">
            <Button color="primary" className="mt-4">
              <span>Hire us now</span>
            </Button>
          </Link>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-semibold text-foreground">
            Services
          </h3>
          <ul className="flex flex-col gap-y-2">
            {services.map(({ category }) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-semibold text-foreground">
            Contacts
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-x-2.5">
              <PhoneCall className="h-5 w-5" />
              <span>+88012345678</span>
            </li>
            <li className="flex items-center gap-x-2.5">
              <Mail className="h-5 w-5" />
              <span>info@degikon.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="pb-4 text-2xl font-semibold text-foreground">
            Office Address
          </h1>
          <ul className="flex items-center gap-x-2.5">
            <MapPin className="h-5 w-5" />
            <ul>
              <li>Your location here</li>
              <li>Your location here</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center gap-1 sm:flex-row md:gap-4">
          <Link
            href="/privacy-policy"
            className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact-us"
            className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            Support
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ Icon, link }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              className="rounded-full border border-foreground/5 bg-content1/65 p-3 backdrop-blur-xl backdrop-saturate-200 transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
