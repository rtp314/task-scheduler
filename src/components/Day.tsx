import { Day } from '../types';

type DayProps = {
  day: Day;
};

export default function Day({ day }: DayProps) {
  const isWeekend = day.dayOfWeekIndex === 0 || day.dayOfWeekIndex === 6;
  return (
    <div className={`day ${isWeekend ? 'weekend' : ''}`}>
      <h3>{day.date}</h3>
      {day.dayOfWeek}
    </div>
  );
}
