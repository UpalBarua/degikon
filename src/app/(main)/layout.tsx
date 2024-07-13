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
      <div
        style={{
          background:
            "linear-gradient(130deg, rgba(247,237,20,1) 0%, rgba(70,125,190,1) 50%)",
        }}
        className="fixed right-0 top-[-20%] size-[60rem] rounded-full opacity-35 blur-[10rem]"
      />
      <div
        style={{
          background:
            "linear-gradient(297deg, rgba(105,184,82,1) 35%, rgba(75,133,179,1) 70%)",
        }}
        className="fixed bottom-[-50%] left-0 size-[45rem] rounded-full bg-[#6BB953] opacity-25 blur-[10rem]"
      />
    </div>
  );
}
