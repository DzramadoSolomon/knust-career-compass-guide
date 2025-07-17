# Backend Integration Guide 🔗

This document outlines how to integrate the Kareer Kompas frontend with the planned Node.js/Express/PostgreSQL backend.

## 🏗️ Architecture Overview

```mermaid
graph TB
    A[React Frontend] --> B[Express API Server]
    B --> C[PostgreSQL Database]
    B --> D[Authentication Service]
    B --> E[Course Data Service]
    B --> F[User Profile Service]
    
    subgraph "Frontend Components"
        A1[Login Page]
        A2[Signup Page] 
        A3[Roadmap Page]
        A4[Profile Page]
    end
    
    subgraph "Backend Services"
        B1[Auth Routes]
        B2[User Routes]
        B3[Course Routes]
        B4[Analytics Routes]
    end
    
    A --> A1
    A --> A2
    A --> A3
    A --> A4
    
    B --> B1
    B --> B2
    B --> B3
    B --> B4
```

## 🛠️ Backend Setup

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- npm or yarn

### Project Structure
```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication, validation
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Helper functions
│   └── app.ts          # Express app setup
├── migrations/         # Database migrations
├── seeds/             # Sample data
└── tests/             # API tests
```

### Installation Steps
```bash
# Create backend directory
mkdir kareer-kompas-backend
cd kareer-kompas-backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express cors helmet morgan
npm install bcryptjs jsonwebtoken
npm install pg typeorm reflect-metadata
npm install dotenv express-rate-limit

# Install development dependencies
npm install -D @types/node @types/express typescript ts-node nodemon
npm install -D @types/bcryptjs @types/jsonwebtoken @types/cors
```

## 🗄️ Database Schema

### User Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    college VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    year_of_study INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Course Table
```sql
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    credits INTEGER NOT NULL,
    department VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    relevance_level VARCHAR(20) NOT NULL,
    industry_applications TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Career Paths Table
```sql
CREATE TABLE career_paths (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    department VARCHAR(100) NOT NULL,
    required_skills TEXT[],
    salary_range VARCHAR(100),
    job_outlook VARCHAR(100)
);
```

### Course-Career Mapping
```sql
CREATE TABLE course_career_mappings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID REFERENCES courses(id),
    career_path_id UUID REFERENCES career_paths(id),
    relevance_score INTEGER NOT NULL -- 1-10 scale
);
```

## 🔐 Authentication API

### Endpoints

#### POST /api/auth/register
```typescript
// Request Body
interface RegisterRequest {
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  password: string;
  college: string;
  department: string;
  yearOfStudy: number;
}

// Response
interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    studentId: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  token?: string;
}
```

#### POST /api/auth/login
```typescript
// Request Body
interface LoginRequest {
  identifier: string; // student ID or email
  password: string;
}

// Response
interface LoginResponse {
  success: boolean;
  message: string;
  user?: UserProfile;
  token?: string;
}
```

#### POST /api/auth/logout
```typescript
// Headers: Authorization: Bearer <token>
// Response
interface LogoutResponse {
  success: boolean;
  message: string;
}
```

### Frontend Integration

#### Authentication Hook
```typescript
// src/hooks/useAuth.ts
import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  studentId: string;
  email: string;
  firstName: string;
  lastName: string;
  department: string;
  yearOfStudy: number;
}

interface AuthContextType {
  user: User | null;
  login: (identifier: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: RegisterRequest) => Promise<boolean>;
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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (identifier: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setUser(data.user);
        localStorage.setItem('token', data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const register = async (userData: RegisterRequest): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        localStorage.setItem('token', data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and fetch user data
      // Example:
      fetch('/api/auth/validate', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUser(data.user);
        }
      })
      .catch(error => console.error('Token validation error:', error))
      .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

#### Updated Login Component
```typescript
// src/pages/Login.tsx
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    
    if (success) {
      navigate('/roadmap');
    } else {
      // Show error message
    }
  };

  // ... rest of component
};
```

## 📚 Course Data API

### Endpoints

#### GET /api/courses
```typescript
// Query Parameters
interface CourseQuery {
  department?: string;
  year?: number;
  search?: string;
}

// Response
interface CourseResponse {
  courses: Course[];
  total: number;
  filters: {
    departments: string[];
    years: number[];
  };
}
```

#### GET /api/courses/:id
```typescript
// Response
interface CourseDetailResponse {
  course: Course & {
    prerequisites: Course[];
    connections: Course[];
    careerPaths: CareerPath[];
  };
}
```

#### GET /api/career-paths
```typescript
// Query Parameters
interface CareerQuery {
  department?: string;
  search?: string;
}

// Response
interface CareerResponse {
  careerPaths: CareerPath[];
  total: number;
}
```

### Frontend Integration

#### API Service
```typescript
// src/services/api.ts
const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://api.kareerkompas.edu.gh' 
  : 'http://localhost:3001';

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    
    return response.json();
  }

  // Course methods
  async getCourses(query: CourseQuery = {}): Promise<CourseResponse> {
    const params = new URLSearchParams(query as any);
    return this.request(`/api/courses?${params}`);
  }

  async getCourseDetail(id: string): Promise<CourseDetailResponse> {
    return this.request(`/api/courses/${id}`);
  }

  // User methods
  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    return this.request('/api/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();
```

#### Data Fetching Hook
```typescript
// src/hooks/useCourses.ts
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';

export const useCourses = (query: CourseQuery) => {
  return useQuery({
    queryKey: ['courses', query],
    queryFn: () => apiService.getCourses(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCourseDetail = (id: string) => {
  return useQuery({
    queryKey: ['course', id],
    queryFn: () => apiService.getCourseDetail(id),
    enabled: !!id,
  });
};
```

## 🔄 Data Synchronization

### Real-time Updates
```typescript
// WebSocket connection for real-time updates
import { io } from 'socket.io-client';

class WebSocketService {
  private socket: Socket;

  connect(token: string) {
    this.socket = io(API_BASE, {
      auth: { token }
    });

    this.socket.on('course-updated', (course: Course) => {
      // Update course data in React Query cache
      queryClient.setQueryData(['course', course.id], course);
    });

    this.socket.on('user-progress-updated', (progress: UserProgress) => {
      // Update user progress
      queryClient.setQueryData(['user-progress'], progress);
    });
  }

  disconnect() {
    this.socket?.disconnect();
  }
}

export const webSocketService = new WebSocketService();
```

## 📊 Analytics Integration

### User Tracking
```typescript
// Analytics service
class AnalyticsService {
  async trackPageView(page: string, user?: User) {
    await apiService.request('/api/analytics/page-view', {
      method: 'POST',
      body: JSON.stringify({
        page,
        userId: user?.id,
        timestamp: new Date().toISOString(),
      }),
    });
  }

  async trackCourseView(courseId: string, user?: User) {
    await apiService.request('/api/analytics/course-view', {
      method: 'POST',
      body: JSON.stringify({
        courseId,
        userId: user?.id,
        timestamp: new Date().toISOString(),
      }),
    });
  }
}

export const analyticsService = new AnalyticsService();
```

## 🚀 Deployment Configuration

### Environment Variables
```bash
# Frontend (.env)
VITE_API_URL=https://api.kareerkompas.edu.gh
VITE_WS_URL=wss://api.kareerkompas.edu.gh

# Backend (.env)
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/kareerkompas
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=https://kareerkompas.edu.gh
```

### API Proxy Setup (Development)
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  // ... other config
});
```

## 🔍 Error Handling

### Global Error Handler
```typescript
// src/hooks/useErrorHandler.ts
export const useErrorHandler = () => {
  const { toast } = useToast();

  const handleError = (error: any) => {
    console.error('Application Error:', error);
    
    toast({
      title: "Something went wrong",
      description: error.message || "Please try again later",
      variant: "destructive",
    });
  };

  return { handleError };
};
```

## 📋 Integration Checklist

### Phase 1: Authentication
- [ ] Set up backend authentication endpoints
- [ ] Implement JWT token management
- [ ] Create protected route middleware
- [ ] Update frontend login/signup forms
- [ ] Test authentication flow

### Phase 2: Course Data
- [ ] Create course database schema
- [ ] Implement course CRUD operations
- [ ] Build course search and filtering
- [ ] Update roadmap page with real data
- [ ] Add course detail views

### Phase 3: User Management
- [ ] Implement user profile management
- [ ] Add progress tracking
- [ ] Create user preferences
- [ ] Build admin dashboard
- [ ] Add user analytics

### Phase 4: Advanced Features
- [ ] Real-time notifications
- [ ] Course recommendations
- [ ] Social features
- [ ] Mobile app API
- [ ] Third-party integrations

---

**Backend Integration Guide maintained by Gabriel (Backend Lead)**
