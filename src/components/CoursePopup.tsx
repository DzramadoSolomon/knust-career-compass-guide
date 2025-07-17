
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ExternalLink, 
  BookOpen, 
  Briefcase, 
  ArrowRight, 
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Star
} from 'lucide-react';

interface CoursePopupProps {
  courseCode: string;
  children: React.ReactNode;
}

const CoursePopup = ({ courseCode, children }: CoursePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock detailed course data - this would come from backend
  const courseDetails = {
    'CS 101': {
      fullName: 'Introduction to Computer Programming',
      description: 'This course introduces students to fundamental programming concepts using Python. Students will learn about variables, data types, control structures, functions, and basic algorithms. The course emphasizes problem-solving skills and computational thinking.',
      prerequisites: ['None'],
      corequisites: ['MATH 101'],
      credits: 3,
      level: 'Beginner',
      department: 'Computer Engineering',
      semester: 'First Semester',
      careerDetails: [
        {
          title: 'Software Developer',
          description: 'Design, develop, and maintain software applications and systems.',
          salaryRange: 'GHS 3,000 - 8,000/month',
          demand: 'High',
          growth: '+15% annually'
        },
        {
          title: 'Data Analyst',
          description: 'Analyze complex datasets to help organizations make informed decisions.',
          salaryRange: 'GHS 2,500 - 6,500/month',
          demand: 'Very High',
          growth: '+25% annually'
        },
        {
          title: 'Web Developer',
          description: 'Create and maintain websites and web applications.',
          salaryRange: 'GHS 2,800 - 7,000/month',
          demand: 'High',
          growth: '+8% annually'
        }
      ],
      industryApplications: [
        'Software Development',
        'Web Development',
        'Data Science',
        'Automation',
        'Game Development',
        'Mobile App Development'
      ],
      skills: [
        'Python Programming',
        'Problem Solving',
        'Algorithm Design',
        'Debugging',
        'Code Documentation'
      ]
    },
    'MATH 101': {
      fullName: 'Calculus I - Differential Calculus',
      description: 'Introduction to differential calculus including limits, derivatives, and applications. Topics include function analysis, optimization problems, and related rates with emphasis on engineering applications.',
      prerequisites: ['High School Mathematics'],
      corequisites: ['None'],
      credits: 3,
      level: 'Intermediate',
      department: 'Mathematics',
      semester: 'First Semester',
      careerDetails: [
        {
          title: 'Systems Engineer',
          description: 'Design and analyze complex engineering systems using mathematical models.',
          salaryRange: 'GHS 4,000 - 10,000/month',
          demand: 'High',
          growth: '+12% annually'
        },
        {
          title: 'Data Scientist',
          description: 'Apply mathematical and statistical methods to extract insights from data.',
          salaryRange: 'GHS 5,000 - 12,000/month',
          demand: 'Very High',
          growth: '+22% annually'
        }
      ],
      industryApplications: [
        'Signal Processing',
        'Control Systems',
        'Optimization',
        'Machine Learning',
        'Financial Modeling'
      ],
      skills: [
        'Mathematical Modeling',
        'Problem Analysis',
        'Optimization Techniques',
        'Critical Thinking'
      ]
    }
  };

  const course = courseDetails[courseCode as keyof typeof courseDetails];

  if (!course) {
    return <span>{children}</span>;
  }

  const CareerCard = ({ career }: { career: any }) => (
    <Card className="hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{career.title}</CardTitle>
            <CardDescription className="text-sm">{career.description}</CardDescription>
          </div>
          <Badge variant={career.demand === 'Very High' ? 'default' : 'secondary'}>
            {career.demand} Demand
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-muted-foreground">
              <DollarSign className="w-4 h-4 mr-1" />
              Salary Range
            </span>
            <span className="font-medium text-accent">{career.salaryRange}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-muted-foreground">
              <TrendingUp className="w-4 h-4 mr-1" />
              Growth Rate
            </span>
            <span className="font-medium text-primary">{career.growth}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-left w-full hover:text-primary transition-colors">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div>
            <DialogTitle className="text-2xl font-bold">{courseCode}</DialogTitle>
            <DialogDescription className="text-lg text-primary font-medium">
              {course.fullName}
            </DialogDescription>
          </div>
          
          {/* Course Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Credits</div>
              <div className="font-semibold">{course.credits}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Level</div>
              <div className="font-semibold">{course.level}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Department</div>
              <div className="font-semibold text-xs">{course.department}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Semester</div>
              <div className="font-semibold text-xs">{course.semester}</div>
            </div>
          </div>
        </DialogHeader>

        <Separator />

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary" />
              Course Description
            </h3>
            <p className="text-muted-foreground leading-relaxed">{course.description}</p>
          </div>

          {/* Prerequisites & Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Prerequisites</h4>
              <div className="flex flex-wrap gap-2">
                {course.prerequisites.map((prereq, index) => (
                  <Badge key={index} variant="outline">{prereq}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Skills You'll Gain</h4>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent" />
              Industry Applications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {course.industryApplications.map((application, index) => (
                <Badge key={index} variant="outline" className="justify-center">
                  {application}
                </Badge>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-secondary" />
              Career Opportunities
            </h3>
            <div className="grid gap-4">
              {course.careerDetails.map((career, index) => (
                <CareerCard key={index} career={career} />
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center pt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button className="bg-accent hover:bg-accent/90">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Roadmap
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoursePopup;
