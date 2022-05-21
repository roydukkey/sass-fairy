// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { ModuleSpec } from '../../../spec/ModuleSpec';
import React from 'react';


export default function ({ fieldName, spec, overloadIndex }: Attributes): JSX.Element {
	let type = spec.functions?.[fieldName].return?.type;
	let description = spec.functions?.[fieldName].return?.description;

	if (overloadIndex !== undefined && overloadIndex > -1) {
		const overload = spec.functions?.[fieldName].overloads?.[overloadIndex].return;

		if (overload?.type) {
			type = overload.type;
		}

		if (overload?.description) {
			description = overload.description;
		}
	}

  return (
		<dl>
			<dt><code>{type?.join(' | ')}</code></dt>
			<dd>{description}</dd>
		</dl>
	);
}


interface Attributes {
	fieldName: string;
	spec: ModuleSpec;
	overloadIndex?: number;
}
