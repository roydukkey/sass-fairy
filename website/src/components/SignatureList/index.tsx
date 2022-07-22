// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import Link from '@docusaurus/Link';
import Signature from '../Signature';
import useActiveVersionPath from '../../hooks/useActiveVersionPath';
import type { ModuleSpec, SpecSignature } from '../../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ spec: { basePath, functions }, group }: Attributes): JSX.Element {
	const versionPath = useActiveVersionPath();
	const groupDirectory = group?.split('/')[1];

	if (groupDirectory) {
		basePath += `/${groupDirectory}`;
	}

  return (
		<Fragment>

			<dl>
				{functions && Object.entries(functions)
					.filter(([, { group: filterGroup }]) => filterGroup === (group ?? 'main'))
					.map(([name, { description, parameters, overloads }], key) =>
						<Fragment key={key}>
							<dt>
								<Link to={`${versionPath}${basePath}/${name}`}><code><Signature fieldName={name} parameters={parameters} /></code></Link>
								{' '}
								{overloads&& overloads.length > 0 &&
									<small className="spec-overload-count">[+{overloads.length}&nbsp;overload{overloads.length > 1 && 's'}]</small>
								}
							</dt>
							<dd><p>{description}</p></dd>
						</Fragment>
					)
				}
			</dl>

			{group?.endsWith('/reference') &&
				<Fragment>
					More information on <Link to={`${versionPath}/docs/compare-logic`}>comparison logic</Link> and <Link to={`${versionPath}/docs/reference-functions`}>reference functions</Link>.
				</Fragment>
			}

		</Fragment>
	);
}


interface Attributes {
	spec: ModuleSpec;
	group?: SpecSignature['group'];
}
