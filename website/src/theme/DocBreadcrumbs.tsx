// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type FrontMatter from './FrontMatter';
import { HtmlClassNameProvider } from '@docusaurus/theme-common';
import OriginalDocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import React from 'react';
import clsx from 'clsx';
import useFrontMatter from '@theme/useFrontMatter';


export default function (): JSX.Element | null {
	const { module } = useFrontMatter<FrontMatter>();

	return (
		<HtmlClassNameProvider className={clsx(!module && 'hide/breadcrumb')}>
			<OriginalDocBreadcrumbs />
		</HtmlClassNameProvider>
	);
}
