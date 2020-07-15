import React, { useState, useEffect } from 'react'
import moment from 'moment'
import SvgCircle, { mapNumber } from './SvgCircle'

const CountDown = (props) => {

  const { timeTillDate, timeFormat } = props;
  const initialState = {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const then = moment(timeTillDate, timeFormat);
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');
      setState({ days, hours, minutes, seconds });
      // need to check timing countdown 
    })
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  const { days, hours, minutes, seconds } = state;

  const daysRadius = mapNumber(days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  return (
    <div>
      <h1>Countdown</h1>
      <div className="countdown-wrapper">
        {days && (
          <div className="countdown-item">
            <SvgCircle radius={daysRadius} />
            {days}
            <span>days</span>
          </div>
        )}
        {hours && (
          <div className="countdown-item">
            <SvgCircle radius={hoursRadius} />
            {hours}
            <span>hours</span>
          </div>
        )}
        {minutes && (
          <div className="countdown-item">
            <SvgCircle radius={minutesRadius} />
            {minutes}
            <span>minutes</span>
          </div>
        )}
        {seconds && (
          <div className="countdown-item">
            <SvgCircle radius={secondsRadius} />
            {seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CountDown
