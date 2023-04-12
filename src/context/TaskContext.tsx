import { createContext, useContext, useState } from 'react';
import { Task } from '../types';

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);
const testTask1 = { name: 'Task One', startDate: 3, endDate: 4, numberOfHours: 4, position: 0 };
const testTask2 = { name: 'Task Two', startDate: 4, endDate: 7, numberOfHours: 4, position: 1 };

export default function TaskContextProvider(props: React.PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([testTask1, testTask2]);

  const addTask = (newTask: Task) => {
    setTasks(prev => {
      const tasksOnSameDay = prev.filter(
        task => task.startDate <= newTask.startDate || task.endDate >= newTask.startDate,
      );
      let newTaskPosition = 0;
      if (tasksOnSameDay.length !== 0) {
        tasksOnSameDay.forEach(task => {
          if (task.position && task.position >= newTaskPosition) newTaskPosition = task.position + 1;
        });
      }
      return [...prev, { ...newTask, position: newTaskPosition }];
    });
  };

  const contextValue = { tasks, addTask };

  return <TaskContext.Provider value={contextValue}>{props.children}</TaskContext.Provider>;
}

export function useTasks() {
  const contextValue = useContext(TaskContext);
  if (contextValue === null) throw new Error('Task context cannot be used outside the Task Context Provider');
  return contextValue;
}
