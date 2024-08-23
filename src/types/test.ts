import { CategoryType } from "./course";

export interface TestType {
    id: string;
    name: string;
    duration: string;
    questions: string;
    image: string;
}

export interface TestDetailType extends Omit<TestType, 'questions'> {
    questions: TestQuestion[];
    lastScore: string;
    description: string;
    categories: CategoryType[];
}

export interface TestQuestion {
    id: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
}

export interface TestHistory {
    id: number;
    title: string;
    date: string;
    score: number;
    totalQuestions: number;
    duration: string;
}