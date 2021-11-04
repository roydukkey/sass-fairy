import packageJson from '@sass-fairy/break/package.json';
import type { ModuleSpec, SpecSignature, SpecSignatureOverload } from '@site/src/spec/ModuleSpec';


const breakpointParameter: SpecSignature['parameters'] = {
	breakpoint: {
		description: 'The name of the breakpoint at which the generated rule should break.',
		type: ['String']
	}
};


const firstBreakpointParameter: SpecSignature['parameters'] = {
	'first-breakpoint': {
		description: 'The name of the smaller breakpoint at which the generated rule should break.',
		type: ['String']
	}
};


const secondBreakpointParameter: SpecSignature['parameters'] = {
	'second-breakpoint': {
		description: 'The name of the larger breakpoint at which the generated rule should break.',
		type: ['String']
	}
};


const sizeParameter: SpecSignatureOverload['parameters'] = {
	size: {
		description: 'The size at which the generated rule should break.',
		type: ['Number']
	}
};


const firstSizeParameter: SpecSignatureOverload['parameters'] = {
	'first-size': {
		description: 'The smaller size at which the generated rule should break.',
		type: ['Number']
	}
};

const secondSizeParameter: SpecSignatureOverload['parameters'] = {
	'second-size': {
		description: 'The larger size at which the generated rule should break.',
		type: ['Number']
	}
};


const spec: ModuleSpec = {

	module: 'break',
	description: packageJson.description,
	basePath: '/api/break',

	variables: {

		'horizontal-sizes': {
			group: 'break/horizontal',
			fileName: 'sizes',
			description: 'A configurable map defining the dimensions at which layout will change, adapting to different screen widths, according to media queries.',
			defaultValue: '(x-small: 0, small: 576px, medium: 768px, large: 992px, x-large: 1200px, xx-large: 1400px)',
			configurable: '(x-small: 0, medium: 680px, large: 960px, x-large: 1400px)'
		},

		'horizontal-names': {
			group: 'break/horizontal',
			fileName: 'names',
			description: 'A list of sorted horizontal breakpoint names.',
			defaultValue: '(x-small, small, medium, large, x-large, xx-large)'
		},

		'horizontal-values': {
			group: 'break/horizontal',
			fileName: 'values',
			description: 'A list of sorted horizontal breakpoint values.',
			defaultValue: '(0, 576px, 768px, 992px, 1200px, 1400px)'
		},

		'vertical-sizes': {
			group: 'break/vertical',
			fileName: 'sizes',
			description: 'A configurable map defining the dimensions at which layout will change, adapting to different screen heights, according to media queries.',
			defaultValue: '(x-small: 0)',
			configurable: '(x-small: 0, medium: 680px, large: 960px, x-large: 1200px)'
		},

		'vertical-names': {
			group: 'break/vertical',
			fileName: 'names',
			description: 'A list of sorted vertical breakpoint names.',
			defaultValue: '(x-small)'
		},

		'vertical-values': {
			group: 'break/vertical',
			fileName: 'values',
			description: 'A list of sorted vertical breakpoint values.',
			defaultValue: '(0)'
		}

	},

	functions: {

		in: {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoint and narrower.',
			parameters: breakpointParameter,
			overloads: [
				{
					description: 'Generates a media query rule for the given size and narrower.',
					parameters: sizeParameter
				}
			],
			return: {
				type: ['String']
			}
		},

		'in-between': {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoints which is equal and wider than the smaller, and equal and narrower than the larger.',
			parameters: {
				...firstBreakpointParameter,
				...secondBreakpointParameter
			},
			return: {
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given sizes which is equal and wider than the smaller, and equal and narrower than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondSizeParameter
					}
				},
				{
					description: 'Generates a media query rule for the given horizontal breakpoint and size which is equal and wider than the smaller, and equal and narrower than the larger.',
					parameters: {
						...firstBreakpointParameter,
						...secondSizeParameter
					}
				},
				{
					description: 'Generates a media query rule for the given size and horizontal breakpoint which is equal and wider than the smaller, and equal and narrower than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondBreakpointParameter
					}
				}
			]
		},

		'in-only': {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoint.',
			parameters: breakpointParameter,
			return: {
				type: ['String']
			}
		},

		out: {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoint and wider.',
			parameters: breakpointParameter,
			return: {
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and wider.',
					parameters: sizeParameter
				}
			]
		},

		down: {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoint and shorter.',
			parameters: breakpointParameter,
			return: {
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and shorter.',
					parameters: sizeParameter
				}
			]
		},

		'down-between': {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoints which is equal and taller than the smaller, and equal and shorter than the larger.',
			parameters: {
				...firstBreakpointParameter,
				...secondBreakpointParameter
			},
			return: {
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given sizes which is equal and taller than the smaller, and equal and shorter than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondSizeParameter
					}
				},
				{
					description: 'Generates a media query rule for the given vertical breakpoint and size which is equal and taller than the smaller, and equal and shorter than the larger.',
					parameters: {
						...firstBreakpointParameter,
						...secondSizeParameter
					}
				},
				{
					description: 'Generates a media query rule for the given size and vertical breakpoint which is equal and taller than the smaller, and equal and shorter than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondBreakpointParameter
					}
				}
			]
		},

		'down-only': {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoint.',
			parameters: breakpointParameter,
			return: {
				type: ['String']
			}
		},

		up: {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoint and taller.',
			parameters: breakpointParameter,
			return: {
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and taller.',
					parameters: sizeParameter
				}
			]
		}

	}

};


export default spec;
