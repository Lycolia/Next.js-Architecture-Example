import { ChangeEvent } from 'react';

type MyInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const MyInput = (props: MyInputProps) => {
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    props.onChange(ev.currentTarget.value);
  };
  return <input value={props.value} onChange={onChange} />;
};
