import { navLinks } from "@/config";
import { Button } from "@nextui-org/button";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { NavContainer } from "./nav-container";
import { PhoneForwarded } from "lucide-react";

export function MainNav() {
  return (
    <NavContainer>
      <NavbarContent className="hidden gap-3 md:flex" justify="end">
        {navLinks.map(({ label, href }) => (
          <NavbarItem key={href}>
            <Button
              variant="light"
              size="sm"
              className="text-base capitalize text-foreground/80"
            >
              <Link href={href}>{label}</Link>
            </Button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <a href="tel:01789012349">
            <Button className="bg-[#43ff64] font-medium text-background">
              <PhoneForwarded className="size-4" />
              <span>+1(425)7898720</span>
            </Button>
          </a>
        </NavbarItem>
      </NavbarContent>
    </NavContainer>
  );
}
