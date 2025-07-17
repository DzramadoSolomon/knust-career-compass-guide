
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

const Resources = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('computer');
  const [selectedYear, setSelectedYear] = useState('1');

  const resources = {
    computer: {
      1: {
        'CS 101': {
          onlineCourses: [
            {
              title: "Python for Everybody Specialization",
              provider: "Coursera - University of Michigan",
              duration: "8 months",
              rating: 4.8,
              price: "Free (with certificate option)",
              url: "#",
              description: "Complete Python programming course covering basics to web development"
            },
            {
              title: "Introduction to Programming with Python",
              provider: "edX - MIT",
              duration: "9 weeks",
              rating: 4.7,
              price: "Free",
              url: "#",
              description: "MIT's comprehensive introduction to programming concepts"
            }
          ],
          youtubeChannels: [
            {
              title: "Programming with Mosh",
              channel: "Programming with Mosh",
              subscribers: "3.2M",
              description: "High-quality programming tutorials for beginners",
              url: "#"
            },
            {
              title: "Python Tutorial for Beginners",
              channel: "Corey Schafer",
              subscribers: "1.1M",
              description: "In-depth Python tutorials with practical examples",
              url: "#"
            }
          ],
          documentation: [
            {
              title: "Python Official Documentation",
              type: "Official Docs",
              description: "Complete Python language reference and tutorials",
              url: "#"
            },
            {
              title: "Real Python",
              type: "Tutorial Site",
              description: "Practical Python tutorials and articles",
              url: "#"
            }
          ]
        },
        'MATH 101': {
          onlineCourses: [
            {
              title: "Calculus 1A: Differentiation",
              provider: "edX - MIT",
              duration: "13 weeks",
              rating: 4.6,
              price: "Free",
              url: "#",
              description: "Introduction to differential calculus with engineering applications"
            }
          ],
          youtubeChannels: [
            {
              title: "Khan Academy Calculus",
              channel: "Khan Academy",
              subscribers: "7.2M",
              description: "Comprehensive calculus tutorials with visual explanations",
              url: "#"
            }
          ],
          documentation: [
            {
              title: "Paul's Online Math Notes",
              type: "Tutorial Site",
              description: "Detailed calculus notes with examples and practice problems",
              url: "#"
            }
          ]
        }
      },
      2: {
        'CS 201': {
          onlineCourses: [
            {
              title: "Algorithms Specialization",
              provider: "Coursera - Stanford",
              duration: "4 months",
              rating: 4.9,
              price: "Free (with certificate option)",
              url: "#",
              description: "Comprehensive algorithms and data structures course"
            }
          ],
          youtubeChannels: [
            {
              title: "Abdul Bari",
              channel: "Abdul Bari",
              subscribers: "1.8M",
              description: "Excellent algorithms and data structures explanations",
              url: "#"
            }
          ],
          documentation: [
            {
              title: "Introduction to Algorithms (CLRS)",
              type: "Textbook",
              description: "The definitive guide to algorithms and data structures",
              url: "#"
            }
          ]
        }
      }
    },
    biomedical: {
      1: {
        'BME 101': {
          onlineCourses: [
            {
              title: "Introduction to Biomedical Engineering",
              provider: "Coursera - Duke University",
              duration: "6 weeks",
              rating: 4.5,
              price: "Free",
              url: "#",
              description: "Overview of biomedical engineering principles and applications"
            }
          ],
          youtubeChannels: [
            {
              title: "Biomedical Engineering Explained",
              channel: "BME Academy",
              subscribers: "250K",
              description: "Educational content on biomedical engineering concepts",
              url: "#"
            }
          ],
          documentation: [
            {
              title: "Biomedical Engineering Handbook",
              type: "Reference",
              description: "Comprehensive reference for biomedical engineering",
              url: "#"
            }
          ]
        }
      }
    }
  };

  const ResourceCard = ({ resource, type }: { resource: any, type: string }) => (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              {type === 'course' && <Monitor className="w-5 h-5 text-accent" />}
              {type === 'youtube' && <Youtube className="w-5 h-5 text-red-500" />}
              {type === 'docs' && <FileText className="w-5 h-5 text-primary" />}
            </div>
            <div>
              <CardTitle className="text-lg">{resource.title}</CardTitle>
              <CardDescription>
                {type === 'course' && resource.provider}
                {type === 'youtube' && `${resource.channel} • ${resource.subscribers} subscribers`}
                {type === 'docs' && resource.type}
              </CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{resource.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {resource.duration && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {resource.duration}
              </div>
            )}
            {resource.rating && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                {resource.rating}
              </div>
            )}
          </div>
          {resource.price && (
            <Badge variant={resource.price === 'Free' ? 'secondary' : 'outline'}>
              {resource.price}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const currentResources = resources[selectedDepartment as 'computer' | 'biomedical']?.[selectedYear as '1' | '2'] || {};

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
            Curated online courses, YouTube channels, and documentation to supplement your KNUST coursework
          </p>
        </div>

        {/* Department and Year Selection */}
        <div className="mb-8 space-y-6">
          {/* Department Tabs */}
          <Tabs value={selectedDepartment} onValueChange={setSelectedDepartment} className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="computer" className="flex items-center">
                  <Cpu className="w-4 h-4 mr-2" />
                  Computer Engineering
                </TabsTrigger>
                <TabsTrigger value="biomedical" className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Biomedical Engineering
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          {/* Year Selection */}
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-2 p-1 bg-muted rounded-lg">
              {[1, 2, 3, 4].map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year.toString() ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedYear(year.toString())}
                >
                  Year {year}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources by Course */}
        <div className="space-y-12">
          {Object.entries(currentResources).map(([courseCode, courseResources]) => (
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
                    {courseResources.onlineCourses.map((course: any, index: number) => (
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
                    {courseResources.youtubeChannels.map((channel: any, index: number) => (
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
                    {courseResources.documentation.map((doc: any, index: number) => (
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
                We're currently curating resources for {selectedDepartment === 'computer' ? 'Computer' : 'Biomedical'} Engineering Year {selectedYear}.
                Check back soon for comprehensive learning materials.
              </p>
              <Button>
                <Globe className="w-4 h-4 mr-2" />
                Suggest Resources
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Resources;
