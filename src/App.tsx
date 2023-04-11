import { useState } from 'react';
import Calendar from './components/Calendar';
import TaskContextProvider from './context/TaskContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TaskContextProvider>
        <Calendar />
      </TaskContextProvider>
    </div>
  );
}

export default App;
