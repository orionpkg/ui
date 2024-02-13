import { cva } from 'cva';

export const buttonStyles = cva({
	base: [
		'flex flex-row',
		'gap-x-4',
		'font-medium',
		'disabled:cursor-not-allowed',
		'items-center',
		'justify-center',
		'text-white',
		'outline-none',
	],
	variants: {
		color: {
			primary: [
				'bg-sky-500',
				'data-[hovered=true]:bg-sky-600',
				'data-[pressed]:bg-sky-700',
				'data-[focus-visible]:ring-2 ring-sky-500 ring-offset-2 ring-offset-sky-200',
				'disabled:bg-sky-200',
			],
			secondary: [
				'bg-gray-500',
				'data-[hovered]:bg-gray-600',
				'data-[pressed]:bg-gray-700',
				'disabled:bg-gray-200',
			],
		},
		size: {
			xs: ['text-xs', 'py-0.5 px-1', 'rounded-sm', 'font-normal'],
			sm: ['text-sm', 'py-1 px-2', 'rounded-sm'],
			md: ['text-base', 'py-1.5 px-4', 'rounded-md'],
			lg: ['text-lg', 'py-2 px-5', 'rounded-md'],
			xl: ['text-xl', 'py-2.5 px-6', 'rounded-md'],
			'2xl': ['text-2xl', 'py-3 px-7', 'rounded-lg'],
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			'2xl': 'rounded-2xl',
			full: 'rounded-full',
		},
		disabled: {
			true: 'cursor-not-allowed',
		},
	},
	defaultVariants: {
		color: 'primary',
		size: 'md',
	},
});
