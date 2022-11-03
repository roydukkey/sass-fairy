// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import packageJson from '@sass-fairy/map/package.json';
import type { ModuleSpec, SpecSignature } from '@site/src/spec/ModuleSpec';
import { centerCompareParameter, compareReferenceCommon } from '@site/docs/api/list/spec';


const compareParameters: SpecSignature['parameters'] = {
	'first-pair': {
		description: 'The first key/value pair for the comparison.',
		type: ['*']
	},
	'second-pair': {
		description: 'The second key/value pair for the comparison.',
		type: ['*']
	}
};


const spec: ModuleSpec = {

	module: 'map',
	description: packageJson.description,
	basePath: '/api/map',

	functions: {

		empty: {
			group: 'main',
			description: 'Creates an empty map.',
			return: {
				description: 'An empty map.',
				type: ['Map']
			}
		},

		from: {
			group: 'main',
			description: 'Creates a map from the provided key/value pairs.',
			parameters: {
				'key-value': {
					description: 'The key/value pairs from which a map will be created.',
					type: ['ArgList<*>']
				}
			},
			return: {
				description: 'A map with the given keys and values.',
				type: ['Map']
			}
		},

		'to-string': {
			group: 'main',
			description: 'Returns a string representing the specified map and its key/value pairs.',
			parameters: {
				map: {
					description: 'The map from which to generate a string. When is an argument list, keywords will be included.',
					type: ['Map', 'ArgList<*>']
				}
			},
			return: {
				description: 'A string representing the given map.',
				type: ['String']
			}
		},

		'compare-key': {
			group: 'map/reference',
			description: 'Compares two key/value pairs’ keys by converting them to strings, then comparing the value’s sequences of UTF-16 code units values in ascending order. All null items are shifted right.',
			parameters: compareParameters,
			...compareReferenceCommon
		},

		'compare-key-desc': {
			group: 'map/reference',
			description: 'Compares two key/value pairs’ keys by converting them to strings, then comparing the value’s sequences of UTF-16 code units values in descending order. All null items are shifted left.',
			parameters: compareParameters,
			...compareReferenceCommon
		},

		'compare-numeric-value': {
			group: 'map/reference',
			description: 'Compares two key/value pairs’ values as numbers in ascending order. All non-numeric items are shifted right.',
			parameters: {
				...compareParameters,
				...centerCompareParameter
			},
			...compareReferenceCommon
		},

		'compare-numeric-value-desc': {
			group: 'map/reference',
			description: 'Compares two key/value pairs’ values as numbers in descending order. All non-numeric items are shifted left.',
			parameters: {
				...compareParameters,
				...centerCompareParameter
			},
			...compareReferenceCommon
		},

		'compare-value': {
			group: 'map/reference',
			description: 'Compares two key/value pairs’ values by converting them to strings, then comparing the value’s sequences of UTF-16 code units values in ascending order. All null items are shifted right.',
			parameters: compareParameters,
			...compareReferenceCommon
		},

		'compare-value-desc': {
			group: 'map/reference',
			description: 'Compares two key/value pairs’ values by converting them to strings, then comparing the value’s sequences of UTF-16 code units values in descending order. All null items are shifted left.',
			parameters: compareParameters,
			...compareReferenceCommon
		}

	}

};


export default spec;
