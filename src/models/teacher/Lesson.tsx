import Language from '../Language';

export interface Lesson {
  lessonId: string;
  studentId: string;
  teacherId: string;
  lessonType: string;
  isPayment: boolean;
  language: Language;
}
