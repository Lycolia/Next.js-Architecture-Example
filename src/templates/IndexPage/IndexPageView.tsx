import React from 'react';
import { ExampleInput } from 'src/components/ExampleInput/ExampleInput';
import { YmdSelectBox } from 'src/components/YmdSelector/YmdSelectBox';
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

const YmdMemo = React.memo(YmdSelectBox, (prev, next) => {
  return (
    prev.selected.year.value === next.selected.year.value &&
    prev.selected.month.value === next.selected.month.value &&
    prev.selected.day.value === next.selected.day.value
  );
});
const InputMemo = React.memo(ExampleInput, (prev, next) => {
  return prev.value === next.value;
});

export const IndexPageView = (props: IndexPageViewProps) => {
  console.log('*Re-render: IndexPageView');
  return (
    <div>
      <YmdMemo {...props.ymd} />
      <InputMemo {...props.input} />
    </div>
  );
};
