import { YearMonthDay } from '../../types/YearMonthDay';
import { SelectOption } from '../SelectBox/SelectBox';

const DefaultValue = '';

const DefaultBirthYmdValue: YearMonthDay = {
  year: DefaultValue,
  month: DefaultValue,
  day: DefaultValue,
};

const createYearOptions = (maxYearValue: number, minYearValue: number) => {
  const yearItems = new Array<SelectOption>();

  for (let year = maxYearValue; year >= minYearValue; year--) {
    const yearValue = year.toString();
    yearItems.push({
      text: yearValue,
      value: yearValue,
    });
  }

  return yearItems;
};

const createMonthOptions = () => {
  const monthItems = new Array<SelectOption>();

  for (let month = 1; month <= 12; month++) {
    const monthValue = month.toString();
    monthItems.push({
      text: monthValue,
      value: monthValue,
    });
  }

  return monthItems;
};

const createDayOptions = (year: number, month: number) => {
  const dayItems = new Array<SelectOption>();
  const lastDayOfMonth = new Date(year, month, 0).getDate();

  for (let day = 1; day <= lastDayOfMonth; day++) {
    const dayValue = day.toString();
    dayItems.push({
      text: dayValue,
      value: dayValue,
    });
  }

  return dayItems;
};

export const YmdSelectBoxUtil = {
  DefaultValue,
  DefaultBirthYmdValue,
  createYearOptions,
  createMonthOptions,
  createDayOptions,
};
