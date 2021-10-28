// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Link from '@docusaurus/Link';
import type { ModuleSpec } from '../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ spec: { module }, link, variable, function: functionName }: Attributes): JSX.Element {
	const moduleName = <code>@sass-fairy/{module}</code>;

	return (
		<Fragment>

			<p className="module-doc-header">{
				link || link === undefined
					? <Link to={`/api/${module}`}>{moduleName}</Link>
					: moduleName
			}</p>

			{variable && `$${variable}`}
			{functionName && `${functionName} ()`}

		</Fragment>
	);
}


interface Attributes {
	spec: ModuleSpec;
	variable?: string;
	function?: string;
	link?: boolean;
}
