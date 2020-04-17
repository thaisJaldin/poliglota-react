import Language from '../Language';

export interface StudentScheduled {
  scheduleId: string;
  language: Language;
  dataSchedule: string;
  startTime: string;
  endTime: string;
  wasAccept: boolean;
  isPayment: boolean;
}
