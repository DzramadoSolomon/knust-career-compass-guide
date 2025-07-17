
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-muted/50 via-background to-accent/5 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Kareer Kompas</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering KNUST Engineering students to navigate their academic journey 
              and discover exciting career opportunities in technology and healthcare.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Departments</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Computer Engineering</span></li>
              <li><span className="text-muted-foreground">Biomedical Engineering</span></li>
              <li><span className="text-muted-foreground text-xs">More departments coming soon...</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                kareer@knust.edu.gh
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                +233 XX XXX XXXX
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>KNUST Campus<br />Kumasi, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Kareer Kompas. Built with{' '}
              <Heart className="w-4 h-4 inline text-red-500" />{' '}
              for KNUST Engineering Students.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
