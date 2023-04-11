import { useState } from 'react';
import Calendar from './components/Calendar';
import TaskContextProvider from './context/TaskContext';
import NewTask from './context/NewTask';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TaskContextProvider>
        <div className="responsive-content-wrapper">
          <div className="responsive-content-main">
            <Calendar />
          </div>
          <div className="responsive-content-sidebar">
            <Sidebar />
          </div>
        </div>
        <NewTask />
      </TaskContextProvider>
    </div>
  );
}

export default App;
