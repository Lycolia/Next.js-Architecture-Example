import { useIndexPageState } from 'src/templates/IndexPage/IndexPageState';
import { IndexPageView } from 'src/templates/IndexPage/IndexPageView';

export const IndexPageUseCase = () => {
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
