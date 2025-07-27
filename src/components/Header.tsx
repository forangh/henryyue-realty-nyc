import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-primary">Henry Yue</h1>
          <span className="text-sm text-muted-foreground">Real Estate Agent</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">718-717-5210</span>
          </Button>
          <Button variant="contact" size="sm">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;