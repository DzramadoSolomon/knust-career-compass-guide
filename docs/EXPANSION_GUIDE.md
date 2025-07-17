# Expansion Guide 📈

This guide explains how to expand and customize the Kareer Kompas application for additional departments, courses, and features.

## 🎯 Table of Contents

1. [Adding New Departments](#adding-new-departments)
2. [Adding New Courses](#adding-new-courses)
3. [Managing Career Data](#managing-career-data)
4. [Adding Learning Resources](#adding-learning-resources)
5. [Customizing UI Components](#customizing-ui-components)
6. [Database Schema for Backend](#database-schema-for-backend)

## 🏢 Adding New Departments

### 1. Update Department Configuration

Add new departments to the core configuration:

```typescript
// src/config/departments.ts
export const departments = {
  computer: {
    name: 'Computer Engineering',
    icon: 'Cpu',
    color: 'primary',
    description: 'Building the future of technology'
  },
  biomedical: {
    name: 'Biomedical Engineering', 
    icon: 'Heart',
    color: 'secondary',
    description: 'Bridging engineering and medicine'
  },
  // Add new department here
  mechanical: {
    name: 'Mechanical Engineering',
    icon: 'Wrench',
    color: 'accent',
    description: 'Designing machines and systems'
  }
};
```

### 2. Update Pages and Components

**Roadmap Page** (`src/pages/Roadmap.tsx`):
```typescript
// Add new tab to TabsList
<TabsTrigger value="mechanical">Mechanical Engineering</TabsTrigger>

// Add new TabsContent
<TabsContent value="mechanical" className="space-y-8">
  {/* Department content */}
</TabsContent>
```

**Resources Page** (`src/pages/Resources.tsx`):
```typescript
// Add new tab trigger
<TabsTrigger value="mechanical" className="flex items-center">
  <Wrench className="w-4 h-4 mr-2" />
  Mechanical Engineering
</TabsTrigger>
```

**Signup Page** (`src/pages/Signup.tsx`):
```typescript
// Add to department options
<SelectItem value="mechanical">Mechanical Engineering</SelectItem>
```

## 📚 Adding New Courses

### 1. Course Data Structure

Follow this structure when adding new courses:

```typescript
// src/data/courseData.ts
export interface Course {
  id: string;                    // Unique identifier
  code: string;                  // Course code (e.g., 'ME 101')
  title: string;                 // Course title
  credits: number;               // Credit hours
  icon: LucideIcon;             // Icon component
  description: string;           // Brief description
  relevance: 'High' | 'Medium' | 'Low';  // Industry relevance
  careers: string[];             // Related career paths
  connections: string[];         // Connected courses
  industry: string;              // Industry applications
  image?: string;                // Unsplash image ID (optional)
}

// Example new course
const newCourse: Course = {
  id: 'me101',
  code: 'ME 101',
  title: 'Engineering Mechanics',
  credits: 3,
  icon: Wrench,
  description: 'Fundamental principles of statics and dynamics',
  relevance: 'High',
  careers: ['Mechanical Engineer', 'Design Engineer', 'Manufacturing Engineer'],
  connections: ['ME 201', 'ME 301'],
  industry: 'Essential for mechanical design and analysis',
  image: 'photo-1581091226825-a6a2a5aee158'
};
```

### 2. Adding Courses to Department

```typescript
// Update courseData object in Roadmap.tsx
const courseData = {
  // ... existing departments
  mechanical: {
    1: [newCourse, /* other year 1 courses */],
    2: [/* year 2 courses */],
    3: [/* year 3 courses */],
    4: [/* year 4 courses */]
  }
};
```

### 3. Course Detail Information

Update CoursePopup component with detailed course information:

```typescript
// src/components/CoursePopup.tsx
const courseDetails = {
  'ME 101': {
    fullName: 'Engineering Mechanics - Statics and Dynamics',
    description: 'Comprehensive course covering...',
    prerequisites: ['MATH 101', 'PHYS 101'],
    corequisites: ['ME Lab 101'],
    credits: 3,
    level: 'Beginner',
    department: 'Mechanical Engineering',
    semester: 'First Semester',
    careerDetails: [
      {
        title: 'Mechanical Engineer',
        description: 'Design and analyze mechanical systems',
        salaryRange: 'GHS 3,500 - 9,000/month',
        demand: 'High',
        growth: '+8% annually'
      }
    ],
    industryApplications: [
      'Automotive Engineering',
      'Aerospace',
      'Manufacturing',
      'HVAC Systems'
    ],
    skills: [
      'Static Analysis',
      'Dynamic Analysis',
      'Free Body Diagrams',
      'Engineering Problem Solving'
    ]
  }
};
```

## 💼 Managing Career Data

### 1. Career Information Structure

Create a centralized career database:

```typescript
// src/data/careerData.ts
export interface CareerPath {
  id: string;
  title: string;
  description: string;
  salaryRange: {
    min: number;
    max: number;
    currency: 'GHS' | 'USD';
    period: 'monthly' | 'annually';
  };
  demand: 'Very High' | 'High' | 'Medium' | 'Low';
  growth: string;
  skills: string[];
  industries: string[];
  education: string[];
  relatedCourses: string[];
}

export const careers: Record<string, CareerPath> = {
  'software-developer': {
    id: 'software-developer',
    title: 'Software Developer',
    description: 'Design, develop, and maintain software applications',
    salaryRange: {
      min: 3000,
      max: 8000,
      currency: 'GHS',
      period: 'monthly'
    },
    demand: 'Very High',
    growth: '+15% annually',
    skills: ['Programming', 'Problem Solving', 'Testing', 'Version Control'],
    industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce'],
    education: ['Computer Engineering', 'Computer Science'],
    relatedCourses: ['CS 101', 'CS 201', 'CS 301']
  }
};
```

### 2. Updating Salary Ranges

Create a management interface for easy updates:

```typescript
// src/utils/careerManager.ts
export const updateCareerSalary = (
  careerId: string, 
  newSalaryRange: { min: number; max: number }
) => {
  // Update logic for backend integration
  // For now, update local data
  if (careers[careerId]) {
    careers[careerId].salaryRange = {
      ...careers[careerId].salaryRange,
      ...newSalaryRange
    };
  }
};

export const formatSalaryRange = (salaryRange: any) => {
  const { min, max, currency, period } = salaryRange;
  return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}/${period}`;
};
```

## 📖 Adding Learning Resources

### 1. Resource Data Structure

```typescript
// src/data/resourceData.ts
export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  type: 'course' | 'youtube' | 'documentation' | 'book' | 'tutorial';
  url: string;
  description: string;
  duration?: string;
  rating?: number;
  price: 'Free' | string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  courseCode: string;
}

// Example resource
const pythonCourse: LearningResource = {
  id: 'python-coursera-umich',
  title: 'Python for Everybody Specialization',
  provider: 'Coursera - University of Michigan',
  type: 'course',
  url: 'https://www.coursera.org/specializations/python',
  description: 'Complete Python programming course covering basics to web development',
  duration: '8 months',
  rating: 4.8,
  price: 'Free (with certificate option)',
  level: 'Beginner',
  courseCode: 'CS 101'
};
```

### 2. Adding Resources to Database

```typescript
// src/data/resourceData.ts
export const resourcesByDepartment = {
  computer: {
    1: {
      'CS 101': {
        onlineCourses: [pythonCourse],
        youtubeChannels: [/* youtube resources */],
        documentation: [/* documentation links */],
        books: [/* recommended books */]
      }
    }
  }
};
```

### 3. Resource Management Functions

```typescript
// src/utils/resourceManager.ts
export const addResource = (
  department: string,
  year: number,
  courseCode: string,
  resource: LearningResource
) => {
  // Add resource to the appropriate course
  // This will integrate with backend API
};

export const updateResource = (resourceId: string, updates: Partial<LearningResource>) => {
  // Update existing resource
};

export const removeResource = (resourceId: string) => {
  // Remove resource
};

export const getResourcesByCourse = (
  department: string,
  year: number,
  courseCode: string
) => {
  // Fetch resources for specific course
  return resourcesByDepartment[department]?.[year]?.[courseCode] || {};
};
```

## 🎨 Customizing UI Components

### 1. Adding New Icons

```typescript
// src/components/ui/icons.ts
import { 
  // ... existing imports
  Wrench,       // For Mechanical Engineering
  Zap,          // For Electrical Engineering
  Building,     // For Civil Engineering
  Atom          // For Chemical Engineering
} from 'lucide-react';

export const departmentIcons = {
  computer: Cpu,
  biomedical: Heart,
  mechanical: Wrench,
  electrical: Zap,
  civil: Building,
  chemical: Atom
};
```

### 2. Customizing Colors

```typescript
// src/index.css - Add new color schemes
:root {
  /* Mechanical Engineering Colors */
  --mechanical-primary: 120 75% 45%;
  --mechanical-secondary: 120 65% 35%;
  
  /* Electrical Engineering Colors */
  --electrical-primary: 60 95% 55%;
  --electrical-secondary: 60 85% 45%;
}
```

### 3. Creating Department-Specific Components

```typescript
// src/components/DepartmentCard.tsx
interface DepartmentCardProps {
  department: keyof typeof departments;
  isSelected: boolean;
  onClick: () => void;
}

export const DepartmentCard = ({ department, isSelected, onClick }: DepartmentCardProps) => {
  const config = departments[department];
  const Icon = departmentIcons[department];
  
  return (
    <Card 
      className={`cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary' : ''}`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Icon className="w-8 h-8 text-primary" />
          <div>
            <CardTitle>{config.name}</CardTitle>
            <CardDescription>{config.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
```

## 🗄️ Database Schema for Backend

### 1. Core Tables

```sql
-- Departments
CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon_name VARCHAR(50),
    color_scheme VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    credits INTEGER NOT NULL,
    department_id UUID REFERENCES departments(id),
    year INTEGER NOT NULL,
    semester INTEGER,
    relevance_level VARCHAR(20) NOT NULL,
    industry_applications TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Career Paths
CREATE TABLE career_paths (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    salary_min INTEGER,
    salary_max INTEGER,
    salary_currency VARCHAR(10) DEFAULT 'GHS',
    salary_period VARCHAR(20) DEFAULT 'monthly',
    demand_level VARCHAR(20),
    growth_rate VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Course-Career Mappings
CREATE TABLE course_career_mappings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID REFERENCES courses(id),
    career_path_id UUID REFERENCES career_paths(id),
    relevance_score INTEGER NOT NULL -- 1-10 scale
);

-- Learning Resources
CREATE TABLE learning_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    provider VARCHAR(255),
    resource_type VARCHAR(50) NOT NULL, -- 'course', 'youtube', 'documentation', etc.
    url VARCHAR(500),
    description TEXT,
    duration VARCHAR(100),
    rating DECIMAL(3,2),
    price VARCHAR(100),
    level VARCHAR(20),
    course_id UUID REFERENCES courses(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Course Prerequisites
CREATE TABLE course_prerequisites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID REFERENCES courses(id),
    prerequisite_id UUID REFERENCES courses(id),
    is_corequisite BOOLEAN DEFAULT FALSE
);
```

### 2. API Endpoints for Management

```typescript
// Backend API endpoints needed:

// Departments
GET    /api/departments
POST   /api/departments
PUT    /api/departments/:id
DELETE /api/departments/:id

// Courses  
GET    /api/courses?department=:dept&year=:year
POST   /api/courses
PUT    /api/courses/:id
DELETE /api/courses/:id

// Career Paths
GET    /api/careers
POST   /api/careers
PUT    /api/careers/:id
DELETE /api/careers/:id

// Learning Resources
GET    /api/resources?course=:courseId
POST   /api/resources
PUT    /api/resources/:id
DELETE /api/resources/:id

// Course Connections
GET    /api/courses/:id/connections
POST   /api/courses/:id/connections
DELETE /api/courses/:courseId/connections/:connectionId
```

## 🚀 Quick Start Commands

### Adding a New Department
```bash
# 1. Create department configuration
echo "Adding mechanical engineering department..."

# 2. Update department config file
# 3. Add to relevant components
# 4. Create course data
# 5. Add resources
# 6. Test thoroughly
```

### Adding a New Course
```bash
# 1. Define course object
# 2. Add to courseData
# 3. Create course details in CoursePopup
# 4. Add learning resources
# 5. Test course connections
```

## 📝 Best Practices

1. **Consistent Naming**: Use kebab-case for IDs and camelCase for object properties
2. **Icon Consistency**: Choose icons that clearly represent the subject matter
3. **Color Harmony**: Ensure new colors work well with existing KNUST brand colors
4. **Data Validation**: Always validate new data entries
5. **Testing**: Test all new features across different screen sizes
6. **Documentation**: Update this guide when adding new patterns

## 🔄 Future Enhancements

1. **Admin Dashboard**: Create interface for non-technical content management
2. **Bulk Import**: CSV/Excel import functionality for courses and resources
3. **Analytics**: Track which courses and careers are most viewed
4. **User Feedback**: Allow students to rate and suggest resources
5. **AI Integration**: Personalized course and career recommendations

---

**Expansion Guide maintained by the Development Team**
**Last updated: January 2025**
