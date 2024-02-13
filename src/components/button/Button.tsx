import { type VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithRef } from 'react';
import { Button as BaseButton, type ButtonProps as BaseButtonProps } from 'react-aria-components';
import { tc } from '../../utils/class.utils';
import { buttonStyles } from './button.variants';

type ButtonElementProps = ComponentPropsWithRef<'button'>;

export type ButtonProps = ButtonElementProps & VariantProps<typeof buttonStyles> & BaseButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { color, size, rounded, className, disabled, ...rest } = props;

	return (
		<BaseButton
			isDisabled={disabled}
			className={tc(buttonStyles({ color, size, rounded }), className)}
			ref={ref}
			{...rest}
		/>
	);
});

Button.displayName = 'Button';
export { Button };
