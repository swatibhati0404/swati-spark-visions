import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, Target, Zap, Users, TrendingUp } from "lucide-react";
import thinkingStyle from "@/assets/thinking-style.png";
import personalityTraits from "@/assets/personality-traits.png";
import bigFive from "@/assets/big-five.png";

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

  const psychologyTests = [
    {
      title: "Thinking Style",
      type: "Energizing Thinking",
      image: thinkingStyle,
      description: "A combination of Big Picture orientation and Action focus. I set bold visions, rally people around causes, and mobilize resources to achieve important objectives.",
      impact: "This energizing approach has shaped my ability to lead projects with vision and drive, turning ideas into impactful realities.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Personality Traits",
      type: "MBTI Assessment",
      image: personalityTraits,
      traits: [
        { name: "Extraverted", score: 61, color: "hsl(var(--primary))" },
        { name: "Sensing", score: 15, color: "hsl(var(--chart-2))" },
        { name: "Thinking", score: 41, color: "hsl(var(--chart-3))" },
        { name: "Judging", score: 60, color: "hsl(var(--chart-4))" },
      ],
      description: "My personality profile reveals a strong preference for extraversion and judging, balanced with thinking and intuitive traits.",
      impact: "These traits enable me to connect with others effectively while maintaining structured thinking and decisive action in complex situations.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Big Five Personality",
      type: "OCEAN Model",
      image: bigFive,
      traits: [
        { name: "Openness", score: 92, color: "hsl(var(--primary))" },
        { name: "Conscientiousness", score: 71, color: "hsl(var(--chart-2))" },
        { name: "Extraversion", score: 83, color: "hsl(var(--chart-3))" },
        { name: "Agreeableness", score: 79, color: "hsl(var(--chart-4))" },
        { name: "Neuroticism", score: 65, color: "hsl(var(--chart-5))" },
      ],
      description: "Exceptionally high openness to experience, strong extraversion, and balanced conscientiousness define my approach to challenges.",
      impact: "This profile fuels my creative problem-solving, collaborative spirit, and ability to embrace new ideas while maintaining reliability and empathy.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section id="psychology" ref={sectionRef} className="min-h-screen py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center section-animate glow-text-blue">
          My Psychology Insights
        </h2>
        <p className="text-center text-muted-foreground mb-16 section-animate">
          Understanding myself through psychological assessments and how they shaped my growth
        </p>

        <div className="space-y-12">
          {psychologyTests.map((test, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 group section-animate overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-muted/30 flex items-center justify-center p-8">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-full h-auto max-w-md rounded-lg shadow-2xl glow-border-blue transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {test.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{test.title}</CardTitle>
                        <p className="text-sm text-primary mt-1">{test.type}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {test.description}
                    </p>

                    {/* Trait bars if available */}
                    {test.traits && (
                      <div className="space-y-3 pt-2">
                        {test.traits.map((trait, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-foreground font-medium">{trait.name}</span>
                              <span className="text-primary font-semibold">{trait.score}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full transition-all duration-1000 ease-out rounded-full"
                                style={{
                                  width: `${trait.score}%`,
                                  backgroundColor: trait.color,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-secondary mb-2">How This Shaped Me</h4>
                      <p className="text-sm text-muted-foreground italic">
                        {test.impact}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsychologyInsights;
