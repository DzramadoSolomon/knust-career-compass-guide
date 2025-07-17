
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Target,
  Lightbulb,
  ArrowRight,
  University,
  Cpu,
  Heart
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Career Roadmaps",
      description: "Interactive pathways showing how your courses connect to real-world careers in engineering."
    },
    {
      icon: BookOpen,
      title: "Course Connections",
      description: "Understand how subjects link together and build upon each other throughout your academic journey."
    },
    {
      icon: Lightbulb,
      title: "Industry Insights",
      description: "Real-world applications, salary ranges, and job market information for different career paths."
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "Tailored recommendations based on your department, year of study, and academic progress."
    }
  ];

  const stats = [
    { number: "2", label: "Engineering Departments", description: "Computer & Biomedical" },
    { number: "50+", label: "Career Paths", description: "Mapped and analyzed" },
    { number: "100+", label: "Course Connections", description: "Detailed relationships" },
    { number: "4", label: "Academic Years", description: "Complete coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center">
              <University className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About Kareer Kompas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your comprehensive career guidance platform designed specifically for KNUST Engineering students. 
            We bridge the gap between academic learning and real-world career success by showing you exactly 
            how your courses connect to exciting career opportunities.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 border-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
            <CardDescription className="text-lg">
              Empowering KNUST Engineering students to make informed career decisions
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At Kareer Kompas, we believe every engineering student deserves clear guidance on how their 
              academic journey translates to career success. We provide interactive roadmaps, detailed course 
              connections, and industry insights to help you navigate your path from classroom to career with confidence.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            By the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Departments We Cover
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Computer Engineering</CardTitle>
                    <CardDescription>Building the future of technology</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  From software development to hardware design, explore how computer engineering 
                  courses lead to careers in tech innovation, AI, cybersecurity, and more.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Software Development</Badge>
                  <Badge variant="secondary">Hardware Design</Badge>
                  <Badge variant="secondary">AI & Machine Learning</Badge>
                  <Badge variant="secondary">Cybersecurity</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Biomedical Engineering</CardTitle>
                    <CardDescription>Bridging engineering and medicine</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover how biomedical engineering courses prepare you for careers in medical 
                  device development, healthcare technology, research, and clinical engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Medical Devices</Badge>
                  <Badge variant="secondary">Healthcare Tech</Badge>
                  <Badge variant="secondary">Research & Development</Badge>
                  <Badge variant="secondary">Clinical Engineering</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-accent/20">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Explore Your Career Path?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of KNUST Engineering students who are already using Kareer Kompas 
              to plan their academic journey and career success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Roadmaps
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Create Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
