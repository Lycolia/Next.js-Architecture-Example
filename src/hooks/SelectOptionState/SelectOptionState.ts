import { SelectOption } from '../../components/SelectBox';
import { useValue } from '../ValueState/ValueState';

export const useSelectOption = (initialText: string, initialValue: string) => {
  const text = useValue(initialText);
  const value = useValue(initialValue);

  const setOption = (_value: SelectOption) => {
    text.set(_value.text);
    value.set(_value.value);
  };

  return {
    text: text.value,
    value: value.value,
    setOption,
  };
};
