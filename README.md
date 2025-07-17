# Kareer Kompas 📍

A comprehensive career guidance platform for KNUST Engineering students, helping them map their academic journey to real-world career opportunities.

![KNUST Logo](https://via.placeholder.com/200x100/FFD700/000000?text=KNUST+LOGO)

## 🎯 Project Overview

Kareer Kompas bridges the gap between academic learning and career success for students in the College of Engineering at Kwame Nkrumah University of Science and Technology (KNUST). Currently focusing on Computer Engineering and Biomedical Engineering departments.

### 🌟 Key Features

- **Interactive Career Roadmaps**: Visual pathways from courses to careers
- **Course Connections**: Understanding how subjects link together
- **Industry Insights**: Real-world applications and job opportunities
- **Personalized Guidance**: Tailored recommendations based on year and department
- **Resource Hub**: Additional learning materials and career resources
- **Community Features**: Connect with peers and industry professionals

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **Lucide React** for icons

### Planned Backend Integration
- **Node.js** with Express and TypeScript
- **PostgreSQL** database
- **RESTful API** architecture

### Design
- **Figma** for UI/UX design
- **KNUST Brand Colors** for consistent theming

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kareer-kompas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── Navbar.tsx       # Navigation component
├── pages/               # Page components
│   ├── Home.tsx         # Landing page
│   ├── Login.tsx        # Authentication
│   ├── Signup.tsx       # User registration
│   ├── Roadmap.tsx      # Career roadmap visualization
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── index.css           # Global styles and design system
└── App.tsx             # Main application component
```

## 🎨 Design System

The application uses KNUST's official brand colors:
- **Primary (Gold)**: `hsl(45, 95%, 50%)`
- **Secondary (Red)**: `hsl(0, 85%, 55%)`
- **Accent (Green)**: `hsl(140, 75%, 35%)`

All colors are defined as CSS custom properties in `src/index.css` for consistency.

## 📱 Pages Overview

### 1. Home Page (`/`)
- **Purpose**: Landing page with app overview
- **Features**: Hero section, feature highlights, statistics
- **Target Users**: All visitors (authenticated and non-authenticated)

### 2. Login Page (`/login`)
- **Purpose**: User authentication
- **Features**: Student ID/email login, password recovery
- **Integration**: Ready for backend authentication service

### 3. Signup Page (`/signup`)
- **Purpose**: New user registration
- **Features**: Academic information collection, program selection
- **Data Collected**: Name, Student ID, College, Department, Year of Study

### 4. Roadmap Page (`/roadmap`)
- **Purpose**: Interactive career pathway visualization
- **Features**: 
  - Department selection (Computer/Biomedical Engineering)
  - Year-wise course breakdown
  - Course details with career connections
  - Industry relevance indicators
  - Progress tracking

## 🔄 User Flow

1. **Landing** → User visits home page
2. **Registration** → User creates account with academic info
3. **Profile Setup** → User selects college, department, and year
4. **Exploration** → User browses course roadmaps
5. **Course Selection** → User clicks on specific courses
6. **Career Discovery** → User views career connections and opportunities

## 🔗 Backend Integration Points

The frontend is designed with backend integration in mind:

### Authentication
- Login/logout functionality
- User session management
- Protected routes

### User Data
- Profile information storage
- Academic progress tracking
- Personalized recommendations

### Course Data
- Dynamic course information
- Real-time updates
- User-specific course mapping

### Analytics
- User interaction tracking
- Popular career paths
- Course effectiveness metrics

## 📊 Data Structure

### User Profile
```typescript
interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  college: string;
  department: 'computer' | 'biomedical';
  yearOfStudy: 1 | 2 | 3 | 4;
  completedCourses?: string[];
  careerInterests?: string[];
}
```

### Course Information
```typescript
interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  credits: number;
  department: string;
  year: number;
  relevanceLevel: 'High' | 'Medium' | 'Low';
  careerPaths: string[];
  prerequisites: string[];
  connections: string[];
  industryApplications: string;
}
```

## 🔧 Customization & Extension

### Adding New Departments
1. Update the `departments` configuration in `Signup.tsx`
2. Add course data for the new department in `Roadmap.tsx`
3. Create department-specific icons and colors

### Adding New Years
1. Extend the `years` array in signup and roadmap components
2. Add corresponding course data for each year
3. Update progress tracking logic

### Expanding Course Information
1. Modify the course interface to include new fields
2. Update the course cards to display additional information
3. Enhance the detail view with new sections

## 🎨 UI Components

All UI components are built using shadcn/ui and customized for KNUST branding:

- **Navigation**: Responsive navbar with mobile menu
- **Cards**: Course cards with hover effects and detailed views
- **Forms**: Multi-step forms with validation
- **Tabs**: Department and year selection
- **Badges**: Course relevance and career indicators
- **Buttons**: Consistent styling with hover states

## 📋 Development Roadmap

### Phase 1: Frontend Foundation ✅
- [x] Core page structure
- [x] Design system implementation
- [x] Responsive layouts
- [x] Navigation system

### Phase 2: Enhanced Interactivity
- [ ] Course filtering and search
- [ ] User preference settings
- [ ] Progress tracking
- [ ] Resource hub pages

### Phase 3: Backend Integration
- [ ] User authentication
- [ ] Database connectivity
- [ ] API endpoints
- [ ] Real-time data updates

### Phase 4: Advanced Features
- [ ] Career recommendation engine
- [ ] Community features
- [ ] Mentorship connections
- [ ] Industry partnerships

## 🤝 Contributing

### Team Structure
- **UI Design**: Olivia
- **Frontend Development**: Solomon
- **Backend Development**: Gabriel
- **Database Management**: Esi

### Development Guidelines
1. Follow the established design system
2. Maintain component modularity
3. Write comprehensive documentation
4. Test all new features
5. Follow TypeScript best practices

## 📝 License

This project is developed for KNUST students and is part of an academic initiative.

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for KNUST Engineering Students**