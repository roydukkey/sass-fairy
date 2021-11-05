// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import { useEffect } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';


export default function ({ classNames }: Attributes): null {
	const isBrowser = useIsBrowser();

	useEffect(() => {
		if (isBrowser) {
			const classes = typeof classNames === 'string' ? [classNames] : classNames;

			document.body.classList.add(...classes);

			return (): void => document.body.classList.remove(...classes);
		}
	}, [isBrowser, classNames]);

	return null;
}


interface Attributes {
	classNames: string | string[];
}
