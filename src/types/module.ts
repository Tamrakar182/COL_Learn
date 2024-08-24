export interface ModuleType {
  id: string;
  name: string;
  time: string;
  description: string;
  units: UnitType[];
  completed: boolean;
}

export interface UnitType {
  id: string;
  title: string;
  time: string;
  type: 'content' | 'video' | 'quiz';
  content?: string;
  videoId?: string;
  quiz?: QuizType[];
}

export interface QuizType {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}
