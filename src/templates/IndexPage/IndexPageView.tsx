import { MyInput } from 'src/components/MyInput';
import { YmdSelectBox } from 'src/components/YmdSelector';
import { useIndexPageState } from 'src/templates/IndexPage/IndexPageState';

type IndexPageViewProps = {
  ymd: {
    hasEmpty: boolean;
    maxYear: string;
    minYear: string;
    selected: ReturnType<typeof useIndexPageState>['ymd'];
  };
  input: {
    value: string;
    onChange: (value: string) => void;
  };
};

export const IndexPageView = (props: IndexPageViewProps) => {
  return (
    <div>
      <YmdSelectBox {...props.ymd} />
      <MyInput {...props.input} />
    </div>
  );
};
