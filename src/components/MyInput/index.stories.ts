import type { ComponentStoryObj } from '@storybook/react';
import { MyInput } from './';

type Story = ComponentStoryObj<typeof MyInput>;

export default { component: MyInput };
export const Default: Story = {};
