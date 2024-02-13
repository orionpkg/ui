import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
	test('renders correctly', () => {
		const { container } = render(<Button>Click Me</Button>);
		expect(container.firstElementChild?.classList).toContain('bg-sky-500');
		expect(container.firstElementChild?.classList).toContain('text-white');
		expect(container.firstElementChild?.classList).toContain('rounded-md');
		expect(container.firstElementChild?.classList).toContain('px-4');
	});
});
