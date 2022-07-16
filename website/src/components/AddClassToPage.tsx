// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

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
