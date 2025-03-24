import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { INavItem } from "@/types/nav";
import { SessionProvider } from "next-auth/react";

const navLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];
const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-gray-200/80 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <SessionProvider>
          <div className="container mx-auto flex h-20 items-center justify-between py-6 ">
            <MainNav items={navLinks} />
          </div>
        </SessionProvider>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
