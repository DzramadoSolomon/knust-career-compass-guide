
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Code,
  Cpu,
  Heart,
  Microscope,
  Zap,
  Target
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoursePopup from '@/components/CoursePopup';

const Roadmap = () => {
  const [selectedYear, setSelectedYear] = useState('1');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courseData = {
    computer: {
      1: [
        {
          id: 'cs101',
          code: 'CS 101',
          title: 'Introduction to Programming',
          credits: 3,
          icon: Code,
          description: 'Fundamental programming concepts using Python',
          relevance: 'High',
          careers: ['Software Developer', 'Data Analyst', 'Web Developer'],
          connections: ['CS 201', 'CS 205'],
          industry: 'Forms the foundation for all software development roles',
          image: 'photo-1461749280684-dccba630e2f6' // Monitor showing Java programming
        },
        {
          id: 'math101',
          code: 'MATH 101',
          title: 'Calculus I',
          credits: 3,
          icon: Target,
          description: 'Differential and integral calculus',
          relevance: 'Medium',
          careers: ['Systems Engineer', 'Data Scientist', 'Research Engineer'],
          connections: ['MATH 201', 'EE 201'],
          industry: 'Essential for signal processing and machine learning algorithms',
          image: 'photo-1488590528505-98d2b5aba04b' // Turned on gray laptop computer
        },
        {
          id: 'ee101',
          code: 'EE 101',
          title: 'Circuit Analysis',
          credits: 3,
          icon: Zap,
          description: 'Basic electrical circuit principles',
          relevance: 'High',
          careers: ['Hardware Engineer', 'Embedded Systems Engineer', 'IoT Developer'],
          connections: ['EE 201', 'CE 301'],
          industry: 'Critical for understanding computer hardware and embedded systems',
          image: 'photo-1487058792275-0ad4aaf24ca7' // Colorful software or web code
        }
      ],
      2: [
        {
          id: 'cs201',
          code: 'CS 201',
          title: 'Data Structures & Algorithms',
          credits: 3,
          icon: Code,
          description: 'Advanced programming concepts and algorithm design',
          relevance: 'High',
          careers: ['Software Engineer', 'Systems Architect', 'Technical Lead'],
          connections: ['CS 301', 'CS 401'],
          industry: 'Core requirement for technical interviews and software optimization',
          image: 'photo-1526374965328-7f61d4dc18c5' // Matrix movie still
        },
        {
          id: 'cs205',
          code: 'CS 205',
          title: 'Database Systems',
          credits: 3,
          icon: Code,
          description: 'Database design, SQL, and data management',
          relevance: 'High',
          careers: ['Database Administrator', 'Backend Developer', 'Data Engineer'],
          connections: ['CS 305', 'CS 405'],
          industry: 'Essential for web development and data management systems',
          image: 'photo-1498050108023-c5249f4df085' // MacBook with lines of code
        }
      ]
    },
    biomedical: {
      1: [
        {
          id: 'bme101',
          code: 'BME 101',
          title: 'Introduction to Biomedical Engineering',
          credits: 3,
          icon: Heart,
          description: 'Overview of biomedical engineering principles',
          relevance: 'High',
          careers: ['Biomedical Engineer', 'Medical Device Developer', 'Clinical Engineer'],
          connections: ['BME 201', 'BME 301'],
          industry: 'Foundation for understanding medical technology applications',
          image: 'photo-1581091226825-a6a2a5aee158' // Woman in white using laptop
        },
        {
          id: 'bio101',
          code: 'BIO 101',
          title: 'Human Anatomy & Physiology',
          credits: 4,
          icon: Microscope,
          description: 'Structure and function of human body systems',
          relevance: 'High',
          careers: ['Medical Device Engineer', 'Rehabilitation Engineer', 'Research Scientist'],
          connections: ['BME 205', 'BME 401'],
          industry: 'Critical for designing medical devices and understanding patient needs',
          image: 'photo-1483058712412-4245e9b90334' // Silver iMac with keyboard
        }
      ],
      2: [
        {
          id: 'bme201',
          code: 'BME 201',
          title: 'Biomaterials',
          credits: 3,
          icon: Microscope,
          description: 'Materials used in medical applications',
          relevance: 'High',
          careers: ['Biomaterials Engineer', 'Medical Device Designer', 'Quality Assurance Engineer'],
          connections: ['BME 301', 'BME 405'],
          industry: 'Essential for developing implants, prosthetics, and medical devices',
          image: 'photo-1605810230434-7631ac76ec81' // Group around video screens
        }
      ]
    }
  };

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'High': return 'bg-accent text-accent-foreground';
      case 'Medium': return 'bg-primary text-primary-foreground';
      case 'Low': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const CourseCard = ({ course, department }: { course: any, department: string }) => (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-accent/30 hover:border-l-accent ${
        selectedCourse === course.id ? 'ring-2 ring-primary shadow-lg bg-accent/5' : ''
      }`}
      onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
    >
      {/* Course Image */}
      {course.image && (
        <div className="relative h-32 bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=600&q=80`}
            alt={course.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <course.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <CardTitle className="text-lg">{course.code}</CardTitle>
              <CardDescription>{course.title}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Badge className={getRelevanceColor(course.relevance)}>
              {course.relevance} Relevance
            </Badge>
            <span className="text-sm text-muted-foreground">{course.credits} Credits</span>
          </div>
        </div>
      </CardHeader>
      
      {selectedCourse === course.id && (
        <CardContent className="pt-0">
          <div className="space-y-6">
            <p className="text-muted-foreground">{course.description}</p>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-primary" />
                Career Opportunities
              </h4>
              <div className="flex flex-wrap gap-2">
                {course.careers.map((career: string) => (
                  <Badge key={career} variant="outline">{career}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                Course Connections
              </h4>
              <div className="flex flex-wrap gap-2">
                {course.connections.map((connection: string) => (
                  <CoursePopup key={connection} courseCode={connection}>
                    <Badge variant="secondary" className="hover:bg-accent hover:text-accent-foreground cursor-pointer">
                      {connection}
                    </Badge>
                  </CoursePopup>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Industry Application
              </h4>
              <p className="text-sm text-muted-foreground">{course.industry}</p>
            </div>

            <div className="pt-4 border-t">
              <CoursePopup courseCode={course.code}>
                <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Full Course Details
                </Button>
              </CoursePopup>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with enhanced design */}
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Engineering Career Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how your courses connect to real-world careers in Computer and Biomedical Engineering
          </p>
        </div>

        {/* Department Tabs */}
        <Tabs defaultValue="computer" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50">
              <TabsTrigger value="computer" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Computer Engineering
              </TabsTrigger>
              <TabsTrigger value="biomedical" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Biomedical Engineering
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="computer" className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Computer Engineering</h2>
              <p className="text-muted-foreground">
                Building the future of technology through hardware and software integration
              </p>
            </div>
            
            {/* Year Selector */}
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-2 p-1 bg-muted/50 rounded-lg">
                {[1, 2, 3, 4].map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year.toString() ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedYear(year.toString())}
                    className={selectedYear === year.toString() ? "bg-accent hover:bg-accent/90" : ""}
                  >
                    Year {year}
                  </Button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseData.computer[selectedYear as '1' | '2']?.map((course) => (
                <CourseCard key={course.id} course={course} department="computer" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="biomedical" className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Biomedical Engineering</h2>
              <p className="text-muted-foreground">
                Bridging engineering and medicine to improve human health
              </p>
            </div>
            
            {/* Year Selector */}
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-2 p-1 bg-muted/50 rounded-lg">
                {[1, 2, 3, 4].map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year.toString() ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedYear(year.toString())}
                    className={selectedYear === year.toString() ? "bg-accent hover:bg-accent/90" : ""}
                  >
                    Year {year}
                  </Button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseData.biomedical[selectedYear as '1' | '2']?.map((course) => (
                <CourseCard key={course.id} course={course} department="biomedical" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Progress Tracking with enhanced styling */}
        <Card className="mt-12 bg-gradient-to-br from-accent/5 via-background to-primary/5 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-accent" />
              Your Progress
            </CardTitle>
            <CardDescription>
              Track your journey through the engineering curriculum
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((year) => (
                <div key={year} className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors ${
                    parseInt(selectedYear) >= year 
                      ? 'bg-accent text-accent-foreground shadow-lg' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {parseInt(selectedYear) > year ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <h4 className="font-semibold">Year {year}</h4>
                  <p className="text-sm text-muted-foreground">
                    {year === 1 && "Foundation"}
                    {year === 2 && "Core Concepts"}
                    {year === 3 && "Specialization"}
                    {year === 4 && "Capstone"}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Roadmap;
