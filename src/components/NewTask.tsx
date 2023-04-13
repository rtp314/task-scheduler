import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { Task, TaskInitialiser } from '../types';

type NewTaskProps = {};

const defaultTaskValues: TaskInitialiser = {
  name: '',
  startDate: 1,
  endDate: 1,
  numberOfHours: 0,
};

export default function NewTask({}: NewTaskProps) {
  const [name, setName] = useState(defaultTaskValues.name);
  const [startDate, setStartDate] = useState(defaultTaskValues.startDate);
  const [endDate, setEndDate] = useState(defaultTaskValues.endDate);
  const [numberOfHours, setNumberOfHours] = useState(defaultTaskValues.numberOfHours);

  const { addTask } = useTasks();

  function handleSubmit() {
    addTask({ name, startDate, endDate, numberOfHours });
    setName(defaultTaskValues.name);
    setStartDate(defaultTaskValues.startDate);
    setEndDate(defaultTaskValues.endDate);
    setNumberOfHours(defaultTaskValues.numberOfHours);
  }

  return (
    <div id="add-new-task">
      <label>
        Task Name
        <input type="text" placeholder="Task Name" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Start Date
        <input type="number" value={startDate} onChange={e => setStartDate(Number(e.target.value))} />
      </label>
      <label>
        End Date
        <input type="number" value={endDate} onChange={e => setEndDate(Number(e.target.value))} />
      </label>
      <label>
        Number of hours in Task
        <input type="number" value={numberOfHours} onChange={e => setNumberOfHours(Number(e.target.value))} />
      </label>
      <button onClick={handleSubmit}>Create Task</button>
    </div>
  );
}
