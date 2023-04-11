import { useTasks } from '../context/TaskContext';
import { Day } from '../types';

type DayProps = {
  day: Day;
  children: React.ReactNode;
};

export default function Day({ day, children }: DayProps) {
  const { dayOfWeekIndex, dayOfWeek, date } = day;
  const isWeekend = dayOfWeekIndex === 0 || dayOfWeekIndex === 6;

  return (
    <div className={`day ${isWeekend ? 'weekend' : ''}`}>
      <div className="day-title">
        <h3>{date}</h3>
        {dayOfWeek}
      </div>
      <div className="day-tasks">{children}</div>
    </div>
  );
}
