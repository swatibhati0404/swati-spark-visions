import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
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

  const skills = {
    technical: ["React", "TypeScript", "Python", "AI/ML", "Node.js", "MongoDB"],
    tools: ["Git", "Figma", "VS Code", "Docker", "AWS"],
    soft: ["Problem Solving", "Team Collaboration", "Creative Thinking", "Leadership"],
  };

  return (
    <section id="resume" ref={sectionRef} className="min-h-screen py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center section-animate">
          <span className="gradient-text">Resume</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 section-animate">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Bachelor of Engineering</h4>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
                <p className="text-sm text-primary mt-1">GPA: 8.5/10</p>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 section-animate" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Technical Intern</h4>
                <p className="text-sm text-muted-foreground">Tech Company</p>
                <p className="text-sm text-muted-foreground">Summer 2024</p>
              </div>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 section-animate" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Awards</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Academic Excellence</h4>
                <p className="text-sm text-muted-foreground">Top 5% of class</p>
                <p className="text-sm text-muted-foreground">2023-2024</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="mt-8 bg-card border-primary/20 section-animate" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Code className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl">Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-3">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20 hover:border-secondary/50 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Button */}
        <div className="flex justify-center mt-12 section-animate" style={{ animationDelay: "0.4s" }}>
          <a href="/Swati_Bhati_Resume.png" download="Swati_Bhati_Resume.png">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-foreground px-8 py-6 text-lg glow-border-blue">
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
