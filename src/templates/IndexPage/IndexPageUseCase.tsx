import { useIndexPageState } from './IndexPageState';
import { IndexPageView } from './IndexPageView';

export const IndexPageUseCase = () => {
  const ps = useIndexPageState();
  const prop = {
    ymd: {
      hasEmpty: true,
      maxYear: new Date().getFullYear().toString(),
      minYear: '1900',
      selected: ps.ymd,
    },
  };

  return <IndexPageView ymd={prop.ymd} />;
};
