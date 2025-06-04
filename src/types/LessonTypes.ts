
export interface Lesson {
  id: number;
  title: string;
  type: string;
  duration: number;
  description: string;
}

export interface BaseLessonStep {
  type: string;
  title: string;
  content: string;
}

export interface IntroStep extends BaseLessonStep {
  type: 'intro';
  image?: string;
}

export interface StoryStep extends BaseLessonStep {
  type: 'story';
  clues?: string[];
}

export interface QuizStep extends BaseLessonStep {
  type: 'quiz';
  question: string;
  options: string[];
  correct: number;
}

export interface InteractiveStep extends BaseLessonStep {
  type: 'interactive';
  options: string[];
}

export interface ExplanationStep extends BaseLessonStep {
  type: 'explanation' | 'reveal';
  points?: number;
}

export type LessonStep = IntroStep | StoryStep | QuizStep | InteractiveStep | ExplanationStep;

export interface LessonContent {
  steps: LessonStep[];
}
