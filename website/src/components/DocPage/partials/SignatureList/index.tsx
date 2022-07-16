// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import Content from './Content';
import Details from '@theme/Details';
import Signature from '../../../Signature';
import type { ModuleSpec, SpecSignature } from '../../../../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ fieldName, field, spec }: Attributes): JSX.Element {
	const signatures = [field, ...field.overloads ?? []];

	return (
		<dl>
			{signatures.map(({ description, parameters }, key) =>
				<Fragment key={key}>
					<dt><code><Signature fieldName={fieldName} parameters={parameters} /></code></dt>
					<dd><p>{description}</p></dd>
					<dd>
						<Details open={key === 0} summary={<summary>Details</summary>}>
							<Content fieldName={fieldName} field={field} overloadIndex={key - 1} spec={spec} />
						</Details>
					</dd>
				</Fragment>
			)}
		</dl>
	);
}


interface Attributes {
	fieldName: string;
	field: SpecSignature;
	spec: ModuleSpec;
}
