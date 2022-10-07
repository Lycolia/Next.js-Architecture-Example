import { SelectOption } from './SelectBox';

const emptyOption: SelectOption = {
  text: '',
  value: '',
};

const insertFirstOption = (
  selectOptionItems: Array<SelectOption>,
  optionItem: SelectOption
) => {
  return [
    {
      text: optionItem.text,
      value: optionItem.value,
    },
    ...selectOptionItems,
  ];
};

export const SelectBoxUtil = {
  emptyOption,
  insertFirstOption,
};
