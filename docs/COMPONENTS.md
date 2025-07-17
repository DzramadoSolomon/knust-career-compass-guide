# Components Documentation 🧩

This document provides detailed information about the React components used in Kareer Kompas.

## 📁 Component Structure

```
src/components/
├── ui/                  # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── tabs.tsx
│   └── ... (other UI components)
└── Navbar.tsx           # Main navigation component
```

## 🧭 Navbar Component

**File**: `src/components/Navbar.tsx`

### Purpose
Primary navigation component providing consistent navigation across all pages.

### Features
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Active Route Highlighting**: Visual indication of current page
- **Authentication State**: Shows different options for logged-in vs guest users
- **KNUST Branding**: Consistent with university design language

### Props
```typescript
// Currently no props - uses React Router hooks internally
```

### Usage
```tsx
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <div>
      <Navbar />
      {/* Page content */}
    </div>
  );
}
```

### Navigation Items
- **Home** (`/`): Landing page
- **Roadmap** (`/roadmap`): Career pathway visualization
- **About** (`/about`): Information about the platform
- **Resources** (`/resources`): Additional learning materials

### Mobile Responsiveness
- **Breakpoint**: `md` (768px)
- **Mobile Menu**: Collapsible slide-down menu
- **Touch-Friendly**: Larger tap targets for mobile users

### Authentication Integration
```tsx
// Current state (hardcoded)
const isLoggedIn = false;

// Future integration point
const { user, logout } = useAuth(); // Custom auth hook
const isLoggedIn = !!user;
```

## 🎨 UI Components (shadcn/ui)

All UI components are based on shadcn/ui and customized for KNUST branding.

### Button Component
**Usage**: Form submissions, navigation, actions
**Variants**: 
- `default`: Primary KNUST gold
- `secondary`: KNUST red
- `outline`: Border with transparent background
- `ghost`: Minimal styling for subtle actions

### Card Component
**Usage**: Course information display, feature highlights
**Structure**:
- `CardHeader`: Title and description area
- `CardContent`: Main content area
- `CardFooter`: Action buttons or additional info

### Input Component
**Usage**: Form fields in login/signup
**Features**:
- Consistent styling with KNUST colors
- Error states and validation
- Accessible labels and descriptions

### Select Component
**Usage**: Dropdown selections (college, department, year)
**Features**:
- Searchable options
- Custom styling for consistency
- Keyboard navigation support

### Tabs Component
**Usage**: Department selection in roadmap
**Features**:
- Smooth transitions
- Active state styling
- Responsive layout

## 🔧 Extending Components

### Adding New Navigation Items
1. Update the `navigation` array in `Navbar.tsx`:
```tsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'New Page', href: '/new-page' }, // Add here
  // ... existing items
];
```

2. Create the corresponding page component
3. Add the route to `App.tsx`

### Creating Custom Components

1. **Create component file**:
```tsx
// src/components/CustomComponent.tsx
import { Card } from "@/components/ui/card";

interface CustomComponentProps {
  title: string;
  description: string;
}

export default function CustomComponent({ title, description }: CustomComponentProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
}
```

2. **Use consistent styling**:
- Follow the design system colors
- Use semantic tokens (primary, secondary, accent)
- Maintain responsive design patterns

3. **Add TypeScript interfaces**:
- Define clear prop types
- Use existing UI component patterns
- Document component purpose

### Component Best Practices

#### 1. Modularity
- Keep components focused on single responsibility
- Extract reusable logic into custom hooks
- Use composition over inheritance

#### 2. Accessibility
- Include proper ARIA labels
- Maintain keyboard navigation
- Use semantic HTML elements

#### 3. Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load components when appropriate

#### 4. Styling
- Use design system tokens
- Maintain consistent spacing (Tailwind spacing scale)
- Follow responsive design patterns

## 🎨 Component Styling Guidelines

### Color Usage
```tsx
// ✅ Correct - Using design system tokens
<Button className="bg-primary text-primary-foreground">

// ❌ Incorrect - Hard-coded colors  
<Button className="bg-yellow-500 text-black">
```

### Responsive Design
```tsx
// ✅ Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ❌ Desktop-first approach
<div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
```

### State Management
```tsx
// ✅ Local state for component-specific data
const [isOpen, setIsOpen] = useState(false);

// ✅ Props for parent-controlled state
interface Props {
  isVisible: boolean;
  onToggle: () => void;
}
```

## 📱 Responsive Breakpoints

Following Tailwind CSS default breakpoints:
- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Mobile-First Strategy
All components are designed mobile-first, with progressive enhancement for larger screens.

## 🧪 Testing Components

### Component Testing Strategy
1. **Unit Tests**: Individual component functionality
2. **Integration Tests**: Component interactions
3. **Visual Tests**: Styling and responsive behavior
4. **Accessibility Tests**: Screen reader compatibility

### Example Test Structure
```tsx
// CustomComponent.test.tsx
import { render, screen } from '@testing-library/react';
import CustomComponent from './CustomComponent';

describe('CustomComponent', () => {
  it('renders title and description', () => {
    render(
      <CustomComponent 
        title="Test Title" 
        description="Test Description" 
      />
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
```

## 🔄 Future Component Enhancements

### Planned Components
- **CourseCard**: Dedicated course information display
- **ProgressBar**: Academic progress visualization  
- **SearchFilter**: Course and career search functionality
- **UserProfile**: Student profile management
- **NotificationBanner**: System announcements

### Enhancement Priorities
1. **Accessibility Improvements**: Better screen reader support
2. **Animation System**: Smooth transitions and micro-interactions
3. **Theme System**: Light/dark mode support
4. **Internationalization**: Multi-language support

---

**Component Documentation maintained by the Frontend Team**
