# OrionUI

A comprehensive React component library designed to offer a collection of reusable components, streamlining the development process and ensuring a cohesive user interface.

## Installation

Use your preferred package manager to install OrionUI.

With [npm](https://www.npmjs.com/).

```bash
npm install @orionpkg/ui
```

Or with [yarn](https://yarnpkg.com/).

```bash
yarn add @orionpkg/ui
```

Or with [pnpm](https://pnpm.io/).

```bash
pnpm add @orionpkg/ui
```

Or with [bun](https://bun.sh/).

```bash
bun install @orionpkg/ui
```

## Usage

To use OrionUI, which is constructed using Tailwind CSS, you must initially install Tailwind CSS.  
Check out the [official installation guide](https://tailwindcss.com/docs/installation) for step-by-step instructions.  
After that, simply add the given code snippet to your tailwind.config.js file.

```js
module.exports = {
	content: [
		// ...your configuration,
		'./node_modules/@orionpkg/ui/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

Now you can import any component from `@orionpkg/ui` and use it as you like it.

```tsx
import { Button } from '@orionpkg/ui';

const MyComponent = () => {
	return (
		<div>
			<Button>Click Me</Button>
		</div>
	);
};
```

You can easily override any style using tailwind `classNames`.

```tsx
const MyComponent = () => {
	return (
		<div>
			<Button className='bg-violet-600'>Click Me</Button>
		</div>
	);
};
```

We use React Aria to enhance accessibility and responsiveness in our React components. To dynamically style Tailwind CSS, leverage custom data attributes. You can see more about it in [React Aria documentation on Tailwind CSS](https://react-spectrum.adobe.com/react-aria/styling.html#tailwind-css).

```tsx
const MyComponent = () => {
	return (
		<div>
			<Button className='bg-violet-600 data-[hovered]:bg-violet-400'>Click Me</Button>
		</div>
	);
};
```

For a smoother development process you can install the [`tailwindcss-react-aria-components`](https://react-spectrum.adobe.com/react-aria/styling.html#plugin) plugin for Tailwind that lets you the access all states without the `data-` prefix.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
