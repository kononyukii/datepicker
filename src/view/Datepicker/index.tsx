import React, {Dispatch, useState} from "react";
import moment, {Moment} from "moment";
import Calendar from "../Calendar";

const Datepicker: React.FC = () => {
  const [value, setValue]: [value: Moment, setValue: Dispatch<Moment>] = useState(moment());
  const [showCalendar, setShowCalendar] = useState<boolean>(false)

  return (
    <div className='datepicker'>
      <input
        className='custom-input custom-input__calendar'
        value={moment(value).format('L')}
        onClick={() => setShowCalendar(!showCalendar)}
        readOnly
      />
      {showCalendar && <Calendar value={value} setValue={setValue} />}
    </div>
  );
};

export default Datepicker;