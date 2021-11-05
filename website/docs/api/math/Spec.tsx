// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { ModuleSpec } from '@site/src/spec/ModuleSpec';
import packageJson from '@sass-fairy/math/package.json';


const spec: ModuleSpec = {

	module: 'math',
	description: packageJson.description,
	basePath: '/api/math',

	functions: {

		gcd: {
			group: 'math/bounding',
			description: 'Returns the Greatest Common Divisor (GCD) of a set of numbers.',
			parameters: {
				numbers: {
					description: 'The numbers for which to calculate the greatest common divisor.',
					type: ['ArgList<Number>']
				}
			},
			return: {
				type: ['Number']
			}
		},

		lcm: {
			group: 'math/bounding',
			description: 'Returns the Least Common Multiple (LCM) of a set of numbers.',
			parameters: {
				numbers: {
					description: 'The numbers for which to calculate the least common multiple.',
					type: ['ArgList<Number>']
				}
			},
			return: {
				type: ['Number']
			}
		},

		exp: {
			group: 'math/exponential',
			description: 'Returns Euler’s number to the specified power.',
			parameters: {
				numbers: {
					description: 'The power to which Euler’s number will be raise.',
					type: ['Number']
				}
			},
			return: {
				type: ['Number']
			}
		},

		fact: {
			group: 'math/exponential',
			description: 'Returns the factorial of the specified integer.',
			parameters: {
				numbers: {
					description: 'The integer to factorialize.',
					type: ['Number']
				}
			},
			return: {
				type: ['Number']
			}
		},

		change: {
			group: 'math/unit',
			description: 'Returns the given number with the same units as another specified number.',
			parameters: {
				number: {
					description: 'The number whose units will be changed.',
					type: ['Number']
				},
				units: {
					description: 'The number whose units will be inherited.',
					type: ['Number']
				}
			},
			return: {
				type: ['Number']
			}
		},

		unitless: {
			group: 'math/unit',
			description: 'Returns the unitless value of the specified number.',
			parameters: {
				number: {
					description: 'The number from which to strip units.',
					type: ['Number']
				}
			},
			return: {
				type: ['Number']
			}
		}

	}

};


export default spec;
