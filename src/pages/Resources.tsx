
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Video, 
  ExternalLink,
  Clock,
  Star,
  Globe,
  Youtube,
  Monitor,
  FileText,
  Cpu,
  Heart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ResourcesData, CourseResources, OnlineCourse, YoutubeChannel, Documentation } from '@/types/resources';

const Resources = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('computer');
  const [selectedYear, setSelectedYear] = useState('1');

  const resources: ResourcesData = {
    computer: {
      1: {
        // Semester 1 Courses
        'MATH 110': {
          onlineCourses: [
            {
              title: "Algebra Basics - Khan Academy",
              provider: "Khan Academy",
              duration: "Self-paced",
              rating: 4.9,
              price: "Free/Paid",
              url: "https://www.khanacademy.org/math/algebra-basics",
              description: "Comprehensive algebra course covering variables, equations, and functions"
            },
            {
              title: "College Algebra",
              provider: "Coursera - University of California",
              duration: "4 weeks",
              rating: 4.6,
              price: "Free (Certificate $49)",
              url: "https://study.com/academy/course/algebra.html",
              description: "Complete algebra course designed for engineering students"
            }
          ],
          youtubeChannels: [
            {
              title: "Professor Leonard - Algebra Playlist",
              channel: "Professor Leonard",
              subscribers: "1.2M",
              description: "Clear, detailed algebra explanations with step-by-step solutions",
              url: "https://youtube.com/playlist?list=PLDesaqWTN6ESsmwELdrzhcGiRhk5DjwLP&si=55AD0hRZUvX3T1lP"
            },
            {
              title: "Algebra Fundamentals",
              channel: "Khan Academy",
              subscribers: "7.2M",
              description: "Structured algebra tutorials from basic to advanced topics",
              url: "https://youtube.com/playlist?list=PLSQl0a2vh4HAxgGKXD5Oc_eELflPEddPx&si=BQXBc7mP6YXNbIrn"
            }
          ],
          documentation: [
            {
              title: "Paul's Online Math Notes - Algebra",
              type: "Tutorial Site",
              description: "Comprehensive algebra notes with examples and practice problems",
              url: "https://www.geogebra.org/math/algebra?lang=en"
            },
            {
              title: "Wolfram MathWorld - Algebra",
              type: "Reference",
              description: "Mathematical encyclopedia with algebra definitions and theorems",
              url: "https://mathworld.wolfram.com/topics/Algebra.html"
            }
          ]
        },
        'EE 120': {
          onlineCourses: [
            {
              title: "Circuits and Electronics",
              provider: "edX - MIT",
              duration: "12 weeks",
              rating: 4.7,
              price: "Free (Certificate $99)",
              url: "https://www.edx.org/course/circuits-and-electronics-1-basic-circuit-analysis",
              description: "MIT's introduction to circuit analysis and electronic devices"
            },
            {
              title: "DC Circuit Analysis",
              provider: "Udemy",
              duration: "8 hours",
              rating: 4.5,
              price: "$29.99",
              url: "https://www.udemy.com/course/dc-circuit-analysis/",
              description: "Practical DC circuit analysis with hands-on examples"
            }
          ],
          youtubeChannels: [
            {
              title: "ElectroBOOM",
              channel: "ElectroBOOM",
              subscribers: "4.5M",
              description: "Entertaining and educational electrical engineering content",
              url: "https://www.youtube.com/c/ElectroBOOM"
            },
            {
              title: "Circuit Analysis Tutorials",
              channel: "Michel van Biezen",
              subscribers: "890K",
              description: "Clear explanations of circuit analysis techniques",
              url: "https://www.youtube.com/c/MichelvanBiezen"
            }
          ],
          documentation: [
            {
              title: "All About Circuits - DC Circuit Analysis",
              type: "Tutorial Site",
              description: "Free online textbook covering DC circuit fundamentals",
              url: "https://www.allaboutcircuits.com/textbook/direct-current/"
            },
            {
              title: "Electronics Tutorials - Basic Electronics",
              type: "Reference",
              description: "Comprehensive electronics tutorials and reference materials",
              url: "https://www.electronics-tutorials.ws/"
            }
          ]
        },
        'ENGR 130': {
          onlineCourses: [
            {
              title: "Engineering Graphics and Design",
              provider: "Coursera - Georgia Institute of Technology",
              duration: "6 weeks",
              rating: 4.4,
              price: "Free (Certificate $49)",
              url: "https://www.coursera.org/learn/engineering-graphics",
              description: "Technical drawing principles and CAD fundamentals"
            },
            {
              title: "AutoCAD for Beginners",
              provider: "Udemy",
              duration: "12 hours",
              rating: 4.6,
              price: "$49.99",
              url: "https://www.udemy.com/course/autocad-for-beginners/",
              description: "Complete AutoCAD course from basic to intermediate level"
            }
          ],
          youtubeChannels: [
            {
              title: "CAD in Black",
              channel: "CAD in Black",
              subscribers: "180K",
              description: "AutoCAD tutorials and technical drawing techniques",
              url: "https://www.youtube.com/c/CADinBlack"
            },
            {
              title: "Technical Drawing Course",
              channel: "Engineering Graphics",
              subscribers: "95K",
              description: "Step-by-step technical drawing and drafting tutorials",
              url: "https://www.youtube.com/channel/UCQzr4PEJRpg7mlr9qrdwONQ"
            }
          ],
          documentation: [
            {
              title: "Engineering Drawing Standards",
              type: "Reference",
              description: "ISO and ANSI standards for technical drawings",
              url: "https://www.iso.org/standard/53132.html"
            },
            {
              title: "AutoCAD Documentation",
              type: "Official Docs",
              description: "Official AutoCAD help and learning resources",
              url: "https://help.autodesk.com/view/ACD/2023/ENU/"
            }
          ]
        },
        // Add more semester 1 courses...
        
        // Semester 2 Courses
        'EE 210': {
          onlineCourses: [
            {
              title: "Electronics - Coursera Specialization",
              provider: "Coursera - Georgia Institute of Technology",
              duration: "4 months",
              rating: 4.7,
              price: "Free (Certificate $49/month)",
              url: "https://www.coursera.org/specializations/electronics",
              description: "Complete electronics specialization covering analog and digital circuits"
            },
            {
              title: "Basic Electronics Course",
              provider: "edX - University of British Columbia",
              duration: "8 weeks",
              rating: 4.5,
              price: "Free (Certificate $99)",
              url: "https://www.edx.org/course/basic-electronics",
              description: "Fundamentals of electronic components and circuit design"
            }
          ],
          youtubeChannels: [
            {
              title: "GreatScott!",
              channel: "GreatScott!",
              subscribers: "1.8M",
              description: "Electronics projects and component explanations",
              url: "https://www.youtube.com/c/greatscottlab"
            },
            {
              title: "Ben Eater",
              channel: "Ben Eater",
              subscribers: "1M",
              description: "In-depth electronics and computer science tutorials",
              url: "https://www.youtube.com/c/BenEater"
            }
          ],
          documentation: [
            {
              title: "Electronics Textbook - All About Circuits",
              type: "Online Textbook",
              description: "Free comprehensive electronics textbook",
              url: "https://www.allaboutcircuits.com/textbook/"
            },
            {
              title: "Electronic Components Datasheet Database",
              type: "Database",
              description: "Comprehensive component datasheets and specifications",
              url: "https://www.datasheetcatalog.org/"
            }
          ]
        }
        // Note: Additional courses can be added following this pattern
      },
      // Years 2-4 deactivated - see documentation for activation
      2: {},
      3: {},
      4: {}
    },
    // Biomedical Engineering deactivated - see documentation for activation
    biomedical: {}
  };

  const ResourceCard = ({ resource, type }: { 
    resource: OnlineCourse | YoutubeChannel | Documentation, 
    type: string 
  }) => {
    const handleClick = () => {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
    };

    return (
      <Card 
        className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group" 
        onClick={handleClick}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                {type === 'course' && <Monitor className="w-5 h-5 text-accent" />}
                {type === 'youtube' && <Youtube className="w-5 h-5 text-red-500" />}
                {type === 'docs' && <FileText className="w-5 h-5 text-primary" />}
              </div>
              <div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors">{resource.title}</CardTitle>
                <CardDescription>
                  {type === 'course' && 'provider' in resource && resource.provider}
                  {type === 'youtube' && 'channel' in resource && 'subscribers' in resource && 
                    `${resource.channel} • ${resource.subscribers} subscribers`}
                  {type === 'docs' && 'type' in resource && resource.type}
                </CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="group-hover:bg-accent/10">
              <ExternalLink className="w-4 h-4 group-hover:text-accent transition-colors" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{resource.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {'duration' in resource && resource.duration && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {resource.duration}
                </div>
              )}
              {'rating' in resource && resource.rating && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {resource.rating}
                </div>
              )}
            </div>
            {'price' in resource && resource.price && (
              <Badge variant={resource.price === 'Free' ? 'secondary' : 'outline'}>
                {resource.price}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const currentResources = resources.computer[1] || {};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated online courses, YouTube channels, and documentation for Year 1 Computer Engineering at KNUST
          </p>
        </div>

        {/* Department Selection - Updated to show only Computer Engineering */}
        <div className="mb-8 space-y-6">
          <div className="text-center">
            <div className="bg-accent/10 rounded-lg p-4 inline-block">
              <div className="flex items-center space-x-3">
                <Cpu className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-accent">Computer Engineering - Year 1</h3>
                  <p className="text-sm text-muted-foreground">Foundation courses resources</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              📚 Currently showing Year 1 Computer Engineering resources. 
              <span className="font-medium text-accent"> Other years and Biomedical Engineering are deactivated - see documentation for activation.</span>
            </p>
          </div>
        </div>

        {/* Resources by Course */}
        <div className="space-y-12">
          {Object.entries(currentResources).map(([courseCode, courseResources]: [string, CourseResources]) => (
            <div key={courseCode} className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">{courseCode}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>

              {/* Online Courses */}
              {courseResources.onlineCourses && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-accent" />
                    Online Courses
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courseResources.onlineCourses.map((course: OnlineCourse, index: number) => (
                      <ResourceCard key={index} resource={course} type="course" />
                    ))}
                  </div>
                </div>
              )}

              {/* YouTube Channels */}
              {courseResources.youtubeChannels && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Youtube className="w-5 h-5 mr-2 text-red-500" />
                    YouTube Channels
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courseResources.youtubeChannels.map((channel: YoutubeChannel, index: number) => (
                      <ResourceCard key={index} resource={channel} type="youtube" />
                    ))}
                  </div>
                </div>
              )}

              {/* Documentation */}
              {courseResources.documentation && (
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Documentation & References
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {courseResources.documentation.map((doc: Documentation, index: number) => (
                      <ResourceCard key={index} resource={doc} type="docs" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {Object.keys(currentResources).length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Resources Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                We're currently curating more resources for Computer Engineering Year 1 courses.
                The available resources above are actively maintained and verified.
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline">
                  <Globe className="w-4 h-4 mr-2" />
                  Suggest Resources
                </Button>
                <Button className="bg-accent hover:bg-accent/90">
                  <FileText className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
