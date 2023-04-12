export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

export type Day = {
  dayOfWeekIndex: number;
  dayOfWeek: typeof DAYS[number];
  hoursWorking: number;
  hoursIdle: number;
  date: number;
};

export type Task = {
  name: string;
  startDate: number;
  endDate: number;
  numberOfHours: number;
  highlight?: boolean;
  position: number;
};

// export type Task = TaskInitialiser & {
//   elements: Element[];
//   position: number;
// };
