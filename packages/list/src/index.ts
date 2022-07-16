// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { CustomFunction } from 'sass';
import ExceptionFunctions from '@sass-fairy/exception';
import MathFunctions from '@sass-fairy/math';
import MetaFunctions from '@sass-fairy/meta';


const functions: { [key: string]: CustomFunction<'sync'> } = {
	...ExceptionFunctions,
	...MathFunctions,
	...MetaFunctions
};


export default functions;
