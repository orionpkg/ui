import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges classes using clsx and tailwind-merge
 * @example
 * clsxMerge('text-red-500', 'text-2xl', 'font-bold', 'text-center')
 * // => 'text-red-500 text-2xl font-bold text-center'
 * @param classes {ClassValue[]} - Array of classes to merge
 * @returns {string}
 */
export const tc = (...classes: ClassValue[]): string => twMerge(clsx(...classes));

export function mergeRefs<T>(...refs: React.ForwardedRef<T>[]): React.RefCallback<T> {
	return (node: T) => {
		for (const ref of refs) {
			if (ref) {
				if (typeof ref === 'function') ref(node);
				if ('current' in ref) ref.current = node;
			}
		}
	};
}
