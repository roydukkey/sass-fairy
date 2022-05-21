// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import type { ModuleSpec, SpecVariable } from '../../../spec/ModuleSpec';


export default function ({ fieldName, field: { defaultValue, configurable }, spec: { module } }: Attributes): JSX.Element {
	const code = [
		`@use '@sass-fairy/${module}';`,
		'',
		`// ${configurable ? '1. ' : ''}The variable’s default value...`,
		`@debug ${module}.$${fieldName};`,
		`  // ${defaultValue}`
	];

	if (configurable) {
		code.push(
			'',
			'// 2. This variable is also configurable',
			`@use '@sass-fairy/${module}' with (`,
			`  $${fieldName}: ${configurable}`,
			');'
		);
	}

  return <CodeBlock className="language-scss">{code.join('\n')}</CodeBlock>;
}


interface Attributes {
	fieldName: string;
	field: SpecVariable;
	spec: ModuleSpec;
}
