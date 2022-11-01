import styles from './index.module.scss';
import { useMemo } from 'react';
import { SelectBox } from 'src/components/SelectBox';
import { SelectBoxUtil } from 'src/components/SelectBox/util';
import { YmdSelectBoxUtil } from 'src/components/YmdSelector/util';

type YmdSelectBoxProps = {
  maxYear: string;
  minYear: string;
  hasEmpty: boolean;
  selected: {
    year: {
      value: string;
      onChange: (value: string) => void;
    };
    month: {
      value: string;
      onChange: (value: string) => void;
    };
    day: {
      value: string;
      onChange: (value: string) => void;
    };
  };
};

const emptyOption = SelectBoxUtil.emptyOption;

const getYMOptions = (hasEmpty: boolean, minYear: string, maxYear: string) => {
  if (hasEmpty === true) {
    const yearOptions = SelectBoxUtil.insertFirstOption(
      YmdSelectBoxUtil.createYearOptions(Number(maxYear), Number(minYear)),
      emptyOption
    );
    const monthOptions = SelectBoxUtil.insertFirstOption(
      YmdSelectBoxUtil.createMonthOptions(),
      emptyOption
    );

    return { yearOptions, monthOptions };
  } else {
    const yearOptions = YmdSelectBoxUtil.createYearOptions(
      Number(minYear),
      Number(maxYear)
    );
    const monthOptions = YmdSelectBoxUtil.createMonthOptions();

    return { yearOptions, monthOptions };
  }
};

const getDayOptions = (hasEmpty: boolean, year: string, month: string) => {
  if (hasEmpty === true) {
    return SelectBoxUtil.insertFirstOption(
      YmdSelectBoxUtil.createDayOptions(Number(year), Number(month)),
      emptyOption
    );
  } else {
    return YmdSelectBoxUtil.createDayOptions(Number(year), Number(month));
  }
};

export const YmdSelectBox = (props: YmdSelectBoxProps) => {
  const { yearOptions, monthOptions } = useMemo(() => {
    return getYMOptions(props.hasEmpty, props.minYear, props.maxYear);
  }, [props.hasEmpty, props.minYear, props.maxYear]);

  const dayOptions = useMemo(() => {
    return getDayOptions(
      props.hasEmpty,
      props.selected.year.value,
      props.selected.month.value
    );
  }, [props.hasEmpty, props.selected.year.value, props.selected.month.value]);

  return (
    <div className={styles.container}>
      <SelectBox
        optionItems={yearOptions}
        selectedValue={props.selected.year.value}
        onChange={(ev) => {
          props.selected.year.onChange(ev.value);
        }}
      />
      <span className={styles.separator}>年</span>
      <SelectBox
        optionItems={monthOptions}
        selectedValue={props.selected.month.value}
        onChange={(ev) => {
          props.selected.month.onChange(ev.value);
        }}
      />
      <span className={styles.separator}>月</span>
      <SelectBox
        optionItems={dayOptions}
        selectedValue={props.selected.day.value}
        onChange={(ev) => {
          props.selected.day.onChange(ev.value);
        }}
      />
      <span className={styles.separator}>日</span>
    </div>
  );
};
