import { useState } from 'react';
import { DAYS, Day } from '../types';
import DayCell from './Day';
import { useTasks } from '../context/TaskContext';
import Task from './Task';

type CalendarProps = {};

const hoursPerDay = 8;

function generateDays(numberOfDays = 35): Day[] {
  const blankArray = Array(numberOfDays).fill(false);
  return blankArray.map((_, i) => ({
    dayOfWeekIndex: i % 7,
    dayOfWeek: DAYS[i % 7],
    hoursWorking: 0,
    hoursIdle: hoursPerDay,
    date: i + 1,
  }));
}

export default function Calendar({}: CalendarProps) {
  const [days, setDays] = useState(generateDays());
  const { tasks } = useTasks();

  const tasksByDay = days.map(day => tasks.filter(task => task.startDate <= day.date && task.endDate >= day.date));

  return (
    <div id="calendar">
      {days.map((day, i) => (
        <DayCell key={i} day={day} tasks={tasksByDay[i]} />
      ))}
    </div>
  );
}
