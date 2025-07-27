import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "http://linkedin.com/in/hongyu-yue-85232191",
      color: "hover:text-blue-600"
    },
    {
      icon: Facebook,
      label: "Facebook", 
      url: "https://www.facebook.com/share/1EfZ9iTfqa/?mibextid=wwXIfr",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/realhenryyue?igsh=aGRyNHNocTZ3b3Rr&utm_source=qr",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your real estate journey? I'm here to help you achieve your goals. 
              Reach out today for a free consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Phone className="h-5 w-5" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground mb-2">718-717-5210</p>
                <p className="text-muted-foreground">
                  Available 7 days a week for your real estate needs
                </p>
                <Button variant="contact" className="mt-4">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-foreground mb-2">forangh@gmail.com</p>
                <p className="text-muted-foreground">
                  Send me your questions or schedule a consultation
                </p>
                <Button variant="contact" className="mt-4">
                  <Mail className="h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary text-center justify-center">
                <MapPin className="h-5 w-5" />
                <span>Service Areas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-foreground mb-4">
                <strong>Primary Focus:</strong> Queens & Long Island
              </p>
              <p className="text-muted-foreground mb-6">
                Licensed to serve all of New York State - from Manhattan to the Hamptons, 
                I can help you anywhere in New York.
              </p>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Follow Me</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-muted ${social.color} transition-colors hover:bg-accent/10`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                  <a
                    href="https://www.xiaohongshu.com/user/profile/65d657c9000000000503202b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:text-red-500 transition-colors hover:bg-accent/10"
                    aria-label="RedNote"
                  >
                    <span className="text-sm font-bold">红</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@realhenryyue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:text-black transition-colors hover:bg-accent/10"
                    aria-label="TikTok"
                  >
                    <span className="text-sm font-bold">TT</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;