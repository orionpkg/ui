import { useMemo } from 'react';

export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;

export const assignRef = <T>(ref: ReactRef<T> | null | undefined, value: T) => {
	if (ref == null) return;

	if (typeof ref === 'function') return ref(value);

	try {
		ref.current = value;
	} catch (error) {
		throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
	}
};

export const mergeRefs = <T>(...refs: (ReactRef<T> | null | undefined)[]) => {
	return (node: T | null) => refs.forEach(ref => assignRef(ref, node));
};

export const useMergeRefs = <T>(...refs: (ReactRef<T> | null | undefined)[]) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => mergeRefs(...refs), refs);
};
