import { useValue } from 'src/hooks/ValueState';
import { YearMonthDay } from 'src/types/YearMonthDay';

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
