import { About, Header, Hero } from "./sections";

const App = () => {
  return (
    <main className="bg-dark relative min-h-screen w-full overflow-hidden text-white">
      <Header />
      <Hero />
      <div className="absolute top-0 left-1/2 h-1/2 w-full max-w-7xl -translate-1/2 rounded-full bg-radial from-[#5EB0EF]/50 via-[#5EB0EF]/10 to-transparent blur-3xl"></div>
      <About />
    </main>
  );
};

export default App;
