import React from 'react'
import { Moment } from 'moment'
import { beforeToday, dayStyles } from '../../helpers/helpersFunction'
import {CalendarProps, CalendarType} from "../../view/Calendar";
import DayNames from "./DayNames";

interface MainCalendarProps extends CalendarProps {
  calendar: CalendarType
}

const MainCalendar: React.FC<MainCalendarProps> = ({calendar, value, setValue}) => {
  return (
    <div className='calendar__body'>
      <DayNames />
      {
        calendar.map((week: Array<Moment>, i: number) => <div key={i}>
          {
            week.map((day: Moment, i: number) => (
              <div
                key={i}
                className={`calendar__day ${dayStyles(day, value)}`}
                onClick={() => !beforeToday(day) && setValue(day)}
              >
                {day.format("D").toString()}
              </div>
            ))
          }
        </div>)
      }
    </div>
  )
}

export default MainCalendar