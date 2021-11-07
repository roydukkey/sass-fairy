// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //


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


export type ParameterType = number | boolean | 'Number' | 'Boolean' | 'String' | 'Color' | 'List' | 'Map' | 'ArgList' | '!ArgList' | 'Function' | 'Null' | '*' | string; // | 'ArgList<${string}>' | `'${string}'`; @ TypeScript 4.5


export type DefaultValue = number | boolean | 'null' | '%derived%' | string; // | `'${string}'`; @ TypeScript 4.5
