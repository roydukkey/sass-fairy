import type { ModuleSpec } from '@site/src/spec/ModuleSpec';
import packageJson from '@sass-fairy/meta/package.json';


const spec: ModuleSpec = {

	module: 'meta',
	description: packageJson.description,
	basePath: '/api/meta',

	functions: {

		'call-or-reference': {
			group: 'main',
			description: 'Allows a function to return its reference when no parameters are provided, otherwise maintaining its regular behavior.',
			parameters: {
				function: {
					description: 'The function to call or reference.',
					type: ['Function']
				},
				args: {
					description: 'The arguments to apply to the invocation of the function.',
					type: ['ArgList']
				}
			},
			return: {
				type: ['Function', '*']
			}
		},

		'get-keyword': {
			group: 'main',
			description: 'Gets the value of the named parameter from the given argument list, otherwise providing a default value.',
			parameters: {
				args: {
					description: 'The argument list from which to get the named parameter.',
					type: ['!ArgList']
				},
				name: {
					description: 'The name of the parameter to get.',
					type: ['String']
				},
				default: {
					description: 'The value of the parameter when not contained in the argument list.',
					type: ['*'],
					defaultValue: 'null'
				}
			},
			return: {
				type: ['*']
			}
		},

		'strip-keywords': {
			group: 'main',
			description: 'Strips all named parameters from the given argument list.',
			parameters: {
				args: {
					description: 'The argument list from which to strip all named parameters.',
					type: ['!ArgList']
				}
			},
			return: {
				description: 'Returns the values of an argument list without named parameters.',
				type: ['List']
			}
		}

	}

};


export default spec;
