import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <HeroSection />
        <FeatureSection />
      </div>
    </>
  );
}

export default App;
