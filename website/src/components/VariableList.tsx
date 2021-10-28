// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Link from '@docusaurus/Link';
import type { ModuleSpec, SpecVariable } from '../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ spec: { basePath, variables }, group }: Attributes): JSX.Element {
	const groupDirectory = group?.split('/')[1];

	if (groupDirectory) {
		basePath += `/${groupDirectory}`;
	}

  return (
		<dl>
			{variables && Object.entries(variables)
				.filter(([, { group: filterGroup }]) => filterGroup === (group ?? 'main'))
				.map(([name, { fileName, description, configurable }], key) =>
					<Fragment key={key}>
						<dt><Link to={`${basePath}/${fileName ?? name}`}><code>${name}{configurable && ' !default'}</code></Link></dt>
						<dd><p>{description}</p></dd>
					</Fragment>
				)
			}
		</dl>
	);
}


interface Attributes {
	spec: ModuleSpec;
	group?: SpecVariable['group'];
}
