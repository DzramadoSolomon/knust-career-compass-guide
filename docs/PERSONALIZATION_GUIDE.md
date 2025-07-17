
# User Personalization Guide 👤

This guide explains how to implement and expand user personalization features in Kareer Kompas.

## 🎯 Overview

User personalization allows students to have customized experiences based on their:
- Department (Computer/Biomedical Engineering)
- Year of Study (1st - 4th year)
- Completed Courses
- Career Interests
- Learning Preferences

## 🔐 Authentication & Profile Management

### 1. User Profile Structure

```typescript
// src/types/user.ts
export interface UserProfile {
  id: string;
  studentId: string;
  email: string;
  firstName: string;
  lastName: string;
  college: string;
  department: 'computer' | 'biomedical';
  yearOfStudy: 1 | 2 | 3 | 4;
  completedCourses: string[];
  currentCourses: string[];
  careerInterests: string[];
  learningPreferences: {
    preferredResourceTypes: ('course' | 'youtube' | 'documentation' | 'book')[];
    studySchedule: 'morning' | 'afternoon' | 'evening' | 'flexible';
    difficultyPreference: 'beginner' | 'intermediate' | 'advanced';
  };
  createdAt: string;
  lastLoginAt: string;
}
```

### 2. Authentication Context

```typescript
// src/contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage or validate token
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Implement login logic
    // For now, mock implementation
    const mockUser: UserProfile = {
      id: '1',
      studentId: 'KNUST/CE/2024/001',
      email,
      firstName: 'John',
      lastName: 'Doe',
      college: 'College of Engineering',
      department: 'computer',
      yearOfStudy: 2,
      completedCourses: ['CS 101', 'MATH 101', 'EE 101'],
      currentCourses: ['CS 201', 'CS 205'],
      careerInterests: ['Software Developer', 'Data Scientist'],
      learningPreferences: {
        preferredResourceTypes: ['course', 'youtube'],
        studySchedule: 'evening',
        difficultyPreference: 'intermediate'
      },
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };

    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

## 📚 Personalized Roadmap

### 1. Smart Course Filtering

```typescript
// src/hooks/usePersonalizedCourses.ts
import { useAuth } from '@/contexts/AuthContext';
import { useMemo } from 'react';

export const usePersonalizedCourses = () => {
  const { user } = useAuth();

  const getCoursesForUser = useMemo(() => {
    if (!user) return null;

    return {
      // Courses for current year
      currentYearCourses: courseData[user.department][user.yearOfStudy],
      
      // Recommended next courses
      nextYearCourses: user.yearOfStudy < 4 
        ? courseData[user.department][user.yearOfStudy + 1] 
        : [],
      
      // Prerequisites check
      canTakeCourse: (courseCode: string) => {
        const course = findCourseByCode(courseCode);
        if (!course) return false;
        
        return course.prerequisites.every(prereq => 
          user.completedCourses.includes(prereq)
        );
      },
      
      // Progress calculation
      progressPercentage: (user.completedCourses.length / getTotalCoursesInProgram()) * 100,
      
      // Suggested courses based on career interests
      suggestedCourses: getSuggestedCourses(user.careerInterests)
    };
  }, [user]);

  return getCoursesForUser;
};
```

### 2. Progress Tracking Component

```typescript
// src/components/PersonalizedProgress.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { usePersonalizedCourses } from '@/hooks/usePersonalizedCourses';

export const PersonalizedProgress = () => {
  const { user } = useAuth();
  const personalizedData = usePersonalizedCourses();

  if (!user || !personalizedData) return null;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="w-5 h-5 mr-2 text-primary" />
          Your Academic Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">
              {personalizedData.progressPercentage.toFixed(0)}%
            </span>
          </div>
          <Progress value={personalizedData.progressPercentage} className="h-2" />
        </div>

        {/* Course Status */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {user.completedCourses.length}
            </div>
            <div className="text-sm text-muted-foreground flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {user.currentCourses.length}
            </div>
            <div className="text-sm text-muted-foreground flex items-center justify-center">
              <Clock className="w-4 h-4 mr-1" />
              In Progress
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {personalizedData.nextYearCourses.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Next Year
            </div>
          </div>
        </div>

        {/* Career Interests */}
        <div>
          <h4 className="font-semibold mb-2">Your Career Interests</h4>
          <div className="flex flex-wrap gap-2">
            {user.careerInterests.map((interest) => (
              <Badge key={interest} variant="secondary">{interest}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
```

## 🎯 Personalized Resources

### 1. Smart Resource Filtering

```typescript
// src/hooks/usePersonalizedResources.ts
export const usePersonalizedResources = (courseCode: string) => {
  const { user } = useAuth();

  const getFilteredResources = useMemo(() => {
    if (!user) return null;

    const allResources = getResourcesByCourse(
      user.department, 
      user.yearOfStudy, 
      courseCode
    );

    // Filter by preferred resource types
    const filteredResources = {
      onlineCourses: allResources.onlineCourses?.filter(course => 
        user.learningPreferences.preferredResourceTypes.includes('course') &&
        course.level === user.learningPreferences.difficultyPreference
      ),
      youtubeChannels: allResources.youtubeChannels?.filter(channel =>
        user.learningPreferences.preferredResourceTypes.includes('youtube')
      ),
      documentation: allResources.documentation?.filter(doc =>
        user.learningPreferences.preferredResourceTypes.includes('documentation')
      )
    };

    return filteredResources;
  }, [user, courseCode]);

  return getFilteredResources;
};
```

### 2. Recommendation Engine

```typescript
// src/utils/recommendationEngine.ts
export class RecommendationEngine {
  static generateCourseRecommendations(user: UserProfile): string[] {
    const recommendations: string[] = [];
    
    // Based on career interests
    user.careerInterests.forEach(interest => {
      const relatedCourses = getCoursesForCareer(interest);
      recommendations.push(...relatedCourses);
    });

    // Based on completed courses
    user.completedCourses.forEach(completedCourse => {
      const nextCourses = getNextCoursesAfter(completedCourse);
      recommendations.push(...nextCourses);
    });

    // Remove duplicates and already completed
    return [...new Set(recommendations)].filter(course => 
      !user.completedCourses.includes(course) &&
      !user.currentCourses.includes(course)
    );
  }

  static generateResourceRecommendations(
    courseCode: string, 
    user: UserProfile
  ): LearningResource[] {
    const allResources = getResourcesByCourse(
      user.department,
      user.yearOfStudy,
      courseCode
    );

    // Score resources based on user preferences
    const scoredResources = Object.values(allResources)
      .flat()
      .map(resource => ({
        ...resource,
        score: this.calculateResourceScore(resource, user)
      }))
      .sort((a, b) => b.score - a.score);

    return scoredResources.slice(0, 10); // Top 10 recommendations
  }

  private static calculateResourceScore(
    resource: LearningResource,
    user: UserProfile
  ): number {
    let score = 0;

    // Prefer user's preferred resource types
    if (user.learningPreferences.preferredResourceTypes.includes(resource.type)) {
      score += 3;
    }

    // Match difficulty level
    if (resource.level === user.learningPreferences.difficultyPreference) {
      score += 2;
    }

    // Free resources get bonus points
    if (resource.price === 'Free') {
      score += 1;
    }

    // High-rated resources get bonus
    if (resource.rating && resource.rating >= 4.5) {
      score += 1;
    }

    return score;
  }
}
```

## 🎛️ User Preferences Management

### 1. Preferences Component

```typescript
// src/components/UserPreferences.tsx
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useAuth } from '@/contexts/AuthContext';

export const UserPreferences = () => {
  const { user, updateProfile } = useAuth();
  const [preferences, setPreferences] = useState(user?.learningPreferences || {});
  const [careerInterests, setCareerInterests] = useState(user?.careerInterests || []);

  const availableCareers = [
    'Software Developer', 'Data Scientist', 'Hardware Engineer',
    'Biomedical Engineer', 'Research Scientist', 'Product Manager'
  ];

  const handleSavePreferences = async () => {
    await updateProfile({
      learningPreferences: preferences,
      careerInterests
    });
  };

  const toggleCareerInterest = (career: string) => {
    setCareerInterests(prev => 
      prev.includes(career)
        ? prev.filter(c => c !== career)
        : [...prev, career]
    );
  };

  return (
    <div className="space-y-6">
      {/* Learning Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Preferred Difficulty Level</label>
            <Select 
              value={preferences.difficultyPreference} 
              onValueChange={(value) => setPreferences(prev => ({
                ...prev, 
                difficultyPreference: value as any
              }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Study Schedule</label>
            <Select 
              value={preferences.studySchedule} 
              onValueChange={(value) => setPreferences(prev => ({
                ...prev, 
                studySchedule: value as any
              }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Preferred Resource Types</label>
            <div className="space-y-2">
              {['course', 'youtube', 'documentation', 'book'].map(type => (
                <div key={type} className="flex items-center space-x-2">
                  <Switch 
                    checked={preferences.preferredResourceTypes?.includes(type as any)}
                    onCheckedChange={(checked) => {
                      setPreferences(prev => ({
                        ...prev,
                        preferredResourceTypes: checked
                          ? [...(prev.preferredResourceTypes || []), type as any]
                          : prev.preferredResourceTypes?.filter(t => t !== type) || []
                      }));
                    }}
                  />
                  <label className="capitalize">{type}</label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Interests */}
      <Card>
        <CardHeader>
          <CardTitle>Career Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {availableCareers.map(career => (
                <Button
                  key={career}
                  variant={careerInterests.includes(career) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCareerInterest(career)}
                  className="text-xs"
                >
                  {career}
                </Button>
              ))}
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Selected Interests</label>
              <div className="flex flex-wrap gap-2">
                {careerInterests.map(interest => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSavePreferences} className="w-full">
        Save Preferences
      </Button>
    </div>
  );
};
```

## 🔄 Auto-Navigation Based on Profile

### 1. Smart Routing

```typescript
// src/components/SmartNavigation.tsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const SmartNavigation = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && location.pathname === '/roadmap') {
      // Auto-navigate to user's department and year
      const searchParams = new URLSearchParams(location.search);
      
      if (!searchParams.get('department')) {
        searchParams.set('department', user.department);
        searchParams.set('year', user.yearOfStudy.toString());
        
        navigate(`/roadmap?${searchParams.toString()}`, { replace: true });
      }
    }
  }, [user, location, navigate]);

  return null;
};
```

### 2. Personalized Dashboard

```typescript
// src/pages/Dashboard.tsx
import { useAuth } from '@/contexts/AuthContext';
import { PersonalizedProgress } from '@/components/PersonalizedProgress';
import { RecommendedCourses } from '@/components/RecommendedCourses';
import { PersonalizedResources } from '@/components/PersonalizedResources';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your dashboard</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {user.firstName}!
          </h1>
          <p className="text-muted-foreground">
            {user.department} Engineering • Year {user.yearOfStudy}
          </p>
        </div>

        <div className="space-y-8">
          <PersonalizedProgress />
          <RecommendedCourses />
          <PersonalizedResources />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
```

## 📊 Analytics & Insights

### 1. User Behavior Tracking

```typescript
// src/utils/analytics.ts
export class UserAnalytics {
  static trackCourseView(courseCode: string, user: UserProfile) {
    // Track which courses users view most
    const event = {
      type: 'course_view',
      courseCode,
      userId: user.id,
      department: user.department,
      yearOfStudy: user.yearOfStudy,
      timestamp: new Date().toISOString()
    };
    
    // Send to analytics service
    this.sendEvent(event);
  }

  static trackResourceClick(resourceId: string, user: UserProfile) {
    const event = {
      type: 'resource_click',
      resourceId,
      userId: user.id,
      timestamp: new Date().toISOString()
    };
    
    this.sendEvent(event);
  }

  static generateUserInsights(user: UserProfile) {
    return {
      studyPattern: this.analyzeStudyPattern(user),
      recommendations: this.generateRecommendations(user),
      progressPrediction: this.predictProgress(user)
    };
  }
}
```

## 🚀 Implementation Steps

1. **Set up Authentication Context**
2. **Create User Profile Management**
3. **Implement Personalized Filtering**
4. **Add Smart Navigation**
5. **Create Recommendation Engine**
6. **Build Analytics System**
7. **Test Across Different User Profiles**

---

**Personalization Guide maintained by the Development Team**
**Last updated: January 2025**
