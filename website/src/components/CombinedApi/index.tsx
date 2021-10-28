// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Admonition from './Admonition.mdx';
import CodeBlock from '@theme/CodeBlock';
import type { ModuleSpec } from '../../spec/ModuleSpec';
import React, { Fragment } from 'react';


export default function ({ spec: { module, hiddenNativeFields } }: Attributes): JSX.Element {
	return (
		<Fragment>
			<p>In order to avoid constantly declaring both the native <code>sass:{module}</code> module and this library, the combined API has been added which merges the two.</p>

			<CodeBlock className="language-scss">{
				[
				'// Rather than using both modules separately...',
				`@use '@sass-fairy/${module}';`,
				`@use 'sass:${module}';`,
				'',
				'// ...this statement will accomplish the same thing.',
				`@use '@sass-fairy/${module}/${module}';`
				].join('\n')
			}</CodeBlock>

			{hiddenNativeFields &&
				<Admonition module={module} hiddenNativeFields={hiddenNativeFields} />
			}
		</Fragment>
	);
}


interface Attributes {
	spec: ModuleSpec;
}
