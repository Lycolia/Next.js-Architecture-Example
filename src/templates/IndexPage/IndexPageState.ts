import { useYmdSelectBox } from '../../hooks/YmdSelectBoxState/YmdSelectBoxState';

export const useIndexPageState = () => {
  const ymd = useYmdSelectBox({
    year: '',
    month: '',
    day: '',
  });

  return {
    ymd,
  };
};
