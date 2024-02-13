import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: 'boolean',
			defaultValue: false,
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Click me',
		onPress: () => {
			window.console.log('Button clicked!');
		},
	},
};

export const Disabled: Story = {
	args: {
		children: 'Button',
		disabled: true,
		onPress: () => {
			window.console.log('Button clicked!');
		},
	},
};
export const IsDisabled: Story = {
	args: {
		children: 'Button',
		isDisabled: true,
		onPress: () => {
			window.console.log('Button clicked!');
		},
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
		color: 'secondary',
		onPress: () => {
			window.console.log('Button pressed!');
		},
	},
};

export const XSmall: Story = {
	args: {
		size: 'xs',
		children: 'Button',
		onPress: () => {
			window.console.log('Button clicked!');
		},
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
		children: 'Button',
		onPress: () => {
			window.console.log('Button clicked!');
		},
	},
};

export const Large: Story = {
	args: {
		children: 'Button',
		size: 'lg',
	},
};

export const XLarge: Story = {
	args: {
		children: 'Button',
		size: 'xl',
	},
};

export const XXLarge: Story = {
	args: {
		children: 'Button',
		size: '2xl',
	},
};

export const Rounded: Story = {
	args: {
		children: 'Button',
		rounded: 'full',
	},
};
