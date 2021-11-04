// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Output from '../Output';
import ParameterList from '../ParameterList';
import ReturnValue from '../ReturnValue';
import { default as generateHeading } from '@theme/Heading';
import type { ModuleSpec, SpecSignature } from '../../../../spec/ModuleSpec';
import React, { Fragment } from 'react';


const HeadingComponent = generateHeading('h3');


export default function ({ fieldName, field, spec, overloadIndex }: Attributes): JSX.Element {
	const parameters = overloadIndex > -1
		? field.overloads?.[overloadIndex].parameters
		: field.parameters;

	return (
		<Fragment>
			{parameters &&
				<Fragment>
					<HeadingComponent>Parameters</HeadingComponent>
					<ParameterList {...{ fieldName, spec, overloadIndex }} />
				</Fragment>
			}

			{field.return &&
				<Fragment>
					<HeadingComponent>Return Value</HeadingComponent>
					<ReturnValue {...{ fieldName, spec, overloadIndex }} />
				</Fragment>
			}

			{field.output &&
				<Fragment>
					<HeadingComponent>Output</HeadingComponent>
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
