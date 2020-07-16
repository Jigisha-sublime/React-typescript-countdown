import React, { Component } from "react";
import moment from "moment";
import SvgCircle, { mapNumber } from "./SvgCircle";

interface CountDownClassProps {
  timeTillDate: string;
  timeFormat: "MM DD YYYY, h:mm a";
}
interface CountDownClassState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  months: string;
}
class CountDownClass extends Component<
  CountDownClassProps,
  CountDownClassState
> {
  state = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
    months: ""
  };
  interval: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then.valueOf() - now.valueOf());
      const months = countdown.format("MM");
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      this.setState({ months, days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const { days, hours, minutes, seconds, months } = this.state;
    const monthsRadius = mapNumber(months, 30, 0, 0, 360);
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    return (
      <div>
        <h1>Countdown Class</h1>
        <div className="countdown-wrapper">
          {months && (
            <div className="countdown-item">
              <SvgCircle radius={monthsRadius} />
              {months}
              <span>months</span>
            </div>
          )}
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
    );
  }
}
export default CountDownClass;
