import {
  About,
  AiFeatures,
  CTABlock,
  Features,
  Footer,
  Header,
  Hero,
} from "./sections";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main className="bg-dark relative min-h-screen w-full overflow-hidden text-white">
          <div className="absolute top-0 left-1/2 h-[80vw] w-[80vw] max-w-7xl -translate-1/2 rounded-full bg-radial from-[#5EB0EF]/50 via-[#5EB0EF]/10 to-transparent blur-3xl"></div>
          <Header />
          <Hero />
          <About />
          <Features />
          <AiFeatures />
          <CTABlock />
          <Footer />
          <div className="absolute bottom-0 left-[10vw] h-[90vw] w-[80vw] translate-y-1/2 bg-linear-to-r from-[#06B6D4] to-[#1E40AF] opacity-20 blur-[100px] will-change-transform sm:blur-[300px]"></div>
        </main>
      </div>
    </div>
  );
};

export default App;
