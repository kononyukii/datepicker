import moment, {Moment} from "moment";
import {CalendarType} from "../view/Calendar";

export const buildCalendar = (value: Moment): CalendarType =>  {
  const startDay: Moment = value.clone().startOf("month").startOf("week");
  const endDay: Moment = value.clone().endOf("month").endOf("week");

  const calendar: CalendarType = [];
  const day: Moment = startDay.clone().subtract(1, "day");

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7).fill(0).map(() => day.add(1, "day").clone())
    );
  }

  return calendar
}

const isSelected = (day: Moment, value: Moment): boolean => {
  return value.isSame(day, 'day')
}

export const beforeToday = (day: Moment): boolean => {
  return day.isBefore(moment(), 'day')
}

const isToday = (day: Moment): boolean => {
  return day.isSame(moment(), 'day')
}

export const dayStyles = (day: Moment, value: Moment): string => {
  if (beforeToday(day)) return 'before'
  if (isSelected(day, value)) return 'selected'
  if (isToday(day)) return 'today'
  return ''
}

export const currYear = (value: Moment): string => {
  return value.format('YYYY')
}

export const currMonthName = (value: Moment): string => {
  return value.format('MMMM')
}

export const prevMonth = (value: Moment): Moment => {
  return value.clone().subtract(1, 'month')
}

export const nextMonth = (value: Moment): Moment => {
  return value.clone().add(1, 'month')
}

export const thisMonth = (value: Moment): boolean => {
  return value.isSame(moment(), 'month')
}