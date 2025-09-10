import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Target, 
  ArrowRight, 
  X 
} from 'lucide-react';

interface CourseSidebarProps {
  course: {
    id: string;
    code: string;
    title: string;
    credits: number;
    purpose: string;
    keyTopics: string[];
    connections: string;
    image: string;
  };
  children: React.ReactNode;
}

const CourseSidebar = ({ course, children }: CourseSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-[90vw] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="space-y-4">
          <div>
            <SheetTitle className="text-2xl font-bold">{course.code}</SheetTitle>
            <SheetDescription className="text-lg text-primary font-medium">
              {course.title}
            </SheetDescription>
          </div>
          
          {/* Course Image */}
          <div className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden rounded-lg">
            <img 
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-accent/90 text-accent-foreground">
                {course.credits} Credits
              </Badge>
            </div>
          </div>
        </SheetHeader>

        <Separator className="my-6" />

        <div className="space-y-6">
          {/* Purpose & Relevance */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Target className="w-5 h-5 mr-2 text-accent" />
                Purpose & Relevance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{course.purpose}</p>
            </CardContent>
          </Card>

          {/* Key Topics/Modules */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Key Topics/Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{topic}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Connections to Computer Engineering & Future Learning */}
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <ArrowRight className="w-5 h-5 mr-2 text-secondary" />
                Connections to Computer Engineering & Future Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{course.connections}</p>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CourseSidebar;