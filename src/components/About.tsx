import { useEffect, useRef } from "react";
import swatiPhoto from "@/assets/swati-photo.png";
import { GraduationCap, Award, Sparkles } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: "2023-Present",
      title: "Engineering Journey Begins",
      description: "Pursuing engineering with focus on AI, design, and innovation",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "Academic Excellence",
      description: "Achieved outstanding results in academics and competitions",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "2021",
      title: "Discovering Passion",
      description: "Found passion for technology and creative problem-solving",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center section-animate glow-text-blue">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center section-animate">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 glow-border-blue">
                <img
                  src={swatiPhoto}
                  alt="Swati Bhati - Aspiring Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 section-animate" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Swati Bhati</span>, an aspiring engineer passionate about the intersection of{" "}
                <span className="text-secondary font-semibold">AI</span>,{" "}
                <span className="text-primary font-semibold">design</span>, and{" "}
                <span className="text-secondary font-semibold">innovation</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with curiosity about how technology shapes our world, evolving into 
                a dedication to creating meaningful solutions that bridge the gap between human needs 
                and technological possibilities. I believe in crafting solutions that don't just work—they inspire and empower.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm text-primary font-mono">{item.year}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
