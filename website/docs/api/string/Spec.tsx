import packageJson from '@sass-fairy/string/package.json';
import type { ModuleSpec, SpecFunction } from '@site/src/spec/ModuleSpec';
import { bracketedParameter, separatorParameter } from '@site/docs/api/list/Spec';


const startAtParameter: SpecFunction['parameters'] = {
	'start-at': {
		description: 'The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.',
		type: ['Number'],
		defaultValue: 1
	}
};


const endAtParameter: SpecFunction['parameters'] = {
	'end-at': {
		description: 'The index at which to end the search. A negative index can be used, indicating an offset from the end of the source string.',
		type: ['Number'],
		defaultValue: -1
	}
};


const spec: ModuleSpec = {

	module: 'string',
	description: packageJson.description,
	basePath: '/api/string',
	hiddenNativeFields: ['index'],

	functions: {

		'ends-with': {
			group: 'main',
			description: 'Determines whether a string ends with the characters of a specified substring, returning true or false as appropriate.',
			parameters: {
				string: {
					description: 'The source string in which the substring is to be searched for.',
					type: ['String']
				},
				substring: {
					description: 'The characters to be searched for at the end of the source string.',
					type: ['String']
				},
				...endAtParameter
			},
			return: {
				type: ['Boolean']
			}
		},

		from: {
			group: 'main',
			description: 'Creates a normalized string from the provided value.',
			parameters: {
				value: {
					description: 'The value from which to generate a string.',
					type: ['*']
				}
			},
			return: {
				type: ['String']
			}
		},

		includes: {
			group: 'main',
			description: 'Determines whether a string includes the characters of a specified substring, returning true or false as appropriate.',
			parameters: {
				string: {
					description: 'The source string in which the substring is to be located.',
					type: ['String']
				},
				substring: {
					description: 'The substring to locate in the source string.',
					type: ['String']
				},
				...startAtParameter
			},
			return: {
				type: ['Boolean']
			}
		},

		index: {
			group: 'main',
			description: 'Returns the first index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present.',
			parameters: {
				string: {
					description: 'The source string in which the substring is to be located.',
					type: ['String']
				},
				substring: {
					description: 'The substring to locate in the source string.',
					type: ['String']
				},
				...startAtParameter
			},
			return: {
				type: ['Number']
			}
		},

		'last-index': {
			group: 'main',
			description: 'Returns the last index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present. The string is searched forwards, ending at a given index when specified.',
			parameters: {
				string: {
					description: 'The source string in which the substring is to be located.',
					type: ['String']
				},
				substring: {
					description: 'The substring to locate in the source string.',
					type: ['String']
				},
				'end-at': {
					...endAtParameter['end-at'],
					defaultValue: 1
				}
			},
			return: {
				type: ['Number']
			}
		},

		split: {
			group: 'main',
			description: 'Divides a string into a list of substrings.',
			parameters: {
				string: {
					description: 'The source string to divide into a list of substrings.',
					type: ['String']
				},
				delimiter: {
					description: 'The delimiting string which separates each substring to be included in the list.',
					type: ['String', 'Null'],
					defaultValue: 'null'
				},
				limit: {
					description: 'A non-negative integer specifying a limit on the number of substrings to be including in the list.',
					type: ['Number', 'Null'],
					defaultValue: 'null'
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the returned list.'
				},
				bracketed: {
					...bracketedParameter,
					description: 'Whether the returned list has square brackets or no brackets.'
				}
			},
			return: {
				type: ['List']
			}
		},

		'starts-with': {
			group: 'main',
			description: 'Determines whether a string begins with the characters of a specified substring, returning true or false as appropriate.',
			parameters: {
				string: {
					description: 'The source string in which the substring is to be searched for.',
					type: ['String']
				},
				substring: {
					description: 'The characters to be searched for at the start of the source string.',
					type: ['String']
				},
				...startAtParameter
			},
			return: {
				type: ['Boolean']
			}
		}

	}

};


export default spec;
