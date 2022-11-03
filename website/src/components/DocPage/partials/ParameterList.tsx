// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { ModuleSpec } from '../../../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ fieldName, spec: { functions }, overloadIndex }: Attributes): JSX.Element {
	const parameters = overloadIndex !== undefined && overloadIndex > -1
		? functions?.[fieldName].overloads?.[overloadIndex].parameters
		: functions?.[fieldName].parameters;

  return (
		<dl className="grid">
			{parameters && Object.entries(parameters).map(([name, { description, type, defaultValue }], key) =>
				<Fragment key={key}>
					<dt><code>${name}</code></dt>
					<dd>{description}</dd>
					<dd>
						<dl className="grid">
							<dt>Type</dt>
							<dd><code>{type.join(' | ')}</code></dd>
							{defaultValue !== undefined &&
							<Fragment>
								<dt>Default</dt>
								<dd>
									<code>{defaultValue.toString()}</code>
								</dd>
							</Fragment>
							}
						</dl>
					</dd>
				</Fragment>
			)}
		</dl>
	);
}


interface Attributes {
	fieldName: string;
	spec: ModuleSpec;
	overloadIndex?: number;
}
