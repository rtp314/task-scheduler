import { useSelection } from '../context/SelectionContext';

export default function Sidebar() {
  const { selectedTask, selectedDay } = useSelection();

  const formatter = new Intl.DateTimeFormat('en-us', { dateStyle: 'full' });
  const day = new Date(2023, 4, selectedDay?.date || 0);
  const dayString = formatter.format(day);

  return (
    <div id="sidebar">
      <div>
        <h3>Selected Task</h3>
        {selectedTask ? selectedTask.name : 'No task selected'}
      </div>
      <div>
        <h3>Currently Selected Day</h3>
        {selectedDay ? dayString : 'No day selected'}
      </div>
    </div>
  );
}
