import { Task } from '../types';

type TaskProps = {
  task: Task;
  date: number;
};

export default function Task({ task, date }: TaskProps) {
  return (
    <div
      key={`${task.name}${task.startDate}`}
      className={`task ${task.startDate === date ? 'start' : ''} ${task.endDate === date ? 'end' : ''} ${
        task.highlight ? 'highlight' : ''
      }`}
    >
      {task.startDate === date && task.name}
    </div>
  );
}
