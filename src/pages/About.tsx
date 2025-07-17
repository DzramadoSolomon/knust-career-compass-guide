
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Target, 
  Lightbulb,
  MapPin,
  GraduationCap,
  Building2,
  Heart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Course-Career Mapping",
      description: "Discover how each course in your curriculum connects to real-world career opportunities and industry applications."
    },
    {
      icon: Target,
      title: "Personalized Roadmaps",
      description: "Get customized learning paths based on your department, year of study, and career interests."
    },
    {
      icon: Users,
      title: "Resource Hub",
      description: "Access curated online courses, YouTube tutorials, and documentation for every subject you're studying."
    },
    {
      icon: Lightbulb,
      title: "Industry Insights",
      description: "Learn about salary ranges, job market demand, and growth opportunities in your field of interest."
    }
  ];

  const departments = [
    {
      name: "Computer Engineering",
      icon: Building2,
      description: "Building the future of technology through hardware and software integration",
      careers: ["Software Developer", "Systems Engineer", "Data Scientist", "Cybersecurity Analyst"]
    },
    {
      name: "Biomedical Engineering",
      icon: Heart,
      description: "Bridging engineering and medicine to improve human health and quality of life",
      careers: ["Medical Device Engineer", "Clinical Engineer", "Biomaterials Specialist", "Research Scientist"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            About Kareer Kompas
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kareer Kompas is an innovative educational platform designed specifically for KNUST Engineering students. 
            We bridge the gap between academic coursework and real-world career opportunities, helping students 
            understand the practical applications and career potential of every subject they study.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-to-br from-accent/5 via-background to-primary/5 border-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 mr-2 text-accent" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              To empower KNUST Engineering students with clear, actionable insights into how their academic journey 
              translates into meaningful career opportunities. We believe every course has value, and every student 
              deserves to understand their potential impact on the world.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Departments We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <dept.icon className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Popular Career Paths:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.careers.map((career, careerIndex) => (
                      <Badge key={careerIndex} variant="secondary">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* KNUST Connection */}
        <Card className="mb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2 text-primary" />
              Built for KNUST
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kareer Kompas is specifically designed for students at the Kwame Nkrumah University of Science and Technology (KNUST), 
              one of Ghana's premier institutions for science and technology education.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our platform reflects KNUST's curriculum structure, course codes, and academic calendar, ensuring that every 
              feature is tailored to your actual learning experience as a KNUST Engineering student.
            </p>
          </CardContent>
        </Card>

        {/* Vision for the Future */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Vision for the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            We envision a future where every KNUST Engineering student graduates with a clear understanding of their 
            career potential and the confidence to pursue their chosen path. Our platform will continue to evolve, 
            adding new departments, expanding our resource library, and building stronger connections between academia and industry.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-accent/20">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Expand Departments</h3>
                <p className="text-sm text-muted-foreground">
                  Adding all KNUST Engineering departments and other colleges
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Industry Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Connecting students directly with employers and internship opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">AI-Powered Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized career guidance based on academic performance and interests
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
