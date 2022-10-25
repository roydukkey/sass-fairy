// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import packageJson from '@sass-fairy/break/package.json';
import type { ModuleSpec, SpecSignature, SpecSignatureOverload } from '@site/src/spec/ModuleSpec';
import React, { Fragment } from 'react';


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


const returnDescriptions = {
	breakpoint: 'A string representation of the media query condition that meets the requirements for the given breakpoint.',
	breakpoints: 'A string representation of the media query condition that meets the requirements for the given breakpoints.',
	size: 'A string representation of the media query condition that meets the requirements for the given size.',
	sizes: 'A string representation of the media query condition that meets the requirements for the given sizes.',
	breakpointAndSize: 'A string representation of the media query condition that meets the requirements for the given breakpoint and size.',
	sizeAndBreakpoint: 'A string representation of the media query condition that meets the requirements for the given size and breakpoint.'
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
			return: {
				description: returnDescriptions.breakpoint,
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and narrower.',
					parameters: sizeParameter,
					return: {
						description: returnDescriptions.size
					}
				}
			]
		},

		'in-between': {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoints which is equal and wider than the smaller, and equal and narrower than the larger.',
			parameters: {
				...firstBreakpointParameter,
				...secondBreakpointParameter
			},
			return: {
				description: returnDescriptions.breakpoints,
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given sizes which is equal and wider than the smaller, and equal and narrower than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondSizeParameter
					},
					return: {
						description: returnDescriptions.sizes
					}
				},
				{
					description: 'Generates a media query rule for the given horizontal breakpoint and size which is equal and wider than the smaller, and equal and narrower than the larger.',
					parameters: {
						...firstBreakpointParameter,
						...secondSizeParameter
					},
					return: {
						description: returnDescriptions.breakpointAndSize
					}
				},
				{
					description: 'Generates a media query rule for the given size and horizontal breakpoint which is equal and wider than the smaller, and equal and narrower than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondBreakpointParameter
					},
					return: {
						description: returnDescriptions.sizeAndBreakpoint
					}
				}
			]
		},

		'in-only': {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoint.',
			parameters: breakpointParameter,
			return: {
				description: returnDescriptions.breakpoint,
				type: ['String']
			}
		},

		out: {
			group: 'break/horizontal',
			description: 'Generates a media query rule for the given horizontal breakpoint and wider.',
			parameters: breakpointParameter,
			return: {
				description: returnDescriptions.breakpoint,
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and wider.',
					parameters: sizeParameter,
					return: {
						description: returnDescriptions.size
					}
				}
			]
		},

		down: {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoint and shorter.',
			parameters: breakpointParameter,
			return: {
				description: returnDescriptions.breakpoint,
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and shorter.',
					parameters: sizeParameter,
					return: {
						description: returnDescriptions.size
					}
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
				description: returnDescriptions.breakpoints,
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given sizes which is equal and taller than the smaller, and equal and shorter than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondSizeParameter
					},
					return: {
						description: returnDescriptions.sizes
					}
				},
				{
					description: 'Generates a media query rule for the given vertical breakpoint and size which is equal and taller than the smaller, and equal and shorter than the larger.',
					parameters: {
						...firstBreakpointParameter,
						...secondSizeParameter
					},
					return: {
						description: returnDescriptions.breakpointAndSize
					}
				},
				{
					description: 'Generates a media query rule for the given size and vertical breakpoint which is equal and taller than the smaller, and equal and shorter than the larger.',
					parameters: {
						...firstSizeParameter,
						...secondBreakpointParameter
					},
					return: {
						description: returnDescriptions.sizeAndBreakpoint
					}
				}
			]
		},

		'down-only': {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoint.',
			parameters: breakpointParameter,
			return: {
				description: returnDescriptions.breakpoint,
				type: ['String']
			}
		},

		up: {
			group: 'break/vertical',
			description: 'Generates a media query rule for the given vertical breakpoint and taller.',
			parameters: breakpointParameter,
			return: {
				description: returnDescriptions.breakpoint,
				type: ['String']
			},
			overloads: [
				{
					description: 'Generates a media query rule for the given size and taller.',
					parameters: sizeParameter,
					return: {
						description: returnDescriptions.size
					}
				}
			]
		},

		annotate: {
			group: 'break/helpers',
			description: 'Enables a fixed annotation displaying the active breakpoints of the viewport.',
			parameters: {
				direction: {
					description: 'The breakpoint categories to annotate.',
					type: ['\'horizontal\'', '\'vertical\'', '\'both\''],
					defaultValue: '\'both\''
				},
				position: {
					description: 'The location in the viewport where the annotation will be positioned.',
					type: ['\'top right\'', '\'top left\'', '\'bottom right\'', '\'bottom left\''],
					defaultValue: '\'bottom right\''
				},
				color: {
					description: 'The primary color of the annotation.',
					type: ['Color'],
					defaultValue: '#f3afe6'
				},
				size: {
					description: 'The font size of the annotation.',
					type: ['Number'],
					defaultValue: '12px'
				}
			},
			output: <Fragment>
				Styles a single <code>::before</code> pseudo-element to a fixed position, with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" target="_blank" rel="nofollow noreferrer noopener"><code>content</code></a> that describes the active horizontal and/or vertical breakpoints.
			</Fragment>
		}

	}

};


export default spec;
