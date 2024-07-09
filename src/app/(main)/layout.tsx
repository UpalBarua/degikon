import { Footer } from "@/components/footer";
import { MainNav } from "@/components/navbar/main-nav";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1">
        <MainNav />
        {children}
      </div>
      <Footer />
      <div className="fixed right-0 top-[-20%] size-[60rem] rounded-full bg-[#497CBE] opacity-30 blur-[10rem]" />
      <div className="fixed bottom-[-80%] left-0 size-[45rem] rounded-full bg-[#6BB953] opacity-25 blur-[10rem]" />
    </div>
  );
}
