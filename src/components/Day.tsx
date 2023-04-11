import { useTasks } from '../context/TaskContext';
import { Day } from '../types';

type DayProps = {
  day: Day;
};

export default function Day({ day }: DayProps) {
  const { dayOfWeekIndex, dayOfWeek, date } = day;
  const isWeekend = dayOfWeekIndex === 0 || dayOfWeekIndex === 6;

  const { tasks } = useTasks();
  const thisDaysTasks = tasks.filter(task => task.startDate <= date && task.endDate >= date);

  return (
    <div className={`day ${isWeekend ? 'weekend' : ''}`}>
      <div className="day-title">
        <h3>{date}</h3>
        {dayOfWeek}
      </div>
      <div className="day-tasks">
        {thisDaysTasks.map(task => (
          <div
            key={`${task.name}${task.startDate}`}
            className={`task ${task.startDate === date ? 'start' : ''} ${task.endDate === date ? 'end' : ''}`}
          >
            {task.startDate === date && task.name}
          </div>
        ))}
      </div>
    </div>
  );
}
