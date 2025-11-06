import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import swatiPhoto from "@/assets/swati-photo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Swati</span>
            <br />
            <span className="gradient-text">Bhati</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Aspiring Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-lg">
            Designing ideas that think, code, and create.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border-blue transition-all duration-300"
            >
              About Me
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary glow-border-blue animate-float">
              <img
                src={swatiPhoto}
                alt="Swati Bhati"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
