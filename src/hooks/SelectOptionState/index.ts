import { SelectOption } from 'src/components/SelectBox';
import { useValue } from 'src/hooks/ValueState';

export const useSelectOption = (initialText: string, initialValue: string) => {
  const _text = useValue(initialText);
  const _value = useValue(initialValue);

  const setOption = (value: SelectOption) => {
    _text.set(value.text);
    _value.set(value.value);
  };

  return {
    text: _text.value,
    value: _value.value,
    setOption,
  };
};
