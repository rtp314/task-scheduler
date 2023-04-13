import { useSelection } from '../context/SelectionContext';
import { Task } from '../types';

type TaskProps = {
  task: Task;
  date: number;
};

export default function Task({ task, date }: TaskProps) {
  const { selectedTask, setSelectedTask } = useSelection();

  function handleClick(event: React.MouseEvent) {
    event.stopPropagation();
    setSelectedTask(task);
  }

  return (
    <div
      key={`${task.name}${task.startDate}`}
      className={`task ${task.startDate === date ? 'start' : ''} ${task.endDate === date ? 'end' : ''} ${
        selectedTask?.id === task.id ? 'highlight' : ''
      }`}
      onClick={handleClick}
    >
      {task.startDate === date && task.name}
    </div>
  );
}
