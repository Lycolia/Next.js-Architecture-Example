import { YearMonthDay } from '../../types/YearMonthDay';
import { useValue } from '../ValueState/ValueState';

export const useYmdSelectBox = (initialYmd: YearMonthDay) => {
  const year = useValue(initialYmd.year);
  const month = useValue(initialYmd.month);
  const day = useValue(initialYmd.day);

  return {
    year: {
      value: year.value,
      onChange: year.set,
    },
    month: {
      value: month.value,
      onChange: month.set,
    },
    day: {
      value: day.value,
      onChange: day.set,
    },
  };
};
