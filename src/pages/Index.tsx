import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import PsychologyInsights from "@/components/PsychologyInsights";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <PsychologyInsights />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
