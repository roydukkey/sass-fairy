// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.


const packages = [
	'break',
	'color',
	'exception',
	'list',
	'map',
	'math',
	'meta',
	'string'
];


const sidebars = {

	docsSidebar: [
		'docs/development',
		'docs/intro',
		'docs/install',
		{
			type: 'category',
			label: 'Spec',
			collapsed: false,
			items: [
				'docs/reference-functions',
				'docs/compare-logic',
				'docs/list-modifiers'
			]
		},
		'docs/advanced'
	],

	apiSidebar: [
		'api/overview',
		...packages.map((name) => (
			{
				type: 'ref',
				label: `@sass-fairy/${name}`,
				id: `api/${name}/overview`
			}
		))
	],

	...Object.fromEntries(packages.map((name) => [
		`${name}Sidebar`,
		[
			{
				type: 'ref',
				id: 'api/overview'
			},
			{
				type: 'category',
				label: `@sass-fairy/${name}`,
				items: [
					{
						type: 'autogenerated',
						dirName: `api/${name}`
					}
				]
			}
		]
	]))

};


module.exports = sidebars;
