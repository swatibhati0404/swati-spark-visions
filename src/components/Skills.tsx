import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Wrench, Brain } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "primary",
      skills: [
        {
          name: "C & C++",
          level: 85,
          description: "Foundation of my problem-solving mindset, enabling me to understand data structures and algorithm optimization at a deep level.",
        },
        {
          name: "Java",
          level: 80,
          description: "Strengthened my object-oriented thinking and taught me scalable software architecture principles.",
        },
        {
          name: "JavaScript/TypeScript",
          level: 85,
          description: "Empowered me to build dynamic, interactive web applications and understand modern full-stack development.",
        },
        {
          name: "Python",
          level: 90,
          description: "My go-to for AI/ML projects, automation, and rapid prototyping—accelerated my journey into intelligent systems.",
        },
      ],
    },
    {
      icon: Wrench,
      title: "Development & Frameworks",
      color: "secondary",
      skills: [
        {
          name: "React.js",
          level: 85,
          description: "Transformed how I approach UI development, teaching me component-based architecture and state management.",
        },
        {
          name: "Node.js",
          level: 80,
          description: "Opened doors to backend development, allowing me to build complete full-stack applications.",
        },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "primary",
      skills: [
        {
          name: "MySQL",
          level: 75,
          description: "Taught me structured data management and the importance of efficient database design.",
        },
        {
          name: "Oracle Database",
          level: 70,
          description: "Enhanced my enterprise-level database skills and understanding of complex queries.",
        },
        {
          name: "MongoDB",
          level: 75,
          description: "Introduced me to NoSQL paradigms and flexible, scalable data storage solutions.",
        },
      ],
    },
    {
      icon: Brain,
      title: "Specialized Skills",
      color: "secondary",
      skills: [
        {
          name: "LLMs & RAG",
          level: 85,
          description: "At the forefront of my learning—building context-aware AI systems that can understand and generate human-like responses.",
        },
        {
          name: "Embeddings & APIs",
          level: 80,
          description: "Enabled me to create intelligent search systems and integrate powerful AI capabilities into applications.",
        },
        {
          name: "Generative AI",
          level: 85,
          description: "Sparked my passion for creating AI that doesn't just analyze but creates—text, code, and innovative solutions.",
        },
        {
          name: "Data Structures & Algorithms",
          level: 80,
          description: "The backbone of efficient problem-solving, shaping how I approach every technical challenge.",
        },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center section-animate">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 section-animate max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
          Each skill represents a milestone in my journey—shaping my problem-solving abilities, 
          expanding my technical horizons, and building the foundation for creating impactful solutions.
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="bg-card border-primary/20 section-animate"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="space-y-2 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:border-primary/30 border border-transparent"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <span className={`text-sm font-bold text-${category.color}`}>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
