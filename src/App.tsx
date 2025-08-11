import { Footer, Navbar } from "./components";
import { About, Contact, Hero, Projects } from "./pages";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Grid Background - Fixed to cover entire viewport */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

      {/* Content Layer - Above the grid background */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default App;
