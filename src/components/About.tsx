import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Home,
      title: "Local Expert",
      description: "Specialized knowledge of Queens and Long Island markets"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized service tailored to your unique needs"
    },
    {
      icon: Award,
      title: "Licensed Professional",
      description: "Fully licensed New York real estate agent"
    },
    {
      icon: TrendingUp,
      title: "Market Insight",
      description: "Deep understanding of NYC real estate trends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Henry Yue
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a licensed New York real estate agent, I bring dedication, expertise, and 
              a deep understanding of the local market to every transaction. My goal is to 
              make your real estate journey smooth, successful, and stress-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">My Commitment to You</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">For Buyers</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'll help you find the perfect home that fits your lifestyle and budget. 
                  From first-time buyers to seasoned investors, I provide expert guidance 
                  through every step of the purchasing process.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">For Sellers</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'll maximize your property's value with strategic marketing, professional 
                  photography, and my extensive network. My goal is to sell your home quickly 
                  and for the best possible price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;