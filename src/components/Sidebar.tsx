import { useSelection } from '../context/SelectionContext';

export default function Sidebar() {
  const { selectedTask } = useSelection();
  return (
    <div id="sidebar">
      <div>{selectedTask ? selectedTask.name : 'No task selected'}</div>
      <div>Currently Selected Day</div>
    </div>
  );
}
