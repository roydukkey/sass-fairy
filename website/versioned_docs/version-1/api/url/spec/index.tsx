// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { ModuleSpec } from '@site/src/spec/ModuleSpec';
import packageJson from '@sass-fairy/url/package.json';
import React, { Fragment } from 'react';


const spec: ModuleSpec = {

	module: 'url',
	description: packageJson.description,
	basePath: '/api/url',

	functions: {

		data: {
			group: 'main',
			description: <Fragment>
				Creates a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" target="_blank" rel="nofollow noreferrer noopener">data URL</a> for the provided data of the specified type.
			</Fragment>,
			parameters: {
				data: {
					description: 'The data which is to be delivered by the URL.',
					type: ['String']
				},
				'media-type': {
					description: <Fragment>
						The media type indicates the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank" rel="nofollow noreferrer noopener">MIME type</a> to be delivered by the URL.
					</Fragment>,
					type: ['String'],
					defaultValue: '\'text/plain\''
				},
				encode: {
					description: <Fragment>
						Whether or not the given data should be <a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding" target="_blank" rel="nofollow noreferrer noopener">percent-encoded</a>.
					</Fragment>,
					defaultValue: true,
					type: ['Boolean']
				}
			},
			return: {
				description: <Fragment>
					A new string representing a data URL.
				</Fragment>,
				type: ['String']
			}
		},

		encode: {
			group: 'main',
			description: <Fragment>
				<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding" target="_blank" rel="nofollow noreferrer noopener">Percent-encodes</a> a URL component, replacing each instance of certain characters by escape sequences representing the UTF-8 encoding of the characters.
			</Fragment>,
			parameters: {
				string: {
					description: 'The URL component to be encoded.',
					type: ['String']
				}
			},
			return: {
				description: <Fragment>
					A new string representing the provided string encoded for use by the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/url" target="_blank" rel="nofollow noreferrer noopener"><code>url()</code></a> function.
				</Fragment>,
				type: ['String']
			}
		},

		svg: {
			group: 'main',
			description: <Fragment>
				Creates a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" target="_blank" rel="nofollow noreferrer noopener">data URL</a> for the provided SVG, escaping the required characters.
			</Fragment>,
			parameters: {
				data: {
					description: 'The data containing the SVG which is to be delivered by the URL.',
					type: ['ArgList']
				}
			},
			return: {
				description: <Fragment>
					A new string representing a data URL delivering an SVG.
				</Fragment>,
				type: ['String']
			}
		}

	}

};


export default spec;
