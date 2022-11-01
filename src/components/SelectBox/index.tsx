import { useMemo } from 'react';

export type SelectOption = {
  text: string;
  value: string;
};

type SelectBoxProps = {
  optionItems: Array<SelectOption>;
  selectedValue: string;
  onChange: (option: SelectOption) => void;
};

const getSelectedOption = (
  ev: React.ChangeEvent<HTMLSelectElement>
): SelectOption => {
  const target = ev.target;
  return {
    text: target.options[target.selectedIndex].text,
    value: target.options[target.selectedIndex].value,
  };
};

const invalidSelectOptions = (selectOptions: SelectOption[]) => {
  return (
    selectOptions === undefined ||
    selectOptions === null ||
    !Array.isArray(selectOptions) ||
    selectOptions.length === 0 ||
    !('text' in selectOptions[0] && 'value' in selectOptions[0])
  );
};

const generateOptionItems = (optionItems: SelectOption[]) => {
  if (invalidSelectOptions(optionItems)) return <option value={''} />;
  return (
    <>
      {optionItems.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </>
  );
};

/**
 * SelectBox
 * @param props
 */
export const SelectBox = (props: SelectBoxProps) => {
  const optionItems = useMemo(() => {
    return generateOptionItems(props.optionItems);
  }, [props.optionItems]);

  return (
    <div>
      <select
        value={props.selectedValue}
        onChange={(ev) => props.onChange(getSelectedOption(ev))}
      >
        {optionItems}
      </select>
    </div>
  );
};
