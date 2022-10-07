import { YmdSelectBox } from '../../components/YmdSelector/YmdSelectBox';
import { useIndexPageState } from './IndexPageState';

type IndexPageViewProps = {
  ymd: {
    hasEmpty: boolean;
    maxYear: string;
    minYear: string;
    selected: ReturnType<typeof useIndexPageState>['ymd'];
  };
};

export const IndexPageView = (props: IndexPageViewProps) => {
  return (
    <div>
      <YmdSelectBox {...props.ymd} />
    </div>
  );
};
