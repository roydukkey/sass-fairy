// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.
/* eslint-disable tsdoc/syntax, @typescript-eslint/naming-convention */

const { buildNames } = require('./utils/build');


/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'@roydukkey/eslint-config'
	],
	env: {
		node: true
	},
	ignorePatterns: [
		'dist',
		'website',
		'utils/**/*.js'
	],
	overrides: [
		{
			files: [
				'*.js?(x)'
			],
			rules: {
				'@typescript-eslint/no-require-imports': 'off'
			}
		},
		{
			files: [
				'*.{j,t}s?(x)'
			],
			rules: {
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: [
							'camelCase'
						],
						filter: {
							regex: `^fairy-internal_(core|${buildNames.join('|')})_[a-z-]+\\(`,
							match: false
						}
					},
					{
						selector: 'default',
						modifiers: [
							'unused'
						],
						format: [
							'camelCase'
						],
						leadingUnderscore: 'require'
					},
					{
						selector: [
							'typeLike',
							'enumMember'
						],
						format: [
							'PascalCase'
						]
					},
					{
						selector: 'property',
						modifiers: [
							'private'
						],
						format: [
							'camelCase'
						],
						leadingUnderscore: 'require'
					},
					{
						selector: 'interface',
						format: [
							'PascalCase'
						],
						custom: {
							regex: '^I[A-Z]',
							match: false
						}
					}
				]
			}
		}
	]
};
