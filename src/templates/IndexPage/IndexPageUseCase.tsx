import { useIndexPageState } from './IndexPageState';
import { IndexPageView } from './IndexPageView';

export const IndexPageUseCase = () => {
  console.log('Re-render: IndexPageUseCase');
  const ps = useIndexPageState();
  const prop = {
    ymd: {
      hasEmpty: true,
      maxYear: new Date().getFullYear().toString(),
      minYear: '1900',
      selected: ps.ymd,
    },
    input: {
      value: ps.input.value,
      onChange: ps.input.set,
    },
  };

  return <IndexPageView ymd={prop.ymd} input={prop.input} />;
};
