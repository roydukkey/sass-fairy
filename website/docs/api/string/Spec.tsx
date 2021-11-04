import packageJson from '@sass-fairy/string/package.json';
import type { ModuleSpec, SpecSignature } from '@site/src/spec/ModuleSpec';
import React, { Fragment } from 'react';
import { bracketedParameter, separatorParameter } from '@site/docs/api/list/Spec';


const startAtParameter: SpecSignature['parameters'] = {
	'start-at': {
		description: 'The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.',
		type: ['Number'],
		defaultValue: 1
	}
};


const endAtParameter: SpecSignature['parameters'] = {
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

		replace: {
			group: 'main',
			description: 'Replaces all instances of a specified substring from the source string with a given replacement.',
			parameters: {
				string: {
					description: 'The source string in which the substring is to be replaced.',
					type: ['String']
				},
				substring: {
					description: 'The substring to replace in the source string.',
					type: ['String']
				},
				replacement: {
					description: <Fragment>
						<p>The replacement for each instance of the substring.</p>
						<p>A number of special replacement patterns are supported.</p>
						<dl className="grid">
							<dt><code>$&amp;</code></dt>
							<dd>Inserts the substring.</dd>
							<dt><code>$`</code></dt>
							<dd>Inserts the portion of the source string that precedes the replaced substring.</dd>
							<dt><code>$'</code></dt>
							<dd>Inserts the portion of the source string that follows the replaced substring.</dd>
						</dl>
					</Fragment>,
					type: ['String']
				}
			},
			return: {
				description: 'A string with all instances of a substring replaced by a replacement.',
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
		},

		trim: {
			group: 'main',
			description: 'Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).',
			parameters: {
				string: {
					description: 'The source string from which to remove leading and trailing whitespace.',
					type: ['String']
				}
			},
			return: {
				description: 'A string stripped of whitespace from both its beginning and end. If neither the beginning or end of source string has any whitespace, the string is simply returned, with no exception being thrown.',
				type: ['String']
			}
		},

		'trim-end': {
			group: 'main',
			description: 'Removes whitespace from the end of a string.',
			parameters: {
				string: {
					description: 'The source string from which to remove trailing whitespace.',
					type: ['String']
				}
			},
			return: {
				description: 'A string stripped of whitespace from its end. If the end of source string has no whitespace, the string is simply returned, with no exception being thrown.',
				type: ['String']
			}
		},

		'trim-start': {
			group: 'main',
			description: 'Removes whitespace from the beginning of a string.',
			parameters: {
				string: {
					description: 'The source string from which to remove leading whitespace.',
					type: ['String']
				}
			},
			return: {
				description: 'A string stripped of whitespace from its beginning. If the beginning of source string has no whitespace, the string is simply returned, with no exception being thrown.',
				type: ['String']
			}
		}

	}

};


export default spec;
