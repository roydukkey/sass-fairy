// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { ModuleSpec } from '../../spec/ModuleSpec';
import OverloadedLayout from './OverloadedLayout.mdx';
import React from 'react';
import type { ReactNode } from 'react';
import SignatureLayout from './SignatureLayout.mdx';
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
			: <SignatureLayout {...forwardProps}>{children}</SignatureLayout>;
}


interface Attributes {
	fieldName: string;
	fieldType: 'variable' | 'function';
	spec: ModuleSpec;
	/** Auxiliary description */
	children?: ReactNode;
}
