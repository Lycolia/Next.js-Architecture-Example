import type { ComponentStoryObj } from '@storybook/react';
import { SelectBox } from '.';

type Story = ComponentStoryObj<typeof SelectBox>;

export default { component: SelectBox };

const optionItems = [
  { text: 'first', value: '1' },
  { text: 'second', value: '2' },
  { text: 'third', value: '3' },
];

export const Default: Story = {
  args: {
    optionItems: optionItems,
    selectedValue: '2',
  },
};
