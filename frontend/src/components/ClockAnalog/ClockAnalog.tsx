import style from './ClockAnalog.module.css';

export default function ClockAnalog({ time }: { time: Date }) {
  const secondAngle = (time.getSeconds() / 60) * 360;
  const minuteAngle = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
  const hourAngle = ((time.getHours() % 12 + time.getMinutes() / 60) / 12) * 360;

  return (
    <div className={ style.clock }>
      <svg className={ style.svg } viewBox="0 0 100 100">
        {/* Clock face */}
        <circle className={ style.circle } cx="50" cy="50" r="45" />
        {/* Hour hand */}
        <line
          className={ style.hour } 
          x1="50"
          y1="50"
          x2="50"
          y2="35"
          transform={`rotate(${hourAngle}, 50, 50)`}
          data-testid="hour"
        />
        {/* Minute hand */}
        <line
          className={ style.minute } 
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          transform={`rotate(${minuteAngle}, 50, 50)`}
          data-testid="minute"
        />
        {/* Second hand */}
        <line
          className={ style.second }
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          transform={`rotate(${secondAngle}, 50, 50)`}
          data-testid="second"
        />
        {/* Center dot */}
        <circle className={ style.dot }  cx="50" cy="50" r="1" />
      </svg>
    </div>
  );
}