// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.
/* eslint-disable tsdoc/syntax */


/**
 * @type {import('@docusaurus/types').Plugin}
 */
const plugin = {

	name: 'lifecycle',

	injectHtmlTags: () => ({

		headTags: [
			{
				tagName: 'link',
				attributes: {
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/img/apple-touch-icon.png'
				}
			},
			{
				tagName: 'link',
				attributes: {
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/img/favicon-32x32.png'
				}
			},
			{
				tagName: 'link',
				attributes: {
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/img/favicon-16x16.png'
				}
			},
			{
				tagName: 'link',
				attributes: {
					rel: 'manifest',
					href: '/site.webmanifest'
				}
			},
			{
				tagName: 'link',
				attributes: {
					rel: 'mask-icon',
					href: '/img/safari-pinned-tab.svg',
					color: '#313242'
				}
			},
			{
				tagName: 'meta',
				attributes: {
					name: 'msapplication-TileColor',
					content: '#313242'
				}
			},
			{
				tagName: 'meta',
				attributes: {
					name: 'msapplication-config',
					content: '/browserconfig.xml'
				}
			},
			{
				tagName: 'meta',
				attributes: {
					name: 'theme-color',
					content: '#ffffff'
				}
			}
		]

	})

};


module.exports = () => plugin;
