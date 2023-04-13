import { createContext, useContext, useState } from 'react';
import { Task, TaskInitialiser } from '../types';

type TaskContextType = {
  tasks: Task[];
  addTask: (task: TaskInitialiser) => void;
};

const TaskContext = createContext<TaskContextType | null>(null);
const testTask1 = { name: 'Task One', startDate: 3, endDate: 4, numberOfHours: 4, position: 0, id: '1234' };
const testTask2 = { name: 'Task Two', startDate: 4, endDate: 7, numberOfHours: 4, position: 1, id: '4321' };

export default function TaskContextProvider(props: React.PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([testTask1, testTask2]);

  const addTask = (newTask: TaskInitialiser) => {
    setTasks(prev => {
      const taskId = crypto.randomUUID();
      const tasksOnSameDay = prev
        .filter(task => task.startDate <= newTask.startDate && task.endDate >= newTask.startDate)
        .sort((a, b) => a.position - b.position);

      let newTaskPosition = 0;

      // find the first unassigned position among tasksOnSameDay
      if (tasksOnSameDay.length !== 0) {
        const highestTaskPosition = tasksOnSameDay.at(-1)!.position;
        for (let i = 0; i <= highestTaskPosition + 1; i++) {
          if (i > highestTaskPosition || tasksOnSameDay[i].position > i) {
            newTaskPosition = i;
            break;
          }
        }
      }
      return [...prev, { ...newTask, position: newTaskPosition, id: taskId }];
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
