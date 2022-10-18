import { useValue } from 'src/hooks/ValueState/ValueState';
import { useYmdSelectBox } from '../../hooks/YmdSelectBoxState/YmdSelectBoxState';

export const useIndexPageState = () => {
  console.log('Re-render: useIndexPageState');
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
