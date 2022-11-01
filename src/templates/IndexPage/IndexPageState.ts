import { useValue } from 'src/hooks/ValueState/ValueState';
import { useYmdSelectBox } from 'src/hooks/YmdSelectBoxState/YmdSelectBoxState';

export const useIndexPageState = () => {
  const ymd = useYmdSelectBox({
    year: '',
    month: '',
    day: '',
  });

  const input = useValue('');

  return {
    ymd,
    input,
  };
};
