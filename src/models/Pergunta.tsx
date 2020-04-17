import {Resposta} from './Resposta';

export interface Pergunta {
  questionId: string;
  number: number;
  questionDescription: string;
  correctAnswer: string;
  answers: Resposta [];
}
