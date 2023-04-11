import { useState } from 'react';
import Calendar from './components/Calendar';
import TaskContextProvider from './context/TaskContext';
import NewTask from './components/NewTask';
import Sidebar from './components/Sidebar';
import SelectionContextProvider from './context/SelectionContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TaskContextProvider>
        <SelectionContextProvider>
          <div className="responsive-content-wrapper">
            <div className="responsive-content-main">
              <Calendar />
            </div>
            <div className="responsive-content-sidebar">
              <Sidebar />
            </div>
          </div>
          <NewTask />
        </SelectionContextProvider>
      </TaskContextProvider>
    </div>
  );
}

export default App;
