import type { ComponentStoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { YmdSelectBox } from '.';

type Story = ComponentStoryObj<typeof YmdSelectBox>;

export default { component: YmdSelectBox };

export const Default: Story = {
  args: {
    selected: {
      year: {
        value: '2020',
        onChange: action('year'),
      },
      month: {
        value: '12',
        onChange: action('month'),
      },
      day: {
        value: '1',
        onChange: action('day'),
      },
    },
  },
};

export const SetMaxYear: Story = {
  storyName: '終了年の指定あり',
  args: {
    maxYear: '2000',
    selected: {
      year: {
        value: '2020',
        onChange: action('year'),
      },
      month: {
        value: '12',
        onChange: action('month'),
      },
      day: {
        value: '1',
        onChange: action('day'),
      },
    },
  },
};
export const SetRangeYear: Story = {
  storyName: '開始年、終了年の指定あり',
  args: {
    minYear: '1990',
    maxYear: '2000',
    selected: {
      year: {
        value: '2020',
        onChange: action('year'),
      },
      month: {
        value: '12',
        onChange: action('month'),
      },
      day: {
        value: '1',
        onChange: action('day'),
      },
    },
  },
};
