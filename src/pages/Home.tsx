import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { SelectedWork } from "../components/SelectedWork";
import { Services } from "../components/Services";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Services />
        <Contact />
      </main>
    </>
  );
}
