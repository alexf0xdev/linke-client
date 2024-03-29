"use client";

import { cn } from "@/lib/utils";
import { useLinksStore } from "@/store/links";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

const Home = () => {
  const { links } = useLinksStore();

  return (
    <div className={cn("flex flex-col min-h-screen px-2")}>
      <main className={cn("flex-1 mx-auto w-full max-w-2xl")}>
        <Hero />
        {links.length > 0 && (
          <div className={cn("mt-20")}>
            <h2 className={cn("text-2xl font-semibold")}>Ваши ссылки</h2>
            <Links links={links} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
