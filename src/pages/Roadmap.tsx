
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Target,
  Monitor
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseSidebar from '@/components/CourseSidebar';

const Roadmap = () => {
  const [selectedYear, setSelectedYear] = useState('1');
  const [selectedSemester, setSelectedSemester] = useState('semester1');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courseData = {
    computer: {
      1: {
        semester1: [
          {
            id: 'algebra',
            code: 'MATH 110',
            title: 'Algebra',
            credits: 3,
            icon: Target,
            purpose: 'Algebra is the fundamental language of mathematics, essential for problem-solving and modeling in all engineering disciplines. For Computer Engineering, it\'s the bedrock for understanding circuits, signals, algorithms, and even advanced topics like machine learning.',
            keyTopics: [
              'Basic Algebraic Operations: Variables, expressions, equations, inequalities',
              'Functions: Linear, quadratic, polynomial, exponential, logarithmic functions',
              'Systems of Equations: Solving simultaneous linear and non-linear equations',
              'Matrices and Determinants: Operations with matrices, solving systems using matrix methods',
              'Vectors: Basic vector operations, dot products, cross products'
            ],
            connections: 'Digital Logic Design: Boolean algebra, a core concept in digital logic, is an algebraic system. Circuit Analysis: Solving circuit equations heavily relies on algebraic manipulation. Data Structures & Algorithms: Understanding complexity analysis often involves algebraic reasoning.',
            image: 'photo-1635070041078-e363dbe005cb'
          },
          {
            id: 'applied-electricity',
            code: 'EE 120',
            title: 'Applied Electricity',
            credits: 4,
            icon: Zap,
            purpose: 'This course introduces the fundamental principles of electricity and magnetism, which are the core physics concepts behind all electronic devices and computer hardware. It\'s the starting point for understanding how circuits work.',
            keyTopics: [
              'Basic Electrical Quantities: Charge, current, voltage, resistance',
              'Ohm\'s Law: The foundational relationship between voltage, current, and resistance',
              'Kirchhoff\'s Laws: Current Law (KCL) and Voltage Law (KVL) for analyzing complex circuits',
              'DC Circuits: Series and parallel circuits, voltage and current dividers, power calculations',
              'Circuit Analysis Techniques: Nodal analysis, mesh analysis'
            ],
            connections: 'Digital Logic Design: Understanding how logic gates operate requires knowledge of basic electricity. Computer Architecture: Power delivery to CPU, memory, and other components. Embedded Systems: Designing and troubleshooting circuits for microcontrollers.',
            image: 'photo-1518709268805-4e9042af2176'
          },
          {
            id: 'technical-drawing',
            code: 'ENGR 130',
            title: 'Technical Drawing',
            credits: 2,
            icon: Code,
            purpose: 'Technical drawing teaches universal principles for creating and interpreting engineering drawings. For Computer Engineers, this skill is vital for visualizing and communicating hardware designs, circuit board layouts, and system architectures.',
            keyTopics: [
              'Drawing Instruments & Conventions: Use of drafting tools, lines, lettering, scales',
              'Orthographic Projection: Creating 2D views from a 3D object',
              'Isometric & Oblique Projections: Creating 3D representations on a 2D plane',
              'Dimensioning & Tolerancing: Properly adding measurements to drawings',
              'Basic CAD Introduction: Familiarity with CAD software for creating digital drawings'
            ],
            connections: 'PCB Design: Principles of spatial arrangement and precise dimensioning are directly applicable. Hardware Prototyping: Understanding how to draw mechanical plans for enclosures. System Diagrams: Clear representation of system components.',
            image: 'photo-1581833971358-2c8b550f87b3'
          },
          {
            id: 'basic-mechanics',
            code: 'ENGR 140',
            title: 'Basic Mechanics',
            credits: 3,
            icon: Target,
            purpose: 'This course introduces fundamental concepts of forces, motion, and energy. These principles are important for Computer Engineers working with physical systems, such as robotics, mechatronics, and embedded systems that interact with the physical world.',
            keyTopics: [
              'Statics: Forces, equilibrium, moments, center of gravity',
              'Kinematics: Displacement, velocity, acceleration, motion in 1D and 2D',
              'Dynamics: Newton\'s Laws of Motion, work, energy, power, momentum',
              'Simple Machines: Levers, pulleys, gears (basic understanding)'
            ],
            connections: 'Robotics: Understanding robot kinematics and dynamics is essential for programming robot control systems. Mechatronics: Provides the mechanical foundation for this interdisciplinary field. Physical Computing: Essential for embedded systems that control motors and actuators.',
            image: 'photo-1635070041409-e3e3b7e9b93d'
          },
          {
            id: 'communication-skills',
            code: 'ENG 150',
            title: 'Communication Skills',
            credits: 2,
            icon: Users,
            purpose: 'Effective communication is paramount for any engineer. This course focuses on developing the ability to convey technical information clearly, concisely, and persuasively, both orally and in writing.',
            keyTopics: [
              'Written Communication: Technical reports, lab reports, proposals, emails, documentation',
              'Oral Communication: Presentations, public speaking',
              'Interpersonal Communication: Active listening, constructive feedback, teamwork dynamics',
              'Research & Information Gathering: Citing sources, avoiding plagiarism',
              'Audience Analysis: Tailoring communication to different audiences'
            ],
            connections: 'Technical Documentation: Writing clear documentation for code and hardware designs. Team Projects: Collaborating effectively with developers and designers. Professional Development: Essential for leadership roles and client interaction.',
            image: 'photo-1552664730-d307ca884978'
          },
          {
            id: 'environmental-studies',
            code: 'ENVR 160',
            title: 'Environmental Studies',
            credits: 2,
            icon: Microscope,
            purpose: 'This course provides an understanding of environmental issues, sustainability, and the impact of human activities on the planet. For Computer Engineers, it fosters awareness of ethical responsibilities and sustainable design practices.',
            keyTopics: [
              'Ecosystems & Biodiversity: Basic ecological concepts',
              'Pollution: Air, water, soil pollution; sources and effects',
              'Climate Change: Causes, impacts, and mitigation strategies',
              'Natural Resources: Conservation and sustainable use',
              'Impact of Technology: Energy consumption of computing, e-waste, rare earth minerals'
            ],
            connections: 'Sustainable Computing: Designing energy-efficient hardware and software. E-waste Management: Understanding the lifecycle of electronic devices. Ethical Engineering: Considering societal and environmental impact of innovations.',
            image: 'photo-1441974231531-c6227db76b6e'
          },
          {
            id: 'engineering-technology',
            code: 'ENGR 170',
            title: 'Engineering Technology',
            credits: 3,
            icon: Cpu,
            purpose: 'This introductory course provides an overview of the engineering profession, different engineering disciplines, and fundamental engineering principles. It helps students understand the problem-solving mindset and ethical considerations.',
            keyTopics: [
              'Introduction to Engineering Disciplines: Overview of various engineering fields',
              'Engineering Design Process: Problem identification, conceptualization, design, analysis',
              'Units & Measurements: Importance of consistent units, dimensional analysis',
              'Basic Engineering Tools/Software: Introduction to spreadsheets, presentation software',
              'Engineering Ethics: Professional responsibility, safety, societal impact'
            ],
            connections: 'Problem-Solving: Systematic approach applicable to debugging code and designing circuits. Design Process: Framework for approaching hardware and software design projects. Interdisciplinary Understanding: How Computer Engineering fits into larger systems.',
            image: 'photo-1581092795442-8d6c60e56c28'
          }
        ],
        semester2: [
          {
            id: 'basic-electronics',
            code: 'EE 210',
            title: 'Basic Electronics',
            credits: 4,
            icon: Zap,
            purpose: 'This course is a direct continuation of Applied Electricity, delving deeper into electronic components, particularly semiconductor devices. It\'s fundamental for understanding how modern digital and analog circuits are built and process information.',
            keyTopics: [
              'Semiconductor Theory: Introduction to intrinsic/extrinsic semiconductors, P-N junctions',
              'Diodes: Characteristics, rectifiers, Zener diodes',
              'Transistors (BJT & MOSFET): Operation principles, biasing, basic amplifier configurations',
              'Operational Amplifiers (Op-Amps): Ideal characteristics, basic configurations',
              'Filters (Basic): RC and RL filters',
              'Power Supplies: Rectification, filtering, regulation'
            ],
            connections: 'Digital Logic Design: Transistors are the building blocks of all logic gates. Computer Architecture: Understanding electronic principles of memory and processor components. VLSI Design: Foundational understanding for integrated circuit design.',
            image: 'photo-1518709268805-4e9042af2176'
          },
          {
            id: 'electrical-machines',
            code: 'EE 220',
            title: 'Electrical Machines',
            credits: 3,
            icon: Cpu,
            purpose: 'This course introduces principles of electromechanical energy conversion, focusing on motors, generators, and transformers. Vital for Computer Engineers involved in power systems, robotics, and industrial automation.',
            keyTopics: [
              'Magnetic Circuits: Concepts of magnetic flux, reluctance, and inductance',
              'Transformers: Construction, operation, equivalent circuits, efficiency',
              'DC Machines: Motors and generators, construction, operating principles',
              'AC Machines: Induction motors, synchronous motors, generators',
              'Power Electronics (Introduction): Basic concepts of converting and controlling electrical power'
            ],
            connections: 'Robotics & Mechatronics: Understanding motor control is essential for robotic systems. Industrial Automation: Computer systems often control large machinery. Embedded Systems: Controlling various types of motors is a common application.',
            image: 'photo-1581833971358-2c8b550f87b3'
          },
          {
            id: 'calculus-analysis',
            code: 'MATH 210',
            title: 'Calculus with Analysis',
            credits: 4,
            icon: Target,
            purpose: 'This course deepens understanding of calculus, moving to more rigorous concepts and multi-variable calculus. It provides advanced mathematical tools for analyzing dynamic systems, signals, and complex engineering problems.',
            keyTopics: [
              'Limits & Continuity (Rigorous): Epsilon-delta definitions',
              'Derivatives & Integrals (Advanced): Applications in optimization, related rates',
              'Sequences & Series: Convergence tests, Taylor and Maclaurin series',
              'Multivariable Calculus: Partial derivatives, gradient, directional derivatives',
              'Multiple Integrals: Double and triple integrals, change of variables',
              'Vector Calculus (Introduction): Line integrals, surface integrals, fundamental theorems'
            ],
            connections: 'Signal Processing: Continuous-time signals, Fourier analysis, Laplace transforms. Control Systems: Designing controllers involves solving differential equations. Machine Learning: Optimization algorithms are rooted in multivariable calculus.',
            image: 'photo-1635070041078-e363dbe005cb'
          },
          {
            id: 'electrical-drawing',
            code: 'EE 230',
            title: 'Electrical Engineering Drawing',
            credits: 2,
            icon: Code,
            purpose: 'This course specializes technical drawing principles to electrical and electronic systems. It teaches standardized symbols, diagrams, and conventions for representing circuits, wiring, and system layouts.',
            keyTopics: [
              'Standard Electrical Symbols: Resistors, capacitors, inductors, sources, switches, logic gates',
              'Schematic Diagrams: Drawing and interpreting circuit diagrams',
              'Wiring Diagrams: Showing physical connections between components',
              'Block Diagrams: High-level representation of system components',
              'Flowcharts: Representing logical flow in control systems',
              'PCB Layout Principles: Basic concepts of component placement and routing'
            ],
            connections: 'Digital Logic Design: Drawing logic gate diagrams and digital circuit schematics. Embedded Systems: Creating schematics for microcontroller boards. Hardware Design: Essential for communicating designs to manufacturing teams.',
            image: 'photo-1581092795442-8d6c60e56c28'
          },
          {
            id: 'intro-it',
            code: 'CS 240',
            title: 'Intro to Information Technology',
            credits: 3,
            icon: Monitor,
            purpose: 'This course provides a broad overview of information technology concepts, systems, and applications. It gives Computer Engineers wider context of how computing systems are used in various industries.',
            keyTopics: [
              'Computer Hardware & Software: Detailed look at components, operating systems',
              'Networking Fundamentals: Internet, LANs, WANs, basic protocols, cloud computing',
              'Databases: Types of databases, basic database concepts',
              'Cybersecurity Basics: Threats, vulnerabilities, basic protection measures',
              'Web Technologies (Overview): HTML, CSS, client-server model',
              'IT Infrastructure: Servers, data centers'
            ],
            connections: 'Software Development: Provides context for application domains and user requirements. Networking: Reinforces concepts from practical IT deployment perspective. System Design: Understanding the overall IT ecosystem.',
            image: 'photo-1498050108023-c5249f4df085'
          },
          {
            id: 'intro-matlab',
            code: 'ENGR 250',
            title: 'Introduction to MATLAB',
            credits: 2,
            icon: Code,
            purpose: 'MATLAB is a powerful numerical computing environment and programming language widely used in engineering for data analysis, algorithm development, and modeling. Essential for simulating circuits, analyzing data, and developing control algorithms.',
            keyTopics: [
              'MATLAB Environment: Workspace, command window, editor',
              'Basic Syntax & Operations: Variables, arrays (vectors, matrices), basic arithmetic',
              'Scripting & Functions: Writing M-files, user-defined functions',
              'Control Flow: If/Else, Loops',
              'Plotting & Visualization: 2D and 3D plots, data visualization',
              'Numerical Operations: Solving linear equations, curve fitting, basic statistics'
            ],
            connections: 'Signal Processing: Simulating filters, analyzing signals, implementing DSP algorithms. Control Systems: Designing and analyzing control systems. Data Analysis: Processing experimental data and sensor readings.',
            image: 'photo-1461749280684-dccba630e2f6'
          },
          {
            id: 'communication-skills-2',
            code: 'ENG 260',
            title: 'Communication Skills 2',
            credits: 2,
            icon: Users,
            purpose: 'This course builds on foundational communication skills, focusing on more advanced and specialized forms of professional communication relevant to engineering contexts, with emphasis on presentation and technical writing.',
            keyTopics: [
              'Advanced Technical Writing: Research papers, grant proposals, formal reports',
              'Advanced Oral Presentations: Conference presentations, project defense',
              'Visual Communication: Designing effective graphs, charts, and diagrams',
              'Professional Ethics in Communication: Plagiarism, intellectual property',
              'Team Communication & Conflict Resolution: Strategies for effective collaboration',
              'Interviewing & Networking: Skills for career advancement'
            ],
            connections: 'Capstone Projects: Writing detailed project reports and delivering presentations. Professional Roles: Essential for leading teams and interacting with clients. Documentation: Creating high-quality documentation for software and hardware.',
            image: 'photo-1552664730-d307ca884978'
          }
        ]
      },
      // Other years deactivated - see documentation for reactivation
      2: null,
      3: null,
      4: null
    },
    // Biomedical Engineering deactivated - see documentation for reactivation
    biomedical: null
  };

  const CourseCard = ({ course }: { course: any }) => (
    <CourseSidebar course={course}>
      <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-accent/30 hover:border-l-accent bg-white/50 backdrop-blur-sm">
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
              <Badge className="bg-accent text-accent-foreground">
                {course.credits} Credits
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>
    </CourseSidebar>
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
            Explore Year 1 Computer Engineering courses and their connections to real-world careers
          </p>
        </div>

        {/* Department Note */}
        <div className="text-center mb-8">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              📚 Currently showing Computer Engineering Year 1 curriculum. 
              <span className="font-medium text-accent"> Other years and Biomedical Engineering are deactivated - see documentation for activation.</span>
            </p>
          </div>
        </div>

        {/* Computer Engineering Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Computer Engineering</h2>
            <p className="text-muted-foreground">
              Building the future of technology through hardware and software integration
            </p>
          </div>
          
          {/* Year 1 Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-accent/10 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-semibold text-accent">Year 1 Active</span>
              <Badge variant="secondary">Foundation Level</Badge>
            </div>
          </div>

          {/* Semester Selector */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-2 p-1 bg-accent/10 rounded-lg">
              <Button
                variant={selectedSemester === 'semester1' ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedSemester('semester1')}
                className={selectedSemester === 'semester1' ? "bg-accent hover:bg-accent/90 text-white" : "hover:bg-accent/20"}
              >
                Sem 1
              </Button>
              <Button
                variant={selectedSemester === 'semester2' ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedSemester('semester2')}
                className={selectedSemester === 'semester2' ? "bg-accent hover:bg-accent/90 text-white" : "hover:bg-accent/20"}
              >
                Sem 2
              </Button>
            </div>
          </div>

          {/* Courses Grid */}
          {courseData.computer[1] && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseData.computer[1][selectedSemester as 'semester1' | 'semester2']?.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          {/* Empty state for inactive years */}
          <Card className="mt-8 bg-muted/20 border-dashed">
            <CardContent className="text-center py-8">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Years 2-4 Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Additional years are currently deactivated. See documentation for activation instructions.
              </p>
              <Badge variant="outline">See Documentation</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Progress Tracking - Updated for Semester System */}
        <Card className="mt-12 bg-gradient-to-br from-accent/5 via-background to-primary/5 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-accent" />
              Your Semester Progress
            </CardTitle>
            <CardDescription>
              Track your progress through Year 1 Computer Engineering curriculum
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors ${
                  selectedSemester === 'semester1' 
                    ? 'bg-accent text-accent-foreground shadow-lg' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Semester 1</h4>
                <p className="text-sm text-muted-foreground">Foundation Courses</p>
                <Badge variant={selectedSemester === 'semester1' ? 'default' : 'outline'} className="mt-2">
                  7 Courses
                </Badge>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors ${
                  selectedSemester === 'semester2'
                    ? 'bg-accent text-accent-foreground shadow-lg' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Semester 2</h4>
                <p className="text-sm text-muted-foreground">Advanced Foundation</p>
                <Badge variant={selectedSemester === 'semester2' ? 'default' : 'outline'} className="mt-2">
                  7 Courses
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Roadmap;
