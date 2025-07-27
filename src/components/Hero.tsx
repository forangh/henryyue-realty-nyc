import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/nyc-skyline.jpg";
import henryHeadshot from "@/assets/henry-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="mb-8">
            <img 
              src={henryHeadshot} 
              alt="Hongyu (Henry) Yue - Real Estate Agent"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-luxury border-4 border-primary-foreground/20"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hongyu <span className="text-accent">(Henry)</span> Yue
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              Licensed New York Real Estate Agent
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-lg">Queens • Long Island • All of New York</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
            Your trusted partner in New York real estate. Whether you're buying your first home, 
            selling your property, or investing in real estate, I'm here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5" />
              Call: 718-717-5210
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Mail className="h-5 w-5" />
              forangh@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;