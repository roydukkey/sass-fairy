// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { SpecSignature } from '../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ fieldName, parameters }: Attributes): JSX.Element {
  return (
		<Fragment>
			{fieldName} ({parameters &&
				`${Object.entries(parameters).reduce((accumulator, [name, { defaultValue, type }], index) => {

					const space = index > 0 ? ' ' : '';
					const delimiter = index > 0 ? ', ' : '';
					const argListPunctuation = typeof type[0] === 'string' && type[0].startsWith('ArgList') ? '...': '';

					return accumulator += defaultValue !== undefined
						? `${space}[${delimiter}$${name}${argListPunctuation}]`
						: `${delimiter}$${name}${argListPunctuation}`;

				}, ' ')} `
			})
		</Fragment>
	);
}


interface Attributes {
	fieldName: string;
	parameters: SpecSignature['parameters'];
}
