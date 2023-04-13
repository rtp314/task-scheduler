import { createContext, useContext, useState } from 'react';
import { Day, Task } from '../types';

type SelectionContextType = {
  selectedTask: Task | null;
  setSelectedTask: (task: Task) => void;
  selectedDay: Day | null;
  setSelectedDay: (day: Day) => void;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export function useSelection() {
  const contextValue = useContext(SelectionContext);
  if (contextValue === null) throw new Error('Selection context cannot be used outside the Selection Context Provider');
  return contextValue;
}

export default function SelectionContextProvider(props: React.PropsWithChildren) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  const contextValue = { selectedTask, setSelectedTask, selectedDay, setSelectedDay };

  return <SelectionContext.Provider value={contextValue}>{props.children}</SelectionContext.Provider>;
}
