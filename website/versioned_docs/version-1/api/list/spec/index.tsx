// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import packageJson from '@sass-fairy/v1/list/package.json';
import { passedByName } from '@site/versioned_docs/version-1/api/exception/spec';
import type { ModuleSpec, SpecParameter, SpecSignature } from '@site/src/spec/ModuleSpec';
import React, { Fragment } from 'react';


const separatorParameter: Omit<SpecParameter, 'description'> = {
	type: ['space', 'comma', 'slash', 'auto'],
	defaultValue: 'auto'
};


const bracketedParameter: Omit<SpecParameter, 'description'> = {
	type: ['Boolean', 'auto'],
	defaultValue: 'auto'
};


const predicateArgsParameter: SpecParameter = {
	description: 'Additional parameters which are provided to predicate function.',
	type: ['ArgList<*>'],
	defaultValue: '()'
};


const binaryPredicateParameters: Required<Pick<SpecSignature, 'parameters'>> = {
	parameters: {
		list: {
			description: 'The list from which items will be tested.',
			type: ['List']
		},
		predicate: {
			description: 'The function that tests each item for a condition. The first parameter is the current item being processed in the list. The second parameter is the index of the current item being processed in the list. The third parameter is the list being processed. The returned value will be compared for truthiness.',
			type: ['Function']
		},
		args: {
			...predicateArgsParameter
		}
	}
};


const reduceInitialValueParameter = ['The value to use as the first parameter for the first call to the transformer.', passedByName];


const reduceFunction: SpecSignature = {
	group: 'main',
	description: 'Reduces a list to a single value as the product of calling a specified function on every item in a list.',
	parameters: {
		list: {
			description: 'The list from which items will be reduced.',
			type: ['List']
		},
		transformer: {
			description: 'The transform function to apply to each item. The first parameter is the accumulated value previously returned in the prior transformation or the initial value. The second parameter is the current item being processed in the list. The third parameter is the index of the current item being processed in the list. The fourth parameter is the list being processed. The returned value will be the product of the prior and current transformation.',
			type: ['Function']
		},
		'initial-value': {
			description: [
				reduceInitialValueParameter[0],
				'When not specified, this value is initialized to the first value in the list, and the second parameter of the transformer is initialized to the second value in the list.',
				'When specified, the second parameter of the transformer is initialized to the first value in the list.',
				reduceInitialValueParameter[1]
			].join(' '),
			type: ['*'],
			defaultValue: '%derived%'
		}
	},
	return: {
		description: 'The value that results from running the transformer function to completion over the entire list.',
		type: ['*']
	}
};


const reduceRightFunction: SpecSignature = {
	...JSON.parse(JSON.stringify(reduceFunction)) as SpecSignature, // Deep Copy
	description: 'Reduces a list to a single value as the product of calling a specified function on every item in a list, starting with the last item to the first.'
};

if (reduceRightFunction.parameters) {
	reduceRightFunction.parameters['initial-value'].description = [
		reduceInitialValueParameter[0],
		'When not specified, this value is initialized to the last value in the list, and the second parameter of the transformer is initialized to the second-to-last value in the list.',
		'When specified, the second parameter of the transformer is initialized to the last value in the list.',
		reduceInitialValueParameter[1]
	].join(' ');
}


const startAtParameter: SpecParameter = {
	description: 'The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.',
	type: ['Number'],
	defaultValue: 1
};


const compareParameters: SpecSignature['parameters'] = {
	'first-item': {
		description: 'The first item for the comparison.',
		type: ['*']
	},
	'second-item': {
		description: 'The second item for the comparison.',
		type: ['*']
	}
};


const centerCompareParameter: SpecSignature['parameters'] = {
	center: {
		description: 'The value indicating the center (zero) position between positive and negative values.',
		type: ['Number'],
		defaultValue: 0
	}
};


const compareReferenceCommon: Pick<SpecSignature, 'overloads' | 'return'> = {
	return: {
		description: 'A positive number when the first given value is greater than the second given value, or a negative number when the second given value is greater than the first given value; otherwise, zero.',
		type: ['Number']
	},
	overloads: [
		{
			description: 'Returns a function reference to this string comparison method to be used by the sort function.',
			return: {
				description: 'A reference to this string comparison method.',
				type: ['Function']
			}
		}
	]
};


const spec: ModuleSpec = {

	module: 'list',
	description: packageJson.description,
	basePath: '/api/list',
	hiddenNativeFields: ['index', 'join', 'set-nth'],

	functions: {

		'box-model': {
			group: 'main',
			description: 'Gets the value of the specified side from the given shorthand box model value.',
			parameters: {
				values: {
					description: 'The shorthand value of a box model to analyze for a value.',
					type: ['List{1,4}']
				},
				side: {
					description: 'The side of the box model for which to determine a value.',
					type: ['\'top\'', '\'right\'', '\'bottom\'', '\'left\'']
				}
			},
			return: {
				description: 'Returns a single value that corresponds to the requested side of the given box model value.',
				type: ['*']
			}
		},

		concat: {
			group: 'main',
			description: 'Merges two or more lists into one list.',
			parameters: {
				values: {
					description: 'The lists or single values to concatenate.',
					type: ['ArgList<*>']
				},
				separator: {
					...separatorParameter,
					description: ['The type of separator to be used by the merged list.', passedByName].join(' ')
				},
				bracketed: {
					...bracketedParameter,
					description: ['Whether the merged list has square brackets or no brackets.', passedByName].join(' ')
				}
			},
			return: {
				description: 'A list with all the values of the every given list.',
				type: ['List']
			}
		},

		distinct: {
			group: 'main',
			description: 'Creates a list of all distinct items from a source list.',
			parameters: {
				list: {
					description: 'The list from which items distinct items will be selected.',
					type: ['List']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the extracted list.'
				}
			},
			return: {
				description: 'A list with no repeated values.',
				type: ['List']
			}
		},

		empty: {
			group: 'main',
			description: 'Creates an empty list with the specified characteristics or the characteristics of the specified list.',
			parameters: {
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the empty list.',
					defaultValue: 'comma'
				},
				bracketed: {
					...bracketedParameter,
					description: 'Whether the empty list has square brackets or no brackets.',
					defaultValue: false
				},
				list: {
					description: 'The list from which to determine separator and bracket style.',
					type: ['List', 'ArgList<*>'],
					defaultValue: 'null'
				}
			},
			return: {
				description: 'An empty list with the given or derived characteristics.',
				type: ['List']
			}
		},

		every: {
			group: 'main',
			description: 'Tests whether all items in a list satisfy the test implemented by the specified function.',
			...binaryPredicateParameters,
			return: {
				description: <Fragment>
					<code>true</code> if the predicate function returns a truthy value for every item in the list; otherwise, <code>false</code>.
				</Fragment>,
				type: ['Boolean']
			}
		},

		filter: {
			group: 'main',
			description: 'Creates a list of all the items from a source list that satisfy the test implemented by the specified function.',
			parameters: {
				list: binaryPredicateParameters.parameters.list,
				predicate: binaryPredicateParameters.parameters.predicate,
				args: binaryPredicateParameters.parameters.args,
				separator: {
					...separatorParameter,
					description: ['The type of separator to be used by the extracted list.', passedByName].join(' ')
				}
			},
			return: {
				description: 'A list with the items that pass the test provided by the predicate function; otherwise, an empty list.',
				type: ['List']
			}
		},

		find: {
			group: 'main',
			description: 'Returns the value of the first item from a list that satisfies the test implemented by the specified function.',
			...binaryPredicateParameters,
			return: {
				description: <Fragment>
					The value of the first item in the list that satisfies the test provided by the predicate function; otherwise, <code>null</code>.
				</Fragment>,
				type: ['List', 'Null']
			}
		},

		'find-nth': {
			group: 'main',
			description: 'Returns the index of the first item from a list that satisfies the test implemented by the specified function; otherwise, 0 is returned, indicating no item satisfies the test.',
			...binaryPredicateParameters,
			return: {
				description: <Fragment>
					The index of the first item in the list that passes the test provided by the predicate function; otherwise, <code>0</code>.
				</Fragment>,
				type: ['Number']
			}
		},

		flat: {
			group: 'main',
			description: 'Creates a list with all sub-list items from a source list concatenated into it recursively up to a specified depth.',
			parameters: {
				list: {
					description: 'The list to be flattened.',
					type: ['List']
				},
				depth: {
					description: 'The value indicating how deep a nested list structure should be flattened.',
					type: ['Number'],
					defaultValue: 1
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the flattened list.'
				},
				bracketed: {
					...bracketedParameter,
					description: 'Whether the flattened list has square brackets or no brackets.',
					defaultValue: false
				}
			},
			return: {
				description: 'A list with the sub-list items concatenated into it.',
				type: ['List']
			}
		},

		includes: {
			group: 'main',
			description: 'Determines whether a list includes a certain value among its items, returning true or false as appropriate.',
			parameters: {
				list: {
					description: 'The list to be check.',
					type: ['List']
				},
				value: {
					description: 'The value to search for in the list.',
					type: ['*']
				},
				'start-at': {
					description: 'The index in this list at which to begin searching for value. A negative index can be used, indicating an offset from the end of the list.',
					type: ['Number'],
					defaultValue: 1
				}
			},
			return: {
				description: <Fragment>
					<code>true</code> if the value is found anywhere within the given list; otherwise, <code>false</code>.
				</Fragment>,
				type: ['Boolean']
			}
		},

		index: {
			group: 'main',
			description: 'Returns the first index at which a specified item can be found in a list; otherwise, 0 is returned, indicating the item is not present.',
			parameters: {
				list: {
					description: 'The list from which the value is to be located.',
					type: ['List']
				},
				value: {
					description: 'The value to locate in the list.',
					type: ['*']
				},
				'start-at': startAtParameter
			},
			return: {
				description: <Fragment>
					The index of the first occurrence of the value; otherwise, <code>0</code>.
				</Fragment>,
				type: ['Number']
			}
		},

		'insert-nth': {
			group: 'main',
			description: 'Returns a list with the specified value inserted into the list at a given index.',
			parameters: {
				list: {
					description: 'The list to which the value is to be inserted.',
					type: ['List']
				},
				index: {
					description: 'The index at which the value is to be inserted. A negative index can be used, indicating an offset from the end of the list.',
					type: ['Number']
				},
				value: {
					description: 'The value which is to be inserted.',
					type: ['*']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the copied list.'
				}
			},
			return: {
				description: 'A list with the given value inserted at the given index.',
				type: ['List']
			}
		},

		join: {
			group: 'main',
			description: 'Concatenates all of the items in a list to a string, separated by the list’s separator or a specified glue string. If the list has only one item, then that item will be returned without using the glue.',
			parameters: {
				list: {
					description: 'The list to join.',
					type: ['List']
				},
				glue: {
					description: 'The string to separate each pair of adjacent items of the list. The value is converted to a string if necessary.',
					type: ['String'],
					defaultValue: '%derived%'
				}
			},
			return: {
				description: 'A string with all list items joined.',
				type: ['String']
			}
		},

		'last-index': {
			group: 'main',
			description: 'Returns the last index at which a specified item can be found in a list; otherwise, 0 is returned, indicating the item is not present. The list is searched backwards, starting at a given index when specified.',
			parameters: {
				list: {
					description: 'The list from which the value is to be located.',
					type: ['List']
				},
				value: {
					description: 'The value to locate in the list.',
					type: ['*']
				},
				'start-at': {
					...startAtParameter,
					defaultValue: -1
				}
			},
			return: {
				description: <Fragment>
					The index of the last occurrence of the value; otherwise, <code>0</code>.
				</Fragment>,
				type: ['Number']
			}
		},

		map: {
			group: 'main',
			description: 'Creates a list populated with the results of calling a specified function on every item in a source list.',
			parameters: {
				list: {
					description: 'The list from which items will be processed.',
					type: ['List']
				},
				transformer: {
					description: 'The transform function to apply to each item. The first parameter is the current item being processed in the list. The second parameter is the index of the current item being processed in the list. The third parameter is the list being processed. The returned value may be any type.',
					type: ['Function']
				},
				args: {
					...predicateArgsParameter,
					description: 'Additional parameters which are provided to transform function.'
				},
				separator: {
					...separatorParameter,
					description: ['The type of separator to be used by the created list.', passedByName].join(' ')
				},
				bracketed: {
					...bracketedParameter,
					description: ['Whether the created list has square brackets or no brackets.', passedByName].join(' ')
				}
			},
			return: {
				description: 'A list with each item being the result of the transformer function.',
				type: ['List']
			}
		},

		prepend: {
			group: 'main',
			description: 'Returns a list with the specified value added to the beginning.',
			parameters: {
				list: {
					description: 'The list to which the value is to be prepended.',
					type: ['List']
				},
				value: {
					description: 'The value which is to be prepended.',
					type: ['*']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the copied list.'
				}
			},
			return: {
				description: 'A list with the given value added to the beginning.',
				type: ['List']
			}
		},

		reduce: { ...reduceFunction },

		'reduce-right': { ...reduceRightFunction },

		remove: {
			group: 'main',
			description: 'Returns a list without the specified value.',
			parameters: {
				list: {
					description: 'The list from which the value is to be removed.',
					type: ['List']
				},
				value: {
					description: 'The value to be removed.',
					type: ['*']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the copied list.'
				}
			},
			return: {
				description: 'A list without the given value.',
				type: ['List']
			}
		},

		'remove-nth': {
			group: 'main',
			description: 'Returns a list without the value at a specified index.',
			parameters: {
				list: {
					description: 'The list to which the value is to be removed.',
					type: ['List']
				},
				index: {
					description: 'The index at which the value is to be removed. A negative index can be used, indicating an offset from the end of the list.',
					type: ['Number']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the copied list.'
				}
			},
			return: {
				description: 'A list without the value at the given index.',
				type: ['List']
			}
		},

		replace: {
			group: 'main',
			description: 'Returns a list with all occurrences of the given value replaced by the specified replacement.',
			parameters: {
				list: {
					description: 'The list from which the value is to be replaced.',
					type: ['List']
				},
				value: {
					description: 'The value to be replace by the replacement.',
					type: ['*']
				},
				replacement: {
					description: 'The value that replaces the specified value.',
					type: ['*']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the copied list.'
				}
			},
			return: {
				description: 'A list with all occurrences of the value replaced by a replacement.',
				type: ['List']
			}
		},

		reverse: {
			group: 'main',
			description: 'Reverses a list in place. The first item becomes the last, and the last item becomes the first.',
			parameters: {
				list: {
					description: 'The list to reverse.',
					type: ['List']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the reversed list.'
				}
			},
			return: {
				description: 'The reversed list.',
				type: ['List']
			}
		},

		'set-nth': {
			group: 'main',
			description: 'Returns a list with the value at the given index replaced with the specified value.',
			parameters: {
				list: {
					description: 'The list from which the value is to be replaced.',
					type: ['List']
				},
				index: {
					description: 'The index at which the value is to be replaced. A negative index can be used, indicating an offset from the end of the list.',
					type: ['Number']
				},
				value: {
					description: 'The value which is to be replaced.',
					type: ['*']
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the copied list.'
				}
			},
			return: {
				description: 'A list with the given value at the given index.',
				type: ['List']
			}
		},

		slice: {
			group: 'main',
			description: 'Extracts a portion of a list selecting from a starting index through a ending index.',
			parameters: {
				list: {
					description: 'The list to be sliced.',
					type: ['List']
				},
				'start-at': {
					description: 'The index at which to begin extraction. A negative index can be used, indicating an offset from the end of the list.',
					type: ['Number']
				},
				'end-at': {
					description: 'The index through which to end extraction. A negative index can be used, indicating an offset from the end of the list.',
					type: ['Number'],
					defaultValue: -1
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the extracted list.'
				}
			},
			return: {
				description: 'A list of selected value.',
				type: ['List']
			}
		},

		some: {
			group: 'main',
			description: 'Tests whether at least one item in a list satisfies the test implemented by the specified function.',
			...binaryPredicateParameters,
			return: {
				description: <Fragment>
					<code>true</code> if the predicate function returns a truthy value for at least one item in the list; otherwise, <code>false</code>.
				</Fragment>,
				type: ['Boolean']
			}
		},

		sort: {
			group: 'main',
			description: 'Sorts the items of a list in place. The default sort order is ascending, built upon converting the items into strings, then comparing their sequences of UTF-16 code units values.',
			parameters: {
				list: {
					description: 'The list to sort.',
					type: ['List']
				},
				compare: {
					description: 'The function that defines the sort order. The first parameter is the first item for comparison. The second parameter is the second item for comparison. The third parameter is for centering numeric values. The returned value must be a number.',
					type: ['Function'],
					defaultValue: 'list.compare-string()'
				},
				center: {
					description: 'For numeric comparison, the value indicating the center (zero) position between positive and negative values.',
					type: ['Number', 'auto'],
					defaultValue: 'auto'
				},
				separator: {
					...separatorParameter,
					description: 'The type of separator to be used by the sorted list.'
				}
			},
			return: {
				description: 'The sorted list.',
				type: ['List']
			}
		},

		'to-string': {
			group: 'main',
			description: 'Returns a string representing the specified list and its items.',
			parameters: {
				list: {
					description: 'The list from which to generate a string.',
					type: ['List', 'Map', 'ArgList<*>']
				}
			},
			return: {
				description: 'A string representing the given list.',
				type: ['String']
			}
		},

		'compare-numeric': {
			group: 'list/reference',
			description: 'Compares two list items as numbers in ascending order. All non-numeric items are shifted right.',
			parameters: {
				...compareParameters,
				...centerCompareParameter
			},
			...compareReferenceCommon
		},

		'compare-numeric-desc': {
			group: 'list/reference',
			description: 'Compares two list items as numbers in descending order. All non-numeric items are shifted left.',
			parameters: {
				...compareParameters,
				...centerCompareParameter
			},
			...compareReferenceCommon
		},

		'compare-string': {
			group: 'list/reference',
			description: 'Compares two list items by converting them to strings, then comparing the value’s sequences of UTF-16 code units values in ascending order. All null items are shifted right.',
			parameters: {
				...compareParameters
			},
			...compareReferenceCommon
		},

		'compare-string-desc': {
			group: 'list/reference',
			description: 'Compares two list items by converting them to strings, then comparing the value’s sequences of UTF-16 code units values in descending order. All null items are shifted left.',
			parameters: {
				...compareParameters
			},
			...compareReferenceCommon
		}

	}

};


export default spec;
export { bracketedParameter, centerCompareParameter, compareReferenceCommon, separatorParameter };
