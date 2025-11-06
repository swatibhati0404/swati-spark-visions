import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Target } from "lucide-react";

const PsychologyInsights = () => {
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

  const insights = [
    {
      title: "Personality Type",
      trait: "INTJ - The Architect",
      description: "Strategic thinker with a natural drive for implementing ideas",
      score: 85,
      icon: <Brain className="w-6 h-6" />,
      color: "primary",
    },
    {
      title: "Emotional Intelligence",
      trait: "High Empathy",
      description: "Strong ability to understand and connect with others",
      score: 78,
      icon: <Heart className="w-6 h-6" />,
      color: "secondary",
    },
    {
      title: "Creativity Index",
      trait: "Innovative Thinker",
      description: "Excellent at generating novel solutions to complex problems",
      score: 92,
      icon: <Lightbulb className="w-6 h-6" />,
      color: "primary",
    },
    {
      title: "Goal Orientation",
      trait: "Achievement Driven",
      description: "Strong focus on setting and achieving ambitious goals",
      score: 88,
      icon: <Target className="w-6 h-6" />,
      color: "secondary",
    },
  ];

  return (
    <section id="psychology" ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center section-animate">
          <span className="gradient-text">Inside My Mind</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 section-animate">
          Psychological insights that shape my approach to problem-solving
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className={`bg-card border-${insight.color}/20 hover:border-${insight.color}/50 transition-all duration-300 group section-animate`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-${insight.color}/10 text-${insight.color} group-hover:bg-${insight.color} group-hover:text-${insight.color}-foreground transition-all duration-300`}>
                    {insight.icon}
                  </div>
                  <CardTitle className="text-xl">{insight.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className={`font-semibold text-${insight.color} mb-2`}>{insight.trait}</h4>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
                
                {/* Score bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score</span>
                    <span className={`font-semibold text-${insight.color}`}>{insight.score}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${insight.color === 'primary' ? 'from-primary to-primary/70' : 'from-secondary to-secondary/70'} transition-all duration-1000 ease-out`}
                      style={{ width: `${insight.score}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsychologyInsights;
