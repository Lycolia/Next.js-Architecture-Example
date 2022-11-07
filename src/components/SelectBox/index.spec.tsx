import { fireEvent, render } from '@testing-library/react';
import { SelectBox } from 'src/components/SelectBox';

type TestSelectBoxProps = React.ComponentProps<typeof SelectBox>;

const spiedOnChange = jest.fn();

const testItem: TestSelectBoxProps = {
  selectedValue: '2',
  optionItems: [
    { text: 'first', value: '1' },
    { text: 'second', value: '2' },
    { text: 'third', value: '3' },
  ],
  onChange: spiedOnChange,
};

const setup = (testProps: TestSelectBoxProps) => {
  const { container } = render(<SelectBox {...testProps} />);
  const el = container.querySelector('select');
  if (el === null) throw Error('DOM 取得失敗');
  return el;
};

describe('render', () => {
  it('初期化時DOMに属性が正しく設定されていること', () => {
    const el = setup(testItem);
    expect(el).toHaveTextContent('second');
    expect(el).toHaveValue(testItem.selectedValue);
  });

  const invalidOptTestItems = [
    {
      name: 'OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: undefined',
      props: {
        ...testItem,
        optionItems: undefined,
      } as unknown as TestSelectBoxProps,
    },
    {
      name: 'OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: null',
      props: {
        ...testItem,
        optionItems: null,
      } as unknown as TestSelectBoxProps,
    },
    {
      name: 'OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: string',
      props: {
        ...testItem,
        optionItems: 'test',
      } as unknown as TestSelectBoxProps,
    },
    {
      name: 'OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: number',
      props: {
        ...testItem,
        optionItems: 123,
      } as unknown as TestSelectBoxProps,
    },
    {
      name: 'OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: []',
      props: {
        ...testItem,
        optionItems: [],
      } as unknown as TestSelectBoxProps,
    },
    {
      name:
        // eslint-disable-next-line quotes
        "OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: [ { text: 'test' } ]",
      props: {
        ...testItem,
        optionItems: [{ text: 'test' }],
      } as unknown as TestSelectBoxProps,
    },
    {
      name:
        // eslint-disable-next-line quotes
        "OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: [ { value: 'test' } ]",
      props: {
        ...testItem,
        optionItems: [{ text: 'value' }],
      } as unknown as TestSelectBoxProps,
    },
    {
      name: 'OptionItemsが無効な値の時に空のオプションが一つだけ生成されること: {}',
      props: {
        ...testItem,
        optionItems: {},
      } as unknown as TestSelectBoxProps,
    },
  ];

  invalidOptTestItems.forEach((item) => {
    // eslint-disable-next-line jest/valid-title
    it(item.name, () => {
      const el = setup(item.props);

      expect(el.options.length).toBe(1);
      expect(el).toHaveTextContent('');
      expect(el).toHaveValue('');
    });
  });
});

describe('onChange', () => {
  it('イベントがコールされていること、引数が渡されていること', () => {
    const el = setup(testItem);

    fireEvent.change(el, { target: { text: 'first', value: '1' } });
    expect(spiedOnChange).toBeCalled();
  });

  it('selectedValueがコンポーネントで書き換えられていないこと', () => {
    const el = setup(testItem);

    fireEvent.change(el, { target: { text: 'first', value: '1' } });
    expect(el).toHaveValue(testItem.selectedValue);
  });
});
