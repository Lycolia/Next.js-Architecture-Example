import { fireEvent, render } from '@testing-library/react';
import { MyInput } from 'src/components/MyInput';

type TestMyInputProps = React.ComponentProps<typeof MyInput>;

const spiedOnChange = jest.fn();

const testItem: TestMyInputProps = {
  value: 'foo',
  onChange: spiedOnChange,
};

const setup = (testProps: TestMyInputProps) => {
  const { container } = render(<MyInput {...testProps} />);
  const el = container.querySelector('input');
  if (el === null) throw Error('DOM 取得失敗');
  return el;
};

describe('render', () => {
  it('初期化時DOMに属性が正しく設定されていること', () => {
    const el = setup(testItem);
    expect(el).toHaveValue(testItem.value);
  });
});

describe('onChange', () => {
  it('イベントがコールされていること、引数が渡されていること', () => {
    const el = setup(testItem);

    fireEvent.change(el, { target: { value: 'bar' } });
    expect(spiedOnChange).toBeCalledWith('bar');
  });
});
