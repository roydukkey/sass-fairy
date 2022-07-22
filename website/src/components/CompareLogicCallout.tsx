// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import Link from '@docusaurus/Link';
import useActiveVersionPath from '../hooks/useActiveVersionPath';
import React, { Fragment } from 'react';

export default function (): JSX.Element {
	const versionPath = useActiveVersionPath();

	return (
		<Fragment>
			Read more on <Link to={`${versionPath}/docs/compare-logic`}>comparison logic</Link> for a detailed explanation on sorting methods.
		</Fragment>
	);
}
