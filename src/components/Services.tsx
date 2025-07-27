import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Home, DollarSign, FileText, Key, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Sales",
      description: "Buying and selling single-family homes, condos, and co-ops throughout New York"
    },
    {
      icon: TrendingUp,
      title: "Investment Properties",
      description: "Helping investors find profitable opportunities in the NYC real estate market"
    },
    {
      icon: DollarSign,
      title: "Market Analysis",
      description: "Comprehensive market evaluations and pricing strategies for your property"
    },
    {
      icon: FileText,
      title: "Contract Negotiation",
      description: "Expert negotiation to ensure you get the best deal possible"
    },
    {
      icon: Key,
      title: "First-Time Buyers",
      description: "Specialized guidance for first-time homebuyers navigating the NYC market"
    },
    {
      icon: MapPin,
      title: "Relocation Services",
      description: "Helping families and professionals relocate to the New York area"
    }
  ];

  const areas = [
    "Queens", "Long Island", "Manhattan", "Brooklyn", 
    "Bronx", "Staten Island", "Westchester", "Nassau County"
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Real Estate Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real estate services across New York, with specialized expertise 
              in Queens and Long Island markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-hero rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-6">
              Service Areas
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Licensed to serve all of New York State, with specialized focus on:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area, index) => (
                <span 
                  key={index} 
                  className="bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full border border-primary-foreground/30"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;