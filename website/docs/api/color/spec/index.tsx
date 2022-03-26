// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //
/* eslint-disable @typescript-eslint/naming-convention */

import type { ModuleSpec } from '@site/src/spec/ModuleSpec';
import packageJson from '@sass-fairy/color/package.json';
import React, { Fragment } from 'react';


const spec: ModuleSpec = {

	module: 'color',
	description: packageJson.description,
	basePath: '/api/color',

	variables: {
		'contrast-ratios': {
			group: 'main',
			description: <Fragment>
				A map defining the <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast" target="_blank" rel="nofollow noreferrer noopener">WCAG standard contrast ratios</a>.
			</Fragment>,
			defaultValue: '(AA: (normal: 4.5, large: 3), AAA: (normal: 7, large: 4.5))'
		}
	},

	functions: {

		a11y: {
			group: 'main',
			description: <Fragment>
				Finds the nearest accessible color for the given color against another given color according to the specified <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast" target="_blank" rel="nofollow noreferrer noopener">WCAG standard contrast ratio</a>.
			</Fragment>,
			parameters: {
				'a11y-color': {
					description: 'The color that should change when the contrast does not meet the expected contrast ratio.',
					type: ['Color']
				},
				'other-color': {
					description: 'The color that is compare against.',
					type: ['Color']
				},
				size: {
					description: 'The size category of the WCAG standard which should be used to determine compliance.',
					type: ['\'normal\'', '\'large\''],
					defaultValue: '\'normal\''
				},
				level: {
					description: 'The color that should change when the contrast does not meet the expected contrast ratio.',
					type: ['\'AA\'', '\'AAA\''],
					defaultValue: '\'AA\''
				}
			},
			return: {
				description: 'A color that meets the given standards for size and level in contrast to the other color.',
				type: ['Color']
			}
		},

		contrast: {
			group: 'main',
			description: <Fragment>
				The <a href="http://www.w3.org/TR/WCAG20/#contrast-ratiodef" target="_blank" rel="nofollow noreferrer noopener">WCAG contrast ratio</a> between two colors, from 1 to 21 (commonly written 1:1 to 21:1).
			</Fragment>,
			parameters: {
				'first-color': {
					description: 'The first color, often the background color.',
					type: ['Color']
				},
				'second-color': {
					description: 'The second color, often the foreground color.',
					type: ['Color']
				}
			},
			return: {
				description: 'A number representing the contrast ratio between two colors.',
				type: ['Number']
			}
		},

		'is-dark': {
			group: 'main',
			description: 'Indicates whether a given color is considered dark.',
			parameters: {
				color: {
					description: 'The color which may be dark.',
					type: ['Color']
				}
			},
			return: {
				description: <Fragment>
					<code>true</code> if the given color is considered dark; otherwise, <code>false</code>.
				</Fragment>,
				type: ['Boolean']
			}
		},

		'is-light': {
			group: 'main',
			description: 'Indicates whether a given color is considered light.',
			parameters: {
				color: {
					description: 'The color which may be light.',
					type: ['Color']
				}
			},
			return: {
				description: <Fragment>
					<code>true</code> if the given color is considered light; otherwise, <code>false</code>.
				</Fragment>,
				type: ['Boolean']
			}
		},

		luminance: {
			group: 'main',
			description: <Fragment>
				Returns a number indicating the <a href="https://www.w3.org/TR/WCAG20/#relativeluminancedef" target="_blank" rel="nofollow noreferrer noopener">WCAG relative luminance</a> of the given color.
			</Fragment>,
			parameters: {
				color: {
					description: 'The color for which to calculate the relative luminance.',
					type: ['Color']
				}
			},
			return: {
				description: 'A number representing the relative luminance of the given color.',
				type: ['Number']
			}
		}

	}

};


export default spec;
