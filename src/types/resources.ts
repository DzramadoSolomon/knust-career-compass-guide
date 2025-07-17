
export interface OnlineCourse {
  title: string;
  provider: string;
  duration: string;
  rating: number;
  price: string;
  url: string;
  description: string;
}

export interface YoutubeChannel {
  title: string;
  channel: string;
  subscribers: string;
  description: string;
  url: string;
}

export interface Documentation {
  title: string;
  type: string;
  description: string;
  url: string;
}

export interface CourseResources {
  onlineCourses?: OnlineCourse[];
  youtubeChannels?: YoutubeChannel[];
  documentation?: Documentation[];
}

export interface YearResources {
  [courseCode: string]: CourseResources;
}

export interface DepartmentResources {
  [year: string]: YearResources;
}

export interface ResourcesData {
  [department: string]: DepartmentResources;
}
