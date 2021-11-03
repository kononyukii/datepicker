import React from "react";
import {currMonthName, currYear, nextMonth, prevMonth, thisMonth} from "../../helpers/helpersFunction";
import {CalendarProps} from "../../view/Calendar";

const Header: React.FC<CalendarProps> = ({value, setValue}) => {
  return (
    <div className='calendar__header'>
      <div className='calendar__arrow' onClick={() => !thisMonth(value) && setValue(prevMonth(value))}>
        {!thisMonth(value) && String.fromCharCode(171)}
      </div>
      <div>{currMonthName(value)} {currYear(value)}</div>
      <div className='calendar__arrow' onClick={() => setValue((nextMonth(value)))}>
        {String.fromCharCode(187)}
      </div>
    </div>
  );
};

export default Header;