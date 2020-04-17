import {Lesson} from './Lesson';

export interface TeacherScheduled {
  schedulingId: string;
  lesson: Lesson;
  start: string;
  end: string;
}
