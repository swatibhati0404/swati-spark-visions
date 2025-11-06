import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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

  // Dynamic project data - can be connected to CMS later
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Interactive dashboard with machine learning insights and predictive analytics",
      tags: ["React", "Python", "TensorFlow"],
      link: "#",
      github: "#",
    },
    {
      title: "Smart Campus System",
      description: "IoT-based solution for campus resource management and optimization",
      tags: ["IoT", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Creative Portfolio Generator",
      description: "AI-driven tool to generate personalized portfolios from user data",
      tags: ["React", "AI/ML", "TypeScript"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center section-animate">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 group section-animate hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10 flex-1"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-secondary text-secondary hover:bg-secondary/10 flex-1"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 section-animate">
          More projects coming soon...
        </p>
      </div>
    </section>
  );
};

export default Projects;
