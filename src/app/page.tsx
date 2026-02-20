import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWorks from "@/components/FeaturedWorks";
import Process from "@/components/Process";
import Exhibitions from "@/components/Exhibitions";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedWorks />
        <Process />
        <Exhibitions />
        <Studio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
