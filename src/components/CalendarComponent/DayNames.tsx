import React from "react";
import moment from "moment";
import classNames from "classnames";

export const defaultWeekdays: string[] = Array.apply(null, Array(7)).map((_, i: number): string => {
  return moment(i, "e").startOf("week").isoWeekday(i + 1).format("ddd");
});

const DayNames: React.FC = () => {
  return (
    <>
      {defaultWeekdays.map((day: string, i: number) => (
        <div
          className={classNames("calendar__day calendar__day-name", {
            weekend: day === "Sat" || day === 'Sun'
          })}
          key={i}
        >
          <div>{day}</div>
        </div>
      ))}
    </>
  );
};

export default DayNames;