// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Link from '@docusaurus/Link';
import MoreInfo from './MoreInfo.mdx';
import Signature from '../Signature';
import type { ModuleSpec, SpecFunction } from '../../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ spec: { basePath, functions }, group }: Attributes): JSX.Element {
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
								<Link to={`${basePath}/${name}`}><code><Signature fieldName={name} parameters={parameters} /></code></Link>
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
				<MoreInfo />
			}

		</Fragment>
	);
}


interface Attributes {
	spec: ModuleSpec;
	group?: SpecFunction['group'];
}
