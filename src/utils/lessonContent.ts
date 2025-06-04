
import { Lesson, LessonContent, IntroStep, StoryStep, QuizStep, ExplanationStep } from '@/types/LessonTypes';

export const getLessonContent = (lesson: Lesson): LessonContent => {
  switch (lesson.type) {
    case 'puzzle':
      return {
        steps: [
          {
            type: 'intro',
            title: 'Logic Puzzle Challenge',
            content: 'Welcome to today\'s logic puzzle! You\'ll need to use deductive reasoning to solve this mystery.',
            image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
          } as IntroStep,
          {
            type: 'story',
            title: 'The Case',
            content: 'Three friends - Alex, Blake, and Casey - each have a different pet (dog, cat, bird) and favorite color (red, blue, green). Can you figure out who has what?',
            clues: [
              'Alex doesn\'t like red and doesn\'t have a dog',
              'The person with the bird likes blue',
              'Casey has a cat and doesn\'t like green'
            ]
          } as StoryStep,
          {
            type: 'quiz',
            title: 'Solve the Puzzle',
            content: 'Now let\'s test your reasoning',
            question: 'Who has the bird?',
            options: ['Alex', 'Blake', 'Casey'],
            correct: 0
          } as QuizStep,
          {
            type: 'explanation',
            title: 'Great Work!',
            content: 'Alex has the bird! Since Casey has a cat and Alex doesn\'t have a dog, Alex must have the bird. And since the bird owner likes blue, Alex likes blue.',
            points: 150
          } as ExplanationStep
        ]
      };
    case 'story':
      return {
        steps: [
          {
            type: 'intro',
            title: 'Science Mystery: The Missing Formula',
            content: 'Dr. Chen\'s revolutionary formula has disappeared from her lab. As a detective scientist, you must solve this mystery!',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
          } as IntroStep,
          {
            type: 'interactive',
            title: 'Examine the Evidence',
            content: 'You find three clues at the scene. Which one seems most important?',
            options: [
              'A coffee mug with lipstick marks',
              'A torn piece of paper with chemical symbols',
              'An open window with muddy footprints'
            ]
          },
          {
            type: 'reveal',
            title: 'The Chemical Trail',
            content: 'The torn paper contains part of the formula! You notice it matches the periodic table pattern Dr. Chen was working on.',
            points: 100
          } as ExplanationStep
        ]
      };
    default:
      return {
        steps: [
          {
            type: 'intro',
            title: lesson.title,
            content: 'Welcome to this engaging lesson!',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
          } as IntroStep
        ]
      };
  }
};
