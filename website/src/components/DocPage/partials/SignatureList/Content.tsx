// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import Heading from '@theme/Heading';
import Output from '../Output';
import ParameterList from '../ParameterList';
import ReturnValue from '../ReturnValue';
import type { ModuleSpec, SpecSignature } from '../../../../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ fieldName, field, spec, overloadIndex }: Attributes): JSX.Element {
	const parameters = overloadIndex > -1
		? field.overloads?.[overloadIndex].parameters
		: field.parameters;

	return (
		<Fragment>
			{parameters &&
				<Fragment>
					<Heading as='h3'>Parameters</Heading>
					<ParameterList {...{ fieldName, spec, overloadIndex }} />
				</Fragment>
			}

			{field.return &&
				<Fragment>
					<Heading as='h3'>Return Value</Heading>
					<ReturnValue {...{ fieldName, spec, overloadIndex }} />
				</Fragment>
			}

			{field.output &&
				<Fragment>
					<Heading as='h3'>Output</Heading>
					<Output {...{ fieldName, spec, overloadIndex }} />
				</Fragment>
			}
		</Fragment>
	);
}


interface Attributes {
	fieldName: string;
	field: SpecSignature;
	spec: ModuleSpec;
	overloadIndex: number;
}
