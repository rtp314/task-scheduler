import { useTasks } from '../context/TaskContext';
import type { Day, Task as TaskType } from '../types';
import Task from './Task';

type DayProps = {
  day: Day;
  tasks: TaskType[];
};

export default function Day({ day, tasks }: DayProps) {
  const { dayOfWeekIndex, dayOfWeek, date } = day;
  const isWeekend = dayOfWeekIndex === 0 || dayOfWeekIndex === 6;

  const numberOfTaskSlots = tasks.reduce(
    (maxPosition, currentTask) => (currentTask.position > maxPosition ? currentTask.position : maxPosition),
    0,
  );
  const blankSlots = Array(numberOfTaskSlots + 1).fill(null);
  const taskSlots = blankSlots.map((_, i) => tasks.find(task => task.position === i));

  return (
    <div className={`day ${isWeekend ? 'weekend' : ''}`}>
      <div className="day-title">
        <h3>{date}</h3>
        {dayOfWeek}
      </div>
      <div className="day-tasks">
        {taskSlots.map((task, i) => (
          <div key={i} className="task-slot">
            {task && <Task key={task.name} task={task} date={day.date} />}
          </div>
        ))}
      </div>
    </div>
  );
}
