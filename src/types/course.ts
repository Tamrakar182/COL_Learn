import { ModuleType } from './module';

export interface CourseType {
  id: string;
  title: string;
  duration: string;
  teacher: string;
  image: string;
}

export interface CourseDetail extends CourseType {
  modules: ModuleType[];
  categories: CategoryType[];
  description: string;
  completion: string;
  nextModule: string;
}

export interface CategoryType {
  id: string;
  name: string;
}

export interface CourseHistory {
  id: number;
  title: string;
  nextModule: string;
  lastModule: string;
  progress: number;
}
