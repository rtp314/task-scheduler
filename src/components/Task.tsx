import { useTasks } from '../context/TaskContext';
import { Task } from '../types';

type TaskProps = {
  task: Task;
  date: number;
};

export default function Task({ task, date }: TaskProps) {
  const { toggleHighlightTask } = useTasks();

  function handleClick() {
    toggleHighlightTask(task.id);
  }

  return (
    <div
      key={`${task.name}${task.startDate}`}
      className={`task ${task.startDate === date ? 'start' : ''} ${task.endDate === date ? 'end' : ''} ${
        task.highlight ? 'highlight' : ''
      }`}
      onClick={handleClick}
    >
      {task.startDate === date && task.name}
    </div>
  );
}
