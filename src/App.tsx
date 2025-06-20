import { Header, HeroSection } from "./components";

const App = () => {
  return (
    <div className="bg-dark relative min-h-screen w-full text-white">
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
      <div className="absolute top-0 left-1/2 z-0 h-1/2 w-full max-w-7xl -translate-1/2 rounded-full bg-radial from-[#5EB0EF]/50 via-[#5EB0EF]/10 to-transparent blur-3xl"></div>
    </div>
  );
};

export default App;
