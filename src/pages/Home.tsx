import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Users, BookOpen, Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Career Roadmaps",
      description: "Discover clear pathways from your current courses to exciting career opportunities in engineering."
    },
    {
      icon: BookOpen,
      title: "Course Connections",
      description: "Understand how your courses link together and build upon each other throughout your academic journey."
    },
    {
      icon: Users,
      title: "Industry Insights",
      description: "Learn about real-world applications and job opportunities in Computer and Biomedical Engineering."
    },
    {
      icon: Compass,
      title: "Personalized Guidance",
      description: "Get tailored recommendations based on your year of study and specific engineering discipline."
    }
  ];

  const stats = [
    { number: "2", label: "Engineering Departments" },
    { number: "50+", label: "Career Paths" },
    { number: "100+", label: "Course Connections" },
    { number: "4", label: "Academic Years" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Compass className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Navigate Your
              <span className="text-primary block">Engineering Career</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how your KNUST engineering courses connect to real-world careers. 
              From Computer Engineering to Biomedical Engineering, map your path to success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/roadmap">
                <Button size="lg" className="group">
                  Explore Career Paths
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Kareer Kompas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for KNUST engineering students to bridge the gap 
              between academic learning and career success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of KNUST engineering students who are already mapping their career journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg">
                Create Your Account
              </Button>
            </Link>
            <Link to="/roadmap">
              <Button variant="outline" size="lg">
                View Sample Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">KK</span>
              </div>
              <div>
                <h3 className="font-bold text-primary">Kareer Kompas</h3>
                <p className="text-sm text-muted-foreground">KNUST Engineering Career Guide</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Kareer Kompas. Built for KNUST Engineering Students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;