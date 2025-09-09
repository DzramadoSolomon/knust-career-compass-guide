# Activation Guide for Kareer Kompas

This guide explains how to activate deactivated features and expand the application with new content.

## Table of Contents
1. [Activating Deactivated Years](#activating-deactivated-years)
2. [Activating Biomedical Engineering](#activating-biomedical-engineering)
3. [Adding New Courses](#adding-new-courses)
4. [Adding Learning Resources](#adding-learning-resources)
5. [Updating Course Links](#updating-course-links)

## Activating Deactivated Years

### Computer Engineering Years 2-4

Currently, only Year 1 is active in the roadmap. To activate Years 2-4:

#### 1. Update Course Data Structure

In `src/pages/Roadmap.tsx`, find the `courseData` object and replace the null values:

```typescript
const courseData = {
  computer: {
    1: {
      // Current Year 1 data...
    },
    2: {
      semester1: [
        // Add Year 2 Semester 1 courses here
        {
          id: 'course-id',
          code: 'COURSE CODE',
          title: 'Course Title',
          credits: 3,
          icon: IconComponent,
          purpose: 'Course purpose and relevance...',
          keyTopics: [
            'Topic 1: Description',
            'Topic 2: Description',
            // Add more topics
          ],
          connections: 'Connections to Computer Engineering and future learning...',
          image: 'unsplash-image-id'
        }
      ],
      semester2: [
        // Add Year 2 Semester 2 courses here
      ]
    },
    3: {
      // Add Year 3 structure similar to above
    },
    4: {
      // Add Year 4 structure similar to above
    }
  }
};
```

#### 2. Update Year Selection Logic

Find the year selector section and update the disabled state:

```typescript
// Currently shows all years but only Year 1 is functional
// Remove the disabled logic for years 2-4 once you add data

{[1, 2, 3, 4].map((year) => (
  <Button
    key={year}
    variant={selectedYear === year.toString() ? \"default\" : \"ghost\"}
    size=\"sm\"
    onClick={() => setSelectedYear(year.toString())}
    disabled={year > 1} // Remove this line after adding data
    className={selectedYear === year.toString() ? \"bg-accent hover:bg-accent/90\" : \"\"}
  >
    Year {year}
  </Button>
))}
```

## Activating Biomedical Engineering

To reactivate Biomedical Engineering:

#### 1. Update Course Data in Roadmap

In `src/pages/Roadmap.tsx`:

```typescript
const courseData = {
  computer: {
    // Existing computer engineering data
  },
  biomedical: {
    1: {
      semester1: [
        {
          id: 'bme101',
          code: 'BME 101',
          title: 'Introduction to Biomedical Engineering',
          credits: 3,
          icon: Heart,
          purpose: 'Course purpose...',
          keyTopics: ['Topic 1', 'Topic 2'],
          connections: 'Connections to biomedical engineering...',
          image: 'unsplash-image-id'
        }
        // Add more courses
      ],
      semester2: [
        // Add semester 2 courses
      ]
    }
    // Add years 2-4 as needed
  }
};
```

#### 2. Update Component Structure

Replace the single department view with the tabbed interface:

```typescript
// Add back the Tabs component import
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Replace the current single department structure with:
<Tabs defaultValue=\"computer\" className=\"space-y-8\">
  <div className=\"flex justify-center\">
    <TabsList className=\"grid w-full max-w-md grid-cols-2 bg-muted/50\">
      <TabsTrigger value=\"computer\">Computer Engineering</TabsTrigger>
      <TabsTrigger value=\"biomedical\">Biomedical Engineering</TabsTrigger>
    </TabsList>
  </div>

  <TabsContent value=\"computer\">
    {/* Computer Engineering Content */}
  </TabsContent>
  
  <TabsContent value=\"biomedical\">
    {/* Biomedical Engineering Content */}
  </TabsContent>
</Tabs>
```

## Adding New Courses

### Course Data Structure

Each course should follow this structure:

```typescript
{
  id: 'unique-course-id',
  code: 'COURSE CODE',
  title: 'Course Full Title',
  credits: number,
  icon: LucideIcon, // Import from lucide-react
  purpose: 'Detailed explanation of course purpose and relevance to the field',
  keyTopics: [
    'Topic 1: Detailed description of the topic',
    'Topic 2: Another topic with description',
    // Add 4-6 key topics per course
  ],
  connections: 'Explanation of how this course connects to Computer Engineering career paths and future learning opportunities',
  image: 'unsplash-image-id' // Get from Unsplash for visual appeal
}
```

### Adding a New Course

1. Add the course object to the appropriate year and semester in `courseData`
2. Ensure the course follows the structure above
3. Use appropriate Lucide icons for visual consistency
4. Test the course sidebar functionality

## Adding Learning Resources

### Resources Data Structure

In `src/pages/Resources.tsx`, add resources for each course:

```typescript
const resources: ResourcesData = {
  computer: {
    1: {
      'COURSE CODE': {
        onlineCourses: [
          {
            title: \"Course Name\",
            provider: \"Platform - Institution\",
            duration: \"X weeks/hours\",
            rating: 4.5,
            price: \"Free/Paid amount\",
            url: \"https://actual-course-url.com\",
            description: \"Brief description of the course content\"
          }
        ],
        youtubeChannels: [
          {
            title: \"Video/Playlist Title\",
            channel: \"Channel Name\",
            subscribers: \"X.XM\",
            description: \"What the channel/playlist covers\",
            url: \"https://youtube.com/channel-or-playlist-url\"
          }
        ],
        documentation: [
          {
            title: \"Documentation Title\",
            type: \"Official Docs/Tutorial Site/Reference\",
            description: \"What the documentation covers\",
            url: \"https://documentation-url.com\"
          }
        ]
      }
    }
  }
};
```

### Best Practices for Resources

1. **Use Real URLs**: Always link to actual, working resources
2. **Verify Links**: Check that all links are accessible and current
3. **Quality Content**: Prioritize high-quality, reputable sources
4. **Free First**: List free resources before paid ones
5. **Update Regularly**: Keep links current and remove dead links

## Updating Course Links

### Adding New Resource Links

To add a new resource to an existing course:

1. Navigate to `src/pages/Resources.tsx`
2. Find the course code in the resources object
3. Add to the appropriate category (onlineCourses, youtubeChannels, documentation)

### Resource Categories

- **Online Courses**: Structured courses from platforms like Coursera, edX, Udemy
- **YouTube Channels**: Educational channels or specific playlists
- **Documentation**: Official docs, tutorial sites, reference materials

### Link Format Examples

```typescript
// Online Course
{
  title: \"Complete Course Name\",
  provider: \"Platform - University/Organization\", 
  duration: \"X weeks\" or \"X hours\",
  rating: 4.5, // Out of 5
  price: \"Free\" or \"$XX.XX\",
  url: \"https://actual-link.com\",
  description: \"One-line description of course content\"
}

// YouTube Channel/Playlist
{
  title: \"Specific Video/Playlist Title\",
  channel: \"Channel Name\",
  subscribers: \"X.XM\", // Format: 1.2M, 500K, etc.
  description: \"What this channel/playlist teaches\",
  url: \"https://youtube.com/watch?v=xxx or /playlist?list=xxx\"
}

// Documentation
{
  title: \"Documentation/Reference Name\",
  type: \"Official Docs\" | \"Tutorial Site\" | \"Reference\" | \"Textbook\",
  description: \"What this resource provides\",
  url: \"https://documentation-site.com\"
}
```

## Database Integration

Once you connect the Supabase backend, you can replace the static data with dynamic database queries. The structure above maps well to database tables:

- **courses** table with course information
- **resources** table linked to courses
- **user_progress** table for personalized tracking

See the main EXPANSION_GUIDE.md for database schema details.

## Common Issues and Solutions

### Images Not Loading
- Verify Unsplash image IDs are correct
- Use format: `photo-1234567890123-abcdef123456`

### Links Not Working
- Test all URLs before committing
- Use HTTPS URLs when available
- Check for URL redirects

### Course Sidebar Not Opening
- Ensure course object has all required fields
- Check that icons are properly imported
- Verify CourseSidebar component is correctly wrapped

### Build Errors
- Check TypeScript interfaces match your data structure
- Ensure all imports are correct
- Verify component prop types

## Need Help?

If you encounter issues while expanding the application:

1. Check the console for error messages
2. Verify your data matches the TypeScript interfaces
3. Test changes incrementally
4. Refer to the existing working examples in Year 1 Computer Engineering

Remember to test thoroughly after making changes and update this documentation if you modify the data structures.
