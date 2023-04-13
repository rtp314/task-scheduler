export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

export type Day = {
  dayOfWeekIndex: number;
  dayOfWeek: typeof DAYS[number];
  hoursWorking: number;
  hoursIdle: number;
  date: number;
};

export type TaskInitialiser = {
  name: string;
  startDate: number;
  endDate: number;
  numberOfHours: number;
};

export type Task = TaskInitialiser & {
  id: string;
  position: number;
};

// export type Task = TaskInitialiser & {
//   elements: Element[];
//   position: number;
// };
