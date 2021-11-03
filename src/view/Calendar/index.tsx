import React, {Dispatch, useEffect, useState} from "react";
import {Moment} from "moment";
import "./style.scss";
import {buildCalendar} from "../../helpers/helpersFunction";
import Header from "../../components/CalendarComponent/Header";
import MainCalendar from "../../components/CalendarComponent/MainCalendar";

export type CalendarType = Array<Array<Moment>>

export interface CalendarProps {
  value: Moment,
  setValue: Dispatch<Moment>
}

const Calendar: React.FC<CalendarProps> = ({value, setValue}) => {
  const [calendar, setCalendar]: [CalendarType, Dispatch<any>] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className='calendar'>
      <Header value={value} setValue={setValue} />
      <MainCalendar calendar={calendar} value={value} setValue={setValue} />
    </div>
  );
};

export default Calendar;