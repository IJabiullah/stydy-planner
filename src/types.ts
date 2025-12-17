export interface Topic {
  id: string;
  name: string;
  completed: boolean;
}

export interface Subject {
  id: string;
  name: string;
  syllabus: string;
  topics: Topic[];
}

export type Theme = 'light' | 'dark';
