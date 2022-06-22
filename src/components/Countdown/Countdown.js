import React , {useEffect, useState} from 'react'
import moment from 'moment'
import './style.css'
const  Countdown = () => {

  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);
  var interval;
  useEffect(() => {
        interval = setInterval(() => {
        const  timeTillDate = "8 31 2022, 9:00 am";
        const timeFormat  = "MM DD YYYY, h:mm a";
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }, 1000);
      return () => {
        if (interval) {
          clearInterval(interval);
      }
      }
  }, [])

    const daysRadius = mapNumber(days, 30, 0, 0, 360);
		const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
		const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
		const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    
    return (
      <div>
        
          <h2 className='countdown-title'>To Lauching XGoldenSpring</h2>
        	<div className='countdown-wrapper'>
					{days && (
						<div className='countdown-item'>
							<SVGCircle radius={daysRadius} />
							{days} 
							<span>days</span>
						</div>
					)}
					{hours && (
						<div className='countdown-item'>							
							<SVGCircle radius={hoursRadius} />
							{hours} 
							<span>hours</span>
						</div>
					)}
					{minutes && (
						<div className='countdown-item'>
							<SVGCircle radius={minutesRadius} />
							{minutes} 
							<span>minutes</span>
						</div>
					)}
					{seconds && (
						<div className='countdown-item'>
							<SVGCircle radius={secondsRadius} />
							{seconds} 
							<span>seconds</span>
						</div>
					)}
				</div>
        
      </div>
    )
  
}

const SVGCircle = ({ radius }) => (
	<svg className='countdown-svg'>
		<path fill="none" stroke="#c44394" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)}/>
	</svg>
);


// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
export default Countdown