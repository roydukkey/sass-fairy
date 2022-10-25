// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import packageJson from '@sass-fairy/v1/exception/package.json';
import type { ModuleSpec, SpecSignature } from '@site/src/spec/ModuleSpec';
import React, { Fragment } from 'react';


const contextParameter: SpecSignature['parameters'] = {
	context: {
		description: 'The name of the function or mixin issuing the error.',
		type: ['String']
	}
};


const messageParameter: SpecSignature['parameters'] = {
	message: {
		description: 'The message which describes the issue.',
		type: ['String']
	}
};


const valueParameter: SpecSignature['parameters'] = {
	value: {
		description: 'The value which was received.',
		type: ['*']
	}
};


const typesParameter: SpecSignature['parameters'] = {
	types: {
		description: 'The types which are expected.',
		type: ['ArgList']
	}
};


const validateIndexParameters: SpecSignature['parameters'] = {
	...contextParameter,
	name: {
		description: 'The name of the index parameter which is being validated.',
		type: ['String']
	},
	value: {
		description: 'The value of the index parameter which is being validated. A valid negative value will be transformed to the respective positive index value.',
		type: ['Number']
	}
};

const passedByName = 'Must be passed by name.';


const spec: ModuleSpec = {

	module: 'exception',
	description: packageJson.description,
	basePath: '/api/exception',

	functions: {

		'is-separator-invalid': {
			group: 'main',
			description: 'Indicates whether a specified value is invalid for a separator parameter.',
			parameters: {
				value: {
					description: 'The value which is being validated.',
					type: ['*']
				}
			},
			return: {
				description: <Fragment>
					<code>true</code> if the value is a valid; otherwise, <code>false</code>.
				</Fragment>,
				type: ['Boolean']
			}
		},

		parameter: {
			group: 'main',
			description: 'Returns an error message stating an issue with one or more parameters.',
			parameters: {
				...messageParameter,
				...contextParameter,
				names: {
					description: 'The names of the parameters for which there is an issue.',
					type: ['ArgList']
				}
			},
			return: {
				description: 'A string describing the reason one or more parameters are invalid.',
				type: ['String']
			}
		},

		'parameter-type': {
			group: 'main',
			description: 'Returns an error message stating a parameter received the wrong type.',
			parameters: {
				...contextParameter,
				name: {
					description: 'The name of the parameter which has received the wrong type.',
					type: ['String']
				},
				...valueParameter,
				...typesParameter
			},
			return: {
				description: 'A string describing what types are acceptable for a parameter and the value that is invalid.',
				type: ['String']
			}
		},

		separator: {
			group: 'main',
			description: 'Returns an error message stating a separator variable received the wrong value.',
			return: {
				description: 'A string describing what values are acceptable for a separator.',
				type: ['String']
			},
			overloads: [
				{
					description: 'Returns an error message stating a separator parameter received the wrong value.',
					parameters: {
						context: {
							...contextParameter.context
						}
					}
				}
			]
		},

		'validate-index': {
			group: 'main',
			description: 'Returns a valid index for a list of a given length; otherwise, an error message stating the reason the index is invalid.',
			parameters: {
				...validateIndexParameters,
				list: {
					description: 'The list value for which the index is validated against.',
					type: ['List']
				}
			},
			return: {
				description: 'A string when the index is not a number, is zero, or is invalid for the amount of elements in the list; otherwise, a number.',
				type: ['Number', 'String']
			},
			overloads: [
				{
					description: 'Returns a valid index for a string of a given length; otherwise, an error message stating the reason the index is invalid.',
					parameters: {
						...validateIndexParameters,
						string: {
							description: 'The string value for which the index is validated against.',
							type: ['String']
						}
					},
					return: {
						description: 'A string when the index is not a number; otherwise, a number.'
					}
				}
			]
		},

		variable: {
			group: 'main',
			description: 'Returns an error message stating an issue with one or more variables.',
			parameters: {
				...messageParameter,
				names: {
					description: 'The names of the variables for which there is an issue.',
					type: ['ArgList']
				}
			},
			return: {
				description: 'A string describing the reason one or more variables are misconfigured.',
				type: ['String']
			}
		},

		'variable-type': {
			group: 'main',
			description: 'Returns an error message stating a variable received the wrong type.',
			parameters: {
				name: {
					description: 'The name of the variable which has received the wrong type.',
					type: ['String']
				},
				...valueParameter,
				...typesParameter,
				message: {
					description: ['The additional message which describes the issue.', passedByName].join(' '),
					type: ['String'],
					defaultValue: 'null'
				}
			},
			return: {
				description: 'A string describing what types are acceptable for a variable and the value that is misconfigured.',
				type: ['String']
			}
		}

	}

};


export default spec;
export { passedByName };
