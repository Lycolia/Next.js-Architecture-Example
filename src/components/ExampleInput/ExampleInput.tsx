import { ChangeEvent } from 'react';

type ExampleInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const ExampleInput = (props: ExampleInputProps) => {
  console.log('**Re-render: ExampleInput');
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    props.onChange(ev.currentTarget.value);
  };
  return <input value={props.value} onChange={onChange} />;
};
