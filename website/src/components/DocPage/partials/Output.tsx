// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { ModuleSpec } from '../../../spec/ModuleSpec';
import React from 'react';


export default function ({ fieldName, spec, overloadIndex }: Attributes): JSX.Element | null {
	let output = spec.functions?.[fieldName].output;

	if (overloadIndex !== undefined && overloadIndex > -1) {
		const overload = spec.functions?.[fieldName].overloads?.[overloadIndex].output;

		if (overload) {
			output = overload;
		}
	}

  return typeof output === 'string'
		? <p>{output}</p>
		: output
			?? null;
}


interface Attributes {
	fieldName: string;
	spec: ModuleSpec;
	overloadIndex?: number;
}
