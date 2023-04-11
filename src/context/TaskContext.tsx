import { createContext, useContext, useState } from 'react';
import { Task } from '../types';

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);
const testTask = { name: 'taskOne', startDate: 3, endDate: 4, numberOfHours: 4 };

export default function TaskContextProvider(props: React.PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([testTask]);

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const contextValue = { tasks, addTask };

  return <TaskContext.Provider value={contextValue}>{props.children}</TaskContext.Provider>;
}

export function useTasks() {
  const contextValue = useContext(TaskContext);
  if (contextValue === null) throw new Error('Task context cannot be used outside the Task Context Provider');
  return contextValue;
}
