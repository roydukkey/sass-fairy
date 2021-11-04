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
	group: 'main' | 'break/horizontal' | 'break/vertical';
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
	group: 'main' | 'list/reference' | 'map/reference' | 'break/horizontal' | 'break/vertical' | 'math/bounding' | 'math/exponential' | 'math/unit';
	overloads?: SpecSignatureOverload[];
	return?: {
		description?: string | JSX.Element;
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

export type ParameterType = number | boolean | 'Number' | 'Boolean' | 'String' | 'Color' | 'List' | 'Map' | 'ArgList' | '!ArgList' | 'Function' | 'Null' | '*' | string; // | 'ArgList<${string}>' | `'${string}'`; @ TypeScript 4.5

export type DefaultValue = number | boolean | 'null' | '%derived%' | string; // | `'${string}'`; @ TypeScript 4.5
