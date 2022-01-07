// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { ModuleSpec } from '../../spec/ModuleSpec';
import OverloadedLayout from './OverloadedLayout.mdx';
import React from 'react';
import type { ReactNode } from 'react';
import SignatureLayout from './SignatureLayout.mdx';
import VariableLayout from './VariableLayout.mdx';
import useFrontMatterContext from '../../theme/hooks/useFrontMatterContext';


export default function ({ spec, children }: Attributes): JSX.Element {
	const { sidebar_label, sidebar_class_name } = useFrontMatterContext();

	if (typeof sidebar_label !== 'string' || typeof sidebar_class_name !== 'string') {
		throw new TypeError('<DocPage /> requires `sidebar_label` and `sidebar_class_name` frontmatter to be defined.');
	}

	const isVariable = sidebar_class_name.includes('variable');
	const forwardProps = {
		fieldName: sidebar_label,
		field: (isVariable ? spec.variables : spec.functions)?.[sidebar_label],
		spec
	};
	const hasOverloads = (spec.functions?.[sidebar_label]?.overloads?.length ?? 0) > 0;

  return isVariable
		? <VariableLayout {...forwardProps}>{children}</VariableLayout>
		: hasOverloads
			? <OverloadedLayout {...forwardProps}>{children}</OverloadedLayout>
			: <SignatureLayout {...forwardProps}>{children}</SignatureLayout>;
}


interface Attributes {
	spec: ModuleSpec;
	/** Auxiliary description */
	children?: ReactNode;
}
