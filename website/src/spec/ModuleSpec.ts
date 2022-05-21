// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.


// These groups achieve a couple things:
// 1. Organization of subheadings on the API Overview pages
// 2. Organization of doc files into a subdirectory in the module's directory
type VariableGroups = 'main' | 'break/horizontal' | 'break/vertical';
type SignatureGroups = VariableGroups | 'break/helpers' | 'list/reference' | 'map/reference' | 'math/bounding' | 'math/exponential' | 'math/unit';


/**
 * Describes the module's details which are used for generating docs content.
 */
export interface ModuleSpec {
	module: string;
	description: string;
	basePath: string;
	variables?: { [key: string]: SpecVariable };
	functions?: { [key: string]: SpecSignature };
	hiddenNativeFields?: string[];
}


export interface SpecVariable {
	group: VariableGroups;
	description: string | JSX.Element;
	defaultValue: DefaultValue;
	configurable?: string;
	fileName?: string;
}


interface SpecSignatureBase {
	description: string | JSX.Element;
	parameters?: { [key: string]: SpecParameter };
}


export interface SpecSignature extends SpecSignatureBase {
	group: SignatureGroups;
	overloads?: SpecSignatureOverload[];
	return?: {
		description: string | JSX.Element;
		type: ParameterType[];
	};
	output?: string | JSX.Element;
}


export interface SpecSignatureOverload extends SpecSignatureBase {
	return?: {
		description?: string | JSX.Element;
		type?: ParameterType[];
	};
	output?: string | JSX.Element;
}


export interface SpecParameter {
	description: string | JSX.Element;
	type: ParameterType[];
	defaultValue?: DefaultValue | DefaultValue[];
}


/* eslint-disable @typescript-eslint/no-type-alias */

type MainTypes = 'Number' | 'Boolean' | 'String' | 'Color' | 'List' | 'Map';
type ListSeparator = 'auto' | 'comma' | 'space' | 'slash';
type LibraryFunction = `${string}${string}.${string}${string}()`;
type QuotedString = `'${string}${string}'`;
type HexColor = `#${string}${string}`;

// Because we can.
type CssLength = `${number}${AbsoluteLengthUnits | RelativeLengthUnits}`;
type AbsoluteLengthUnits = 'cm' | 'mm' | 'in' | 'pc' | 'pt' | 'px';
type RelativeLengthUnits = 'em' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';


export type ParameterType = MainTypes | QuotedString | ListSeparator |
	`List{${number},${number}}` |
	`ArgList<${MainTypes}>` | `${'' | '!'}ArgList` |
	'Function' | 'Null' | '*';


export type DefaultValue = number | boolean |
	ListSeparator | CssLength | LibraryFunction |
	QuotedString | HexColor | `(${string})` |
	'null' | '%derived%';

/* eslint-enable @typescript-eslint/no-type-alias */
