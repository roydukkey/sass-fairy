// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import FunctionLayout from './FunctionLayout.mdx';
import type { ModuleSpec } from '../../spec/ModuleSpec';
import OverloadedLayout from './OverloadedLayout.mdx';
import React from 'react';
import type { ReactNode } from 'react';
import VariableLayout from './VariableLayout.mdx';


export default function ({ fieldName, fieldType, spec, children }: Attributes): JSX.Element {
	const forwardProps = {
		fieldName,
		field: (fieldType === 'variable' ? spec.variables : spec.functions)?.[fieldName],
		spec
	};
	const hasOverloads = (spec.functions?.[fieldName]?.overloads?.length ?? 0) > 0;

  return fieldType === 'variable'
		? <VariableLayout {...forwardProps}>{children}</VariableLayout>
		: hasOverloads
			? <OverloadedLayout {...forwardProps}>{children}</OverloadedLayout>
			: <FunctionLayout {...forwardProps}>{children}</FunctionLayout>;
}


interface Attributes {
	fieldName: string;
	fieldType: 'variable' | 'function';
	spec: ModuleSpec;
	/** Auxiliary description */
	children?: ReactNode;
}
