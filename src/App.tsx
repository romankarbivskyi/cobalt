import {
  About,
  AiFeatures,
  CTABlock,
  Features,
  Footer,
  Header,
  Hero,
} from "./sections";

const App = () => {
  return (
    <main className="bg-dark relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute top-0 left-1/2 h-[80vw] w-[80vw] max-w-7xl -translate-1/2 rounded-full bg-radial from-[#5EB0EF]/50 via-[#5EB0EF]/10 to-transparent blur-3xl"></div>
      <Header />
      <Hero />
      <About />
      <Features />
      <AiFeatures />
      <CTABlock />
      <Footer />
      <div className="absolute bottom-0 left-0 h-[100vw] w-screen translate-y-1/2 bg-linear-to-r from-[#06B6D4] to-[#1E40AF] opacity-15 blur-[300px]"></div>
    </main>
  );
};

export default App;
