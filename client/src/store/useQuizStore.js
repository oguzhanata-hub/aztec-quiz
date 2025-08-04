import {create} from 'zustand';

const useQuizStore = create((set) => ({
  username: '',
  difficulty: '',
  questions: [],
  currentQuestion: 0,
  correctAnswers: 0,
  timeTaken: 0,
  setUsername: (username) => set({ username }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setQuestions: (questions) => set({ questions }),
  nextQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
  incrementCorrectAnswers: () => set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
  setTimeTaken: (timeTaken) => set({ timeTaken }),
  reset: () => set({ username: '', difficulty: '', questions: [], currentQuestion: 0, correctAnswers: 0, timeTaken: 0 }),
}));

export default useQuizStore;
