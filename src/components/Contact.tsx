import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:swati@example.com",
      color: "primary",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.com",
      color: "primary",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com",
      color: "secondary",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center section-animate">
          <span className="gradient-text">Contact Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 section-animate">
          Let's build something meaningful together
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-primary/20 section-animate">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-foreground glow-border-blue"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6 section-animate" style={{ animationDelay: "0.1s" }}>
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border border-${social.color}/20 hover:border-${social.color}/50 hover:bg-${social.color}/5 transition-all duration-300 group`}
                  >
                    <div className={`p-3 rounded-lg bg-${social.color}/10 text-${social.color} group-hover:bg-${social.color} group-hover:text-${social.color}-foreground transition-all duration-300`}>
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground italic">
                  "Innovation distinguishes between a leader and a follower."
                </p>
                <p className="text-center text-sm text-muted-foreground mt-2">— Steve Jobs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
